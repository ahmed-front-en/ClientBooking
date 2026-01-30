// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import roomsData from "../allRooms.js";

// function RoomDetails() {
//   const { id } = useParams();

//   // ===== GET ROOM =====
//   const room = roomsData.find((room) => room.id === Number(id));

//   // ===== BOOKING STATES =====
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");

//   // ===== CALCULATE NIGHTS =====
//   const nights =
//     checkIn && checkOut
//       ? Math.max(
//           0,
//           (new Date(checkOut) - new Date(checkIn)) /
//             (1000 * 60 * 60 * 24)
//         )
//       : 0;

//   const totalPrice = nights * room?.perNight;

//   // ===== ROOM NOT FOUND =====
//   if (!room) {
//     return (
//       <div className="pt-40 text-center text-gray-600">
//         Room not found
//       </div>
//     );
//   }

//   return (
//     <div className="pt-60 pb-24 px-4">
//       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

//         {/* ===== IMAGE ===== */}
//         <img
//           src={room.image}
//           alt={room.name}
//           className="w-full h-[300px] sm:h-[380px] object-cover"
//         />

//         {/* ===== CONTENT ===== */}
//         <div className="p-6 sm:p-8 space-y-8">

//           {/* ===== TITLE ===== */}
//           <div>
//             <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
//               {room.name}
//             </h1>
//             <p className="text-gray-500 mt-1">
//               📍 {room.location}
//             </p>
//           </div>

//           {/* ===== PRICE / STATUS ===== */}
//           <div className="flex flex-wrap items-center gap-4">
//             <div className="text-2xl font-semibold text-blue-600">
//               ${room.perNight}
//               <span className="text-sm text-gray-500 ml-1">/ night</span>
//             </div>

//             <span className="text-yellow-500 font-medium">
//               ★ {room.rating}
//             </span>

//             <span
//               className={`ml-auto font-semibold ${
//                 room.isAvailable ? "text-green-600" : "text-red-600"
//               }`}
//             >
//               {room.isAvailable ? "Available" : "Unavailable"}
//             </span>
//           </div>

//           {/* ===== BOOKING DATES ===== */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="text-sm text-gray-600">Check-in</label>
//               <input
//                 type="date"
//                 value={checkIn}
//                 onChange={(e) => setCheckIn(e.target.value)}
//                 className="w-full border rounded-lg p-2 mt-1"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-600">Check-out</label>
//               <input
//                 type="date"
//                 value={checkOut}
//                 onChange={(e) => setCheckOut(e.target.value)}
//                 className="w-full border rounded-lg p-2 mt-1"
//               />
//             </div>
//           </div>

//           {/* ===== BOOKING SUMMARY ===== */}
//           {nights > 0 && (
//             <div className="border rounded-xl p-4 bg-gray-50">
//               <p className="text-sm text-gray-600">
//                 {nights} nights × ${room.perNight}
//               </p>
//               <p className="text-lg font-bold text-gray-800">
//                 Total: ${totalPrice}
//               </p>
//             </div>
//           )}

//           {/* ===== AMENITIES ===== */}
//           <div>
//             <h3 className="font-semibold text-gray-700 mb-2">
//               Amenities
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               {room.amenities.map((item, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1 text-sm bg-gray-100 rounded-full"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* ===== ACTION ===== */}
//           <button
//             disabled={!room.isAvailable || nights === 0}
//             className={`w-full sm:w-auto px-8 py-3 rounded-xl font-semibold transition
//               ${
//                 room.isAvailable && nights > 0
//                   ? "bg-blue-600 text-white hover:bg-blue-700"
//                   : "bg-gray-300 text-gray-500 cursor-not-allowed"
//               }
//             `}
//           >
//             Book Now
//           </button>

//           {/* ===== MAP (NO API – ALWAYS WORKS) ===== */}
//           <div>
//             <h3 className="font-semibold text-gray-700 mb-3">
//               Location on Map
//             </h3>
//             <div className="w-full h-64 rounded-xl overflow-hidden border">
//               <iframe
//                 title="map"
//                 className="w-full h-full border-0"
//                 loading="lazy"
//                 src={`https://www.google.com/maps?q=${encodeURIComponent(
//                   room.location
//                 )}&output=embed`}
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default RoomDetails;






import React from "react";
import { useParams } from "react-router-dom";
import roomsData from "../allRooms.js";

function RoomDetails() {
  const { id } = useParams();

  const room = roomsData.find((room) => room.id === Number(id));

  if (!room) {
    return (
      <div className="pt-40 text-center text-gray-600">
        Room not found
      </div>
    );
  }

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-GB");

  return (
    <div className="pt-60 pb-24 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* IMAGE */}
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-[250] sm-h-[300] object-cover"
        />

        <div className="p-6 sm:p-8 space-y-8">

          {/* TITLE */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {room.name}
            </h1>
            <p className="mt-2 text-gray-500">📍 {room.location}</p>
          </div>

          {/* PRICE & STATUS */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-2xl font-semibold text-blue-600">
              ${room.perNight}
              <span className="text-sm text-gray-500 ml-1">/ night</span>
            </div>

            <span className="text-yellow-500 font-medium">
              ★ {room.rating}
            </span>

            <span
              className={`ml-auto font-semibold ${
                room.isAvailable ? "text-green-600" : "text-red-600"
              }`}
            >
              {room.isAvailable ? "Available" : "Booked"}
            </span>
          </div>

          {/* REAL BOOKING LOGIC */}
          <div className="border rounded-xl p-4 bg-gray-50 space-y-2">
            {room.isAvailable ? (
              <>
                <p className="text-sm text-gray-600">
                  Last booking ended on
                </p>
                <p className="font-semibold">
                  {room.booking?.lastBookedEnd
                    ? formatDate(room.booking.lastBookedEnd)
                    : "No previous bookings"}
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-600">
                  Room is booked until
                </p>
                <p className="font-semibold text-red-600">
                  {formatDate(room.booking.endDate)}
                </p>
              </>
            )}
          </div>

          {/* INFO */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="border rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500">Room Type</p>
              <p className="font-semibold">{room.roomType}</p>
            </div>

            <div className="border rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500">Created</p>
              <p className="font-semibold">{formatDate(room.createdAt)}</p>
            </div>

            <div className="border rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500">Last Update</p>
              <p className="font-semibold">{formatDate(room.updatedAt)}</p>
            </div>
          </div>

          {/* AMENITIES */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ACTION */}
          <button
            disabled={!room.isAvailable}
            className={`w-full sm:w-auto px-8 py-3 rounded-xl font-semibold transition
              ${
                room.isAvailable
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }
            `}
          >
            {room.isAvailable ? "Book Now" : "Unavailable"}
          </button>

          {/* MAP */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">
              Location on Map
            </h3>
            <div className="w-full h-64 rounded-xl overflow-hidden border">
              <iframe
                title="map"
                className="w-full h-full border-0"
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  room.location
                )}&output=embed `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
