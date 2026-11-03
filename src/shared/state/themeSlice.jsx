import { createSlice } from "@reduxjs/toolkit";

export let themeSlice=createSlice({
    name:"theme",
    initialState:{
        mode:localStorage.getItem("theme")||"dark ",
    },
    reducers:{
        toogletheme:(state)=>{
            state.mode=state.mode==="dark"?"light":"dark";
            localStorage.setItem("theme",state.mode)
        }
    }

})
export let{toogletheme}=themeSlice.actions;
export default themeSlice.reducer
