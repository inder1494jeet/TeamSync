import usermodel from "../model/user.model.js";
import bcryptjs from "bcryptjs"
import { createacesstoken,createrefreshtoken, readrefreshtoken } from "../utils/auth.utils.js";

import { application } from "express";
//register a user and save the data from body
//express request
//req.body.name
//req.body.password
//req.body.email
export const registercontroller=async(req,res)=>{
    const {email,name,password}=req.body
    const isuseralreadyExists= await usermodel.findOne({email})
    if(isuseralreadyExists)
    {
        return res.status(400).json({
            message:"user already registered with this email address",
            errors:[
                {
                    path:"email",
                    message:"user already exists with this email address"
                }
            ]
        })
    }
    const user=await usermodel.create({
        email,
        name,
        passwordhash:await bcryptjs.hash(password,12),
    })
    const accesstoken=createacesstoken({
        userid:user._id,
        role:user.role// user,seller
    })
    const refreshtoken=createrefreshtoken({
        userid:user._id,
        role:user.role,
    })
    await usermodel.findByIdAndUpdate(user._id,{
        refreshtoken
    })
    res.cookie("refreshtoken",refreshtoken,{httpOnly:true})
    res.status(201).json({
        message:"user registered successfully",
        data:{
            email:user.email,
            name:user.name,
            id:user._id,
        },
        accesstoken
    })
}

//login a user and create a new set of accesstoken and refreshtoken
export const logincontroller=async(req,res)=>{
    const {email,password}=req.body;
    const user =await usermodel.findOne({
        email
    })
    if(!user)
    {
        return res.status(400).json({
            message:"invalid email or password",
        })
    }
    const ispasswrordvalid=await  bcryptjs.compare(password,user.passwordhash)
    if(!ispasswrordvalid)
    {
        return res.status(400).json({
            message:"invalid email or password"
        })
    }
    const accesstoken=createacesstoken({userid:user._id,role:user.role})
    const refreshtoken =createrefreshtoken({userid:user._id,role:user.role})
    await usermodel.findOneAndUpdate({email},{
        refreshtoken
    })
    res.cookie("refreshtoken",refreshtoken,{httpOnly:true})
    res.status(200).json({
        message:"user loggedin successfully",
        data:{
            id:user._id,
            email:user.email,
            name:user.name
        },
        accesstoken,
    })
}

//refresh api for when accesstoken time end
export const refreshcontroller=async(req,res)=>{
    const refreshtoken=req.cookies.refreshtoken;
    if(!refreshtoken)
    {
        return res.status(401).json({
            message:"refresh token is required"
        })
    }
    try {
        const decoded=readrefreshtoken(refreshtoken);
        const {userid,role}=decoded;
        const user=await usermodel.findById(userid);
        if(refreshtoken !=user.refreshtoken)
        {
            await usermodel.findByIdAndUpdate(user._id,{
                refreshtoken:null
                // isaccountfreeze:true
            })
            return res.status(401).json({
                message:"refresh token missmatch"
            })
        }
        const accesstoken=createacesstoken({
            userid,role
        })
        const newrefreshtoken=createrefreshtoken({
            userid,role
        })
        await usermodel.findByIdAndUpdate(user._id,{
            refreshtoken:newrefreshtoken
        })
        res.cookie("refreshtoken",newrefreshtoken,{httpOnly:true})
        res.status(200).json({
            message:"token rotated succesfully",
            data:{
                email:user.email,
                id:user._id,
                name:user.name,
            },
            accesstoken
        })
    } catch (error) {
        return res.status(401).json({
            message:"invaild refresh token",
        })
    }



}

export const getmecontroller=async(req,res)=>{
    const {userid,role}=req.user;
    const user =await usermodel.findById(userid);
     res.status(200).json({
        message:"user data fetch successfully",
        data:{
            email:user.email,
            name:user.name,
            id:user._id,
        }
    })
}