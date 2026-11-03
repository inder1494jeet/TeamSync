import React from 'react'
import{Bell ,Menu, Search} from "lucide-react"
const Topnav = () => {
  return (
    
      <div className='flex justify-between items-center'>
        <div className='flex gap-4 items-center w-[30%] rounded px-3 py-2  bg-[var(--color-surface)] border border-gray-600' >
            <Search/>
            <input className='outline-none w-full' type="text"  placeholder='Search Workspace'/>
            </div>
        <div className='flex gap-4'> 
            <Bell size={24}/>
            <Menu size={24}/>
        </div>

      </div>
   
  )
}

export default Topnav
