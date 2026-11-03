import { ChartArea } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const NavigationTab = ({path,title,Icon}) => {
  return (
    <NavLink className={({isActive})=>`flex w-full gap-3 ${isActive?'pl-4 py-2 border-r-4 border-[var(--color-on-surface)] bg-[var(--color-outline)]':""}`}
     to={path}
     end="/">
        <ChartArea size={23}/>
        {title}
    </NavLink>
  )
}

export default NavigationTab
