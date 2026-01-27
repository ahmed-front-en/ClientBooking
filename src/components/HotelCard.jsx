import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

// انت هتغير الصور براحتك
import hotel_1 from "../assets/hotel_1.jpg";
import hotel_2 from "../assets/hotel_2.jpg";
import hotel_3 from "../assets/hotel_3.jpg";
import hotel_4 from "../assets/hotel_4.jpg";
import hotel_5 from "../assets/hotel_5.jpg";

const HotelCard = () => {
  const hotels = [
    {
      id: 1,
      name: "Sunrise Resort",
      rating: 4.8,
      location: "Hurghada, Egypt",
      price: 120,
      image: hotel_1,
    },
    {
      id: 2,
      name: "Royal Palace Hotel",
      rating: 4.5,
      location: "Cairo, Egypt",
      price: 95,
      image: hotel_2,
    },
    {
      id: 3,
      name: "Blue Sea Hotel",
      rating: 4.2,
      location: "Alexandria, Egypt",
      price: 80,
      image: hotel_3,
    },
     {
      id: 3,
      name: "Blue Sea Hotel",
      rating: 4.2,
      location: "Alexandria, Egypt",
      price: 80,
      image: hotel_4,
    },
     {
      id: 3,
      name: "Blue Sea Hotel",
      rating: 4.2,
      location: "Alexandria, Egypt",
      price: 80,
      image: hotel_5,
    },
  ];

  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Hotels</h2>
      {/* Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              {/* Name & Rating */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  {hotel.name}
                </h3>

                <div className="flex items-center gap-1 text-sm text-yellow-500">
                  <FaStar />
                  <span className="text-gray-700 font-medium">
                    {hotel.rating}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaMapMarkerAlt />
                <span>{hotel.location}</span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-800 font-semibold">
                  ${hotel.price}
                  <span className="text-sm text-gray-500 font-normal">
                    {" "}
                    / night
                  </span>
                </p>

                <button className="px-4 py-2 text-sm rounded-full bg-black text-white hover:bg-gray-800 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelCard;
