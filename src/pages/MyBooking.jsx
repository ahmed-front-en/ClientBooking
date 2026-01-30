import React from "react";
import allrooms_1 from '../assets/allrooms_1.jpg'
import allrooms_2 from '../assets/allrooms_2.jpg'

function MyBooking() {
  const myBookings = [
    {
      id: 1,
      roomName: "Deluxe Room",
      hotel: "Sunrise Hotel",
      checkIn: "2026-02-10",
      checkOut: "2026-02-15",
      price: 120,
      image: allrooms_1,
      status: "Confirmed",
    },
    {
      id: 2,
      roomName: "Sea View Suite",
      hotel: "Blue Wave Resort",
      checkIn: "2026-03-01",
      checkOut: "2026-03-05",
      price: 200,
      image: allrooms_2,
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen  bg-gray-100 p-8 pt-70">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Bookings</h1>

      <div className="overflow-x-auto  bg-white shadow-md rounded-lg">
        <table className="w-full  text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3">Image</th>
              <th className="p-3">Room</th>
              <th className="p-3">Hotel</th>
              <th className="p-3">Check-in</th>
              <th className="p-3">Check-out</th>
              <th className="p-3">Price / Night</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {myBookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="p-3">
                  <img
                    src={booking.image}
                    alt={booking.roomName}
                    className="w-20 h-16 object-cover rounded-md"
                  />
                </td>

                <td className="p-3 font-medium text-gray-800">
                  {booking.roomName}
                </td>

                <td className="p-3">{booking.hotel}</td>

                <td className="p-3">{booking.checkIn}</td>

                <td className="p-3">{booking.checkOut}</td>

                <td className="p-3 font-semibold">${booking.price}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      booking.status === "Confirmed"
                        ? "bg-green-200 text-green-800"
                        : booking.status === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBooking;
