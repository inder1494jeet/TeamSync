import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    passwordhash:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"employee"
    },
    refreshtoken:{
        type:String

    }
})
const usermodel=mongoose.model("users",userschema)
export default usermodel;