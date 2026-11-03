import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import {useDispatch} from "react-redux"
import { loginEmployee, registerEmployee } from "../state/auth/authaction";
export let useAuth=()=>{
    let dispatch=useDispatch();
    const{register,reset,handleSubmit,formState:{errors},watch}=useForm({
        mode:"onChange"
    });
    const onregistersubmit=(data)=>{
        dispatch(registerEmployee(data));
        reset();
    }
    const onloginsubmit=(data)=>{
       dispatch(loginEmployee(data));
        
        reset();
    }
    let navigate=useNavigate();
    return {
        register,
        handleSubmit,
        errors,
        onloginsubmit,
        onregistersubmit,
        navigate,
        watch
    }
}