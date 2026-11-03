import { createSlice } from "@reduxjs/toolkit";
import { currentloggedinEmployee, loginEmployee, registerEmployee } from "./authaction";

let authslice=createSlice({
    name:"auth",
    initialState:{
        employee:null,
        isLoading:false,
    },
    reducers:{
        addemployee:(state,action)=>{
            state.employee=action.payload;
            state.isLoading=false;
        },
        removeemployee:(state)=>{
            state.employee=null;
            state.isLoading=false;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginEmployee.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(loginEmployee.fulfilled,(state,action)=>{
            state.employee=action.payload;
            state.isLoading=false;
        })
        .addCase(loginEmployee.rejected,(state)=>{
            state.isLoading=false;
        })
        .addCase(registerEmployee.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(registerEmployee.fulfilled,(state,action)=>{
            state.employee=action.payload;
            state.isLoading=false;
        })
        .addCase(registerEmployee.rejected,(state)=>{
            state.isLoading=false;
        })
        .addCase(currentloggedinEmployee.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(currentloggedinEmployee.fulfilled,(state,action)=>{
            state.employee=action.payload;
            state.isLoading=false;
        })
        .addCase(currentloggedinEmployee.rejected,(state)=>{
            state.isLoading=false;
        })
    }
})
export let{addemployee,removeemployee}=authslice.actions;
export default authslice.reducer;