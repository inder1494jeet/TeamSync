import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../features/auth/state/auth/authslice"
import themereducer from "../shared/state/themeSlice";
export let store=configureStore({
    reducer:{
        auth:authreducer,
        theme:themereducer,
    }
})