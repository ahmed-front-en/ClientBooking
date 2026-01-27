import React from "react";

import hotel_3 from "../assets/hotel_3.jpg";

function Hero() {
  return (
    <div
      
      className="
  relative
  flex
  flex-col
  items-center
  justify-center
  pt-30
  md:pt-50
  p-10
  text-white
  bg-cover
  bg-center
  bg-no-repeat
  min-h-screen
"

      style={{ backgroundImage: `url(${hotel_3})` }}
  >

    <div className="absolute inset-0 bg-black opacity-60"></div>     
    <div className="relative z-10">
      <div className="text-center mb-6">
       <h2 className="text-[#e89755] text-4xl mb-3 font-bold">Fiend Your Perfect Stay, Anywhere</h2>
       <p className="text-2xl ">Descover top-rated hotels and exclusive deals arownd the world</p>
       <button className="mt-5">Book New</button>
</div>
 


     <div className="w-full flex justify-center mt-12">
  <form className="w-full max-w-sm bg-white p-4 rounded-xl shadow-md space-y-3">
    
    <h2 className="text-lg font-bold text-center text-gray-800">
      Book Your Trip
    </h2>

    {/* Destination */}
    <div className=" mt-10px">
      <label className="block mb-1 text-xs font-medium text-gray-700 ">
        Destination
      </label>
      <select className="bg-orange-400 w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500">
        <option value="">Select destination</option>
        <option value="cairo">Cairo</option>
        <option value="alex">Alexandria</option>
        <option value="hurghada">Hurghada</option>
      </select>
    </div>

    {/* Name */}
    <div >
      <label className="block mb-1 text-xs font-medium text-gray-700">
        Full Name
      </label>
      <input
        type="text"
        placeholder="Enter your name"
        className=" w-full p-2 text-sm text-orange-400 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block mb-1 text-xs font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className="text-orange-400 w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>

    {/* Phone */}
    <div>
      <label className="block mb-1 text-xs font-medium text-gray-700">
        Phone
      </label>
      <input
        type="tel"
        placeholder="Enter your phone"
        className="text-orange-400 w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>

    {/* Date */}
    <div>
      <label className="block mb-1 text-xs font-medium text-gray-700">
        Date
      </label>
      <input
        type="date"
        className=" text-orange-400 w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>

<div className="text-center ">
    {/* Button */}
    <button
      type="submit"
      className="mt-3 w-full bg-blue-600 text-white py-2 text-sm rounded-lg font-semibold hover:bg-blue-700 transition"
    >
      Search Hotel
    </button>
    </div>

  </form>
</div>


    
    
 </div>
      </div>  
   
  );
}

export default Hero;
