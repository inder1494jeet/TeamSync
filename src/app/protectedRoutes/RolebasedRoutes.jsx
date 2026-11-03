import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const RolebasedRoutes = ({allowedRoles}) => {

    let {employee}=useSelector((store)=>store.auth);
    console.log(employee);
    if(!allowedRoles.includes(employee?.role))
    {
        return <Navigate to={"/unauthorized"}/>
    }
  return <Outlet/>
}

export default RolebasedRoutes
 