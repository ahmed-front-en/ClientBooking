import React from "react";
import testimonial_1 from "../assets/testimonial_1.jpg";
import testimonial_2 from "../assets/testimonial_2.png";
import testimonial_3 from "../assets/testimonial_3.jpg";


export default function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      name: "Ahmed Hassan",
      role: "Traveler",
      comment:
        "The booking process was super easy and the hotel exceeded my expectations!",
      rating: 5,
      image: testimonial_1, 
    },
    {
      id: 2,
      name: "Sarah Ali",
      role: "Tourist",
      comment:
        "Great offers and amazing customer support. I will definitely book again.",
      rating: 4,
      image: testimonial_2,
    },
    {
      id: 3,
      name: "Mohamed Salah",
      role: "Business Traveler",
      comment:
        "Very professional service and excellent hotel recommendations.",
      rating: 5,
      image: testimonial_3,
    },
  ];

  return (
    <div className="testimonials grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {testimonialsData.map((item) => (
        <div
          key={item.id}
          className="testimonial-card bg-white rounded-2xl shadow-lg p-6 space-y-4"
        >
          {/* User Image */}
          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
            { <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            /> }
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-bold text-[#e89755]">
              {item.name}
            </h3>
            <p className="text-sm text-gray-500">
              {item.role}
            </p>
          </div>

          {/* Comment */}
          <p className="text-gray-600 text-sm leading-relaxed">
            “{item.comment}”
          </p>

          {/* Rating */}
          <div className="flex gap-1 text-yellow-400">
            {[...Array(item.rating)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
