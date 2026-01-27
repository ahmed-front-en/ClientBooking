import React from "react";
import offer_1 from "../assets/offer_1.jpg";
import offer_2 from "../assets/offer_2.jpg";
import offer_3 from "../assets/offer_3.jpg";

export default function Offers() {
  const offersData = [
    {
      id: 1,
      name: "Summer Escape",
      description: "Enjoy a relaxing summer vacation with special discounts",
      discount: "20% OFF",
      price: 1200,
      location: "Hurghada",
      image: offer_1, 
    },
    {
      id: 2,
      name: "Weekend Deal",
      description: "Perfect weekend getaway for couples",
      discount: "15% OFF",
      price: 900,
      location: "Alexandria",
      image: offer_2,
    },
    {
      id: 3,
      name: "Luxury Experience",
      description: "5-star hotel with premium services",
      discount: "30% OFF",
      price: 2500,
      location: "Cairo",
      image: offer_3,
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Offers</h2>
      <p className="text-center mb-6 text-lg text-gray-600">Explore exclusive offers and discounts for your next vacation.</p>
      
    <div className="offers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {offersData.map((offer) => (
        <div
          key={offer.id}
          className="offer-card bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Image */}
          <div className="h-48 bg-gray-200">
            { <img src={offer.image} alt={offer.name} className="w-full h-full object-cover" /> }
          </div>

          {/* Content */}
          <div className="p-4 space-y-2">
            <h3 className="text-xl font-bold text-[#e89755]">
              {offer.name}
            </h3>

            <p className="text-sm text-gray-600">
              {offer.description}
            </p>

            <p className="text-sm text-gray-500">
              📍 {offer.location}
            </p>

            <div className="flex items-center justify-between mt-3">
              <span className="text-green-600 font-semibold">
                {offer.discount}
              </span>

              <span className="text-lg font-bold text-gray-800">
                ${offer.price}
              </span>
            </div>

            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                Vew Offer
            </button>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}
