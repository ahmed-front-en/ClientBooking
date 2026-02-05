import React from 'react'
import { NavLink } from 'react-router'

function SideNavbar() {

    const sideNavbarLinks = [
        {name: 'Dashboard', path: '/dashboard'},
        {name: 'AddHotel', path: '/dashboard/addhotel'},
        {name: 'HotelList', path: '/dashboard/hotellist'},
    ]


  return (
    <div className='w-16 md:w-65 border-r h-full text-base border-gray-300 pt-5 flex flex-col  transition-all duration-500'>
   
     {sideNavbarLinks.map((item, index)=>(
      <NavLink end = {item.path === '/dashboard'}
      key={index} 
      to={item.path } className={({isActive}) =>
     `md:block hidden text-center py-2 transition mt-4 px-10 ${isActive ? 'bg-[#f9db98] text-black font-semibold': 'text-gray-600' }`
     }
     >
      {item.name}
      </NavLink>
     ))}
    </div>
  )
}

export default SideNavbar