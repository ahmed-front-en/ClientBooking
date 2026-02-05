import React from 'react'
import allrooms_1 from '../../assets/allrooms_1.jpg'
import allrooms_2 from '../../assets/allrooms_2.jpg'
import allrooms_3 from '../../assets/allrooms_3.jpg'
import allrooms_4 from '../../assets/allrooms_4.jpg'


function HotelList() {



  const roomsData = [
    {
      id: 1,
      name: "Deluxe Sea View Room",
      location: "Hurghada, Egypt",
      perNight: 120,
      rating: 5,
      image: allrooms_1,
      isAvailable: true,
      roomType: "Deluxe",
      createdAt: "2024-10-01",
      updatedAt: "2024-12-15",
  
      booking: {
        lastBookedEnd: "2026-01-20"
      },
  
      amenities: ["Free WiFi", "Sea View", "Breakfast Included"],
    },
  
    {
      id: 2,
      name: "Luxury Family Suite",
      location: "Sharm El Sheikh, Egypt",
      perNight: 220,
      rating: 4.5,
      image: allrooms_2,
      isAvailable: false,
      roomType: "Suite",
      createdAt: "2024-08-12",
      updatedAt: "2024-11-20",
  
      booking: {
        startDate: "2026-01-25",
        endDate: "2026-02-02"
      },
  
      amenities: ["Free WiFi", "Pool Access", "Family Friendly"],
    },
  
    {
      id: 3,
      name: "Standard City Room",
      location: "Cairo, Egypt",
      perNight: 80,
      rating: 4,
      image: allrooms_3,
      isAvailable: true,
      roomType: "Standard",
      createdAt: "2024-07-05",
      updatedAt: "2024-10-09",
  
      booking: {
        lastBookedEnd: "2026-01-10"
      },
  
      amenities: ["Free WiFi", "City View", "Air Conditioning"],
    },
  
    {
      id: 4,
      name: "Executive Business Room",
      location: "New Cairo, Egypt",
      perNight: 150,
      rating: 4.8,
      image: allrooms_4,
      isAvailable: true,
      roomType: "Business",
      createdAt: "2024-09-18",
      updatedAt: "2024-12-02",
  
      booking: {
        lastBookedEnd: "2026-01-05"
      },
  
      amenities: ["Workspace", "High-Speed WiFi", "Breakfast Included"],
    },
  ];






  return (
    <div style={{maxWidth: '900px',
      margin: '20px auto',
      fontFamily: 'Arial, sans-serif',
      padding: ' 10px'
    }}>
      <h1 style={{textAlign: 'center' ,fontSize: '24px', fontWeight: 'bold', marginBottom: '30px'}}>Available Rooms</h1>
      {roomsData.map((room) => (
        <div style={{display: 'flex', gap: '20px', marginBottom: '25px', 
          padding: '15px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8',
          backgroundColor: room.isAvailable? '#e0ffe0' : '#ffe0e0',
          alignItems: 'center'
        }}>

          <img
          src={room.image}
          style={{width: '150px',
            height: '100px',
            borderRadius: '8px',
            objectFit: 'cover'
          }}
          />
          <div style={{flexGrow: '1'}}>
            <h2 style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '10px'}}>{room.name}</h2>
            <p style={{fontSize: '14px', marginBottom: '10px'}}>{room.location}</p>
            <p style={{fontSize: '14px', marginBottom: '10px'}}>Per Night: ${room.perNight}</p>
            <p style={{fontSize: '14px', marginBottom: '10px'}}>Rating: {room.rating} / 5</p>
            
            <p style={{fontSize: '14px', fontWeight: 'bold', color: room.isAvailable ? 'green' : 'red'}}>
              {room.isAvailable ? 'Available' : 'Not Available'}
            </p>
          </div>

        </div>
      ) )}
    </div>
  )
}

export default HotelList