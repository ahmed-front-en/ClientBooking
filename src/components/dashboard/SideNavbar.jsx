import React from 'react'

function SideNavbar() {

    const sideNavbarLinks = [
        {name: 'Dashboard', path: '/dashboard'},
        {name: 'AddHotel', path: '/dashboard/addhotel'},
        {name: 'HotelList', path: '/dashboard/hotellist'},
    ]


  return (
    <div className='w-16 md:w-65 border-r h-full text-base border-gray-300 pt-5 flex flex-col  transition-all duration-500'>

    </div>
  )
}

export default SideNavbar