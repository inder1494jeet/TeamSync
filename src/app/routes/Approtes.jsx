import React, { useEffect } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import AuthLayout from '../../Layout/AuthLayout';
import Login from '../../features/auth/ui/pages/Login';
import Register from '../../features/auth/ui/pages/Register';
import MainLayout from '../../Layout/MainLayout';

import { useDispatch } from 'react-redux';
import { currentloggedinEmployee } from '../../features/auth/state/auth/authaction';
import ProtectedRoutes from '../protectedRoutes/ProtectedRoutes';
import PublicRoutes from '../protectedRoutes/PublicRoutes';
import { commonRoutes } from './commonRoutes';
import RolebasedRoutes from '../protectedRoutes/RolebasedRoutes';
import { adminRoutes } from './adminRouts';
import { employeeRoutes } from './employeeRoutes';
const Approtes = () => {
    let dispatch=useDispatch();
    useEffect(()=>{
        (()=>{
           dispatch(currentloggedinEmployee()) 
        })();
    },[])
    let router=createBrowserRouter([
        {
            path:"/",
            element:<PublicRoutes/>,
            children:[
                {
                    path:"",
                    element:<AuthLayout/>,
                    children:[
                        {
                    path:"",
                    element:<Login/>
                },
                {
                    path:"register",
                    element:<Register/>
                },
                    ]
                }
            ]
        },
        {
            path:"/home",
            element:<ProtectedRoutes/>,
            
            children:[
                {
                    path:"",
                    element:<MainLayout/>,
                    children: [
                        ...commonRoutes,
                        {
                            element:<RolebasedRoutes allowedRoles={"admin"}/>,
                            children:adminRoutes,
                        },
                        {
                            element:<RolebasedRoutes allowedRoles={"employee"}/>,
                            children:employeeRoutes,
                        },
                    ],
                },
            ]
        },

    ])
  return <RouterProvider router={router}/>
}

export default Approtes
