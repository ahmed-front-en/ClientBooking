import React from 'react'
import Navbaar from '../../components/dashboardF/Navbaar'
import SideNavbar from '../../components/dashboardF/SideNavbar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className='flex flex-col h-screen'>
        <Navbaar/>

        <div className='flex h-full '>

          <SideNavbar/>

          <div>
             <Outlet/>
            </div>

        </div>
    </div>
  )
}

export default Layout