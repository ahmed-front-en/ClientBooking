import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import AllHotels from './pages/AllHotels';
import RoomDetails from './pages/RoomDetails';



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
     </Routes>
     </div>
   </>
  )
}

export default App





