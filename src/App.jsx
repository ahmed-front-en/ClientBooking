import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {


  const isDashboard = useLocation().pathname.includes('/dashboard');

  return (

   <>
     { !isDashboard &&<Navbar />  }
    <div className='min-h-[70vh]'>

      <Routes>
        <Route path='/' element={<Home />} />
     </Routes>
     </div>
   </>
  )
}

export default App





