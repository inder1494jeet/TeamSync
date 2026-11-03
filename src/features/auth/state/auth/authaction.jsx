import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../app/config/axiosInstance";

export let loginEmployee=createAsyncThunk("/auth/login",async(credentails,thunkapi)=>{
try {
    let res=await axiosInstance.post("/auth/login",credentails);
    console.log(res);
    return res.data.data;
    
} catch (error) {
    return  thunkapi.rejectWithValue(error)
}
})
export let registerEmployee=createAsyncThunk("/auth/register",async(credentails,thunkapi)=>{
try {
    let res=await axiosInstance.post("/auth/register",credentails);
    console.log(res);
    return res.data.data;
    
} catch (error) {
    return  thunkapi.rejectWithValue(error)
}
})
export let currentloggedinEmployee=createAsyncThunk("/api/auth/me",async(_,thunkapi)=>{
    try {
        let res=await axiosInstance.get("/auth/me")
        console.log(res);
        return res.data.user;
    } catch (error) {
        return thunkapi.rejectWithValue(error)
    }
})