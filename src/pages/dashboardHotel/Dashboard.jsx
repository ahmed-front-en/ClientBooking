import React from 'react'
import { FaBookOpen, FaDollarSign } from 'react-icons/fa'

function Dashboard() {
  const dashInfo = 
    {
      totalBooking: '7',
      totalRevenue: '1500',
    }
  
  return (
    <div className='mt-4 p-4'>
        <h1 className='text-2xl font-bold mb-2'>
          Hotel Booking Dashboard
        </h1>

        <p className='text-gray-600'>
            Manage your hotel bookings with ease.
        </p>
        <div className='flex gap-4 my-8'>
          <div className='bg-amber-100 border gap-2 items-center border-amber-500 rounded p-5 flex'>
            <FaBookOpen/>
            <div className='flex flex-col '>
              <p>Tootal Bookings</p>
              <p className='font-bold text-center'>{dashInfo.totalBooking} Bookings</p>

            </div>
          </div>

            <div className='bg-amber-100 border gap-2 items-center border-amber-500 rounded p-5 flex'>
            <FaDollarSign/>
            <div className='flex flex-col '>
              <p>Tootal Revenues</p>
              <p className='font-bold text-center'>{dashInfo.totalRevenue} $</p>

            </div>
          </div>


          <div>

          </div>

        </div>

    </div>
  )
}

export default Dashboard