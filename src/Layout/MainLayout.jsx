import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import Asidenav from '../features/dashboard/ui/components/asidenav'
import Topnav from '../features/dashboard/ui/components/Topnav'
const MainLayout = () => {
  let {mode}=useSelector((store)=>store.theme)
  useEffect(()=>{
    if(mode==="light")
    {
      document.body.classList.add("light")
    }
    else{
      document.body.classList.remove("light")
    }
  },[mode])
  return (
    <div className='h-screen grid grid-cols-[1fr_6fr] '>
        <div className='bg-blue-950 border-r border-gray-500 px-6 py-4'>
          <Asidenav/>
        </div>
      <div className='flex flex-col gap-5 px-6 py-4'>
        <div ><Topnav/></div>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout
