import React from 'react'
import { NavLink } from 'react-router'
import NavigationTab from './NavigationTab'
import { ChartArea } from 'lucide-react'
import { useSelector } from 'react-redux'
import { adminnvigations, employeenvigations } from '../../../../app/constants/navigations'

const Asidenav = () => {
  let {employee}=useSelector((store)=>store.auth);
  let navigation =employee?.role=== "admin"?adminnvigations:employeenvigations;
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl font-semibold text-[#CAB8F9]'>TeamSync</h1>
        <p className='text-[var(--color-on-surface-variant)]'>
          Enterprise Workspace
          </p>
      </div>
      <div className='flex flex-col gap-3'>
        {
          navigation.map((route)=>{
            return (
              <NavigationTab
              path={route.path}
              Icon={route.Icon}
              title={route.title}
            />
            )
          })
        }
      </div>
    </div>
  )
}

export default Asidenav
