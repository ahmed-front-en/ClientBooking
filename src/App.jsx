import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import AllHotels from './pages/AllHotels';
import RoomDetails from './pages/RoomDetails';
import MyBooking from './pages/MyBooking';
import Layout from '../src/pages/dashboard/Layout';



function App() {


  const isDashboard = useLocation().pathname.includes('/dashboard');

  return (

   <>
     { !isDashboard &&<Navbar />  }
    <div className='min-h-[70vh]'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<AllHotels />} />
        <Route path='/room/:id' element={<RoomDetails />} />
        <Route path='/My-Booking' element={<MyBooking />} />
        <Route path='/dashboard' element={<Layout/>}></Route>
     </Routes>
     </div>
   </>
  )
}

export default App





