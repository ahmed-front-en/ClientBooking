

// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Link } from "react-router-dom";
// // import allrooms_1 from "../assets/allrooms_1.jpg";
// // import allrooms_2 from "../assets/allrooms_2.jpg";
// // import allrooms_3 from "../assets/allrooms_3.jpg";
// // import allrooms_4 from "../assets/allrooms_4.jpg";


// // function AllHotels() {
// //   const navigate = useNavigate();
// //   const [oppenFilter, setOppenFilter] = useState(false);

// // const [filterrs, setFilters] = useState({
// //   roomType: [],
// //   priceRange: "",
// //   rating: "",
// // });
// // const handlePriceChange = (range) => {
// //   setFilters((prev) => ({ ...prev, priceRange: range }));
// // };
// // const handleRatingChange = (rate) => {
// //   setFilters((prev) => ({ ...prev, rating: rate }));
// // };
// // const clearFilters = () => {
// //   setFilters({
// //     roomType: [],
// //     priceRange: "",
// //     rating: "",
// //   });
// // };
// // const filteredRooms = roomsData.filter((room) => {
// //   // Room Type
// //   if (
// //     filters.roomType.length &&
// //     !filters.roomType.includes(room.roomType)
// //   ) {
// //     return false;
// //   }

// //   // Price
// //   if (filters.priceRange === "low" && room.perNight > 100) return false;
// //   if (
// //     filters.priceRange === "mid" &&
// //     (room.perNight < 100 || room.perNight > 200)
// //   )
// //     return false;
// //   if (filters.priceRange === "high" && room.perNight < 200) return false;

// //   // Rating
// //   if (filters.rating && room.rating < filters.rating) return false;

// //   return true;
// // });


// //   const encodeId = (id) => btoa(id.toString());

// //   const roomsData = [
// //     {
// //       id: 1,
// //       name: "Deluxe Sea View Room",
// //       location: "Hurghada, Egypt",
// //       perNight: 120,
// //       rating: 5,
// //       image: allrooms_1,
// //       isAvailable: true,
// //       roomType: "Deluxe",
// //       createdAt: "2024-10-01",
// //       updatedAt: "2024-12-15",
// //       amenities: ["Free WiFi", "Sea View", "Breakfast Included"],
// //     },
// //     {
// //       id: 2,
// //       name: "Luxury Family Suite",
// //       location: "Sharm El Sheikh, Egypt",
// //       perNight: 220,
// //       rating: 4.5,
// //       image: allrooms_2,
// //       isAvailable: false,
// //       roomType: "Suite",
// //       createdAt: "2024-08-12",
// //       updatedAt: "2024-11-20",
// //       amenities: ["Free WiFi", "Pool Access", "Family Friendly"],
// //     },
// //     {
// //       id: 3,
// //       name: "Standard City Room",
// //       location: "Cairo, Egypt",
// //       perNight: 80,
// //       rating: 4,
// //       image: allrooms_3,
// //       isAvailable: true,
// //       roomType: "Standard",
// //       createdAt: "2024-07-05",
// //       updatedAt: "2024-10-09",
// //       amenities: ["Free WiFi", "City View", "Air Conditioning"],
// //     },
// //     {
// //       id: 4,
// //       name: "Executive Business Room",
// //       location: "New Cairo, Egypt",
// //       perNight: 150,
// //       rating: 4.8,
// //       image: allrooms_4,
// //       isAvailable: true,
// //       roomType: "Business",
// //       createdAt: "2024-09-18",
// //       updatedAt: "2024-12-02",
// //       amenities: ["Workspace", "High-Speed WiFi", "Breakfast Included"],
// //     },
// //   ];

// //   return (
// //     <div className="pt-60 px-6 lg:px-24">
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
// //         {/* ====== LEFT CONTENT (Cards) ====== */}
// //         <div className="space-y-10">
// //           {/* Section Header */}
// //           <div className="flex flex-col items-start text-left mb-12">
// //             <h1 className="text-[#e89755] text-4xl font-bold">
// //               Hotel Rooms
// //             </h1>
// //             <p className="mt-3 max-w-xl text-gray-600">
// //               Explore our wide range of hotels and find the perfect place to stay
// //             </p>
// //           </div>

// //           {/* Rooms Grid */}
// //           <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
// //             {roomsData.map((room) => (
// //               <div
// //                 key={room.id}
// //                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm"
// //               >
// //                 {/* Image */}
// //                 <div
// //                   className="h-48 overflow-hidden cursor-pointer"
// //                   onClick={() => navigate(`/room/${encodeId(room.id)}`)}
// //                 >
// //                   <img
// //                     src={room.image}
// //                     alt={room.name}
// //                     className="w-full h-full object-cover"
// //                   />
// //                 </div>

// //                 {/* Content */}
// //                 <div className="p-5 space-y-3">
// //                   <div className="flex items-center justify-between">
// //                     <h3 className="text-lg font-bold text-gray-800">
// //                       {room.name}
// //                     </h3>

// //                     <span
// //                       className={`text-sm font-semibold ${
// //                         room.isAvailable ? "text-green-600" : "text-red-600"
// //                       }`}
// //                     >
// //                       {room.isAvailable ? "Available" : "Booked"}
// //                     </span>
// //                   </div>

// //                   <p className="text-sm text-gray-500">{room.location}</p>

// //                   <div className="flex items-center justify-between">
// //                     <span className="text-[#e89755] font-semibold">
// //                       ${room.perNight} / night
// //                     </span>
// //                     <span className="text-sm text-yellow-500">
// //                       ★ {room.rating}
// //                     </span>
// //                   </div>

// //                   <div className="flex items-center gap-2">
// //                     <span className="text-xs text-gray-400">
// //                       Type: <span className="text-gray-700">{room.roomType}</span>
// //                     </span>
// //                     <span className="text-xs text-gray-400">
// //                       Created: <span className="text-gray-700">{room.createdAt}</span>
// //                     </span>
// //                   </div>

// //                   <div className="flex items-center gap-2">
// //                     <span className="text-xs text-gray-400">
// //                       Updated: <span className="text-gray-700">{room.updatedAt}</span>
// //                     </span>
// //                   </div>

// //                   <div className="flex flex-wrap gap-2">
// //                     {room.amenities.map((amenity, idx) => (
// //                       <span
// //                         key={idx}
// //                         className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
// //                       >
// //                         {amenity}
// //                       </span>
// //                     ))}
// //                   </div>

// //                   <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
// //                     View Details
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* ====== RIGHT CONTENT (Filters Sidebar) ====== */}


// //       <div className="w-80 border border-gray-300 text-gray-600">

// //   {/* Header */}
// //   <div
// //     className={`flex items-center justify-between px-5 py-4
// //     ${oppenFilter ? "border-b" : ""}`}
// //   >
// //     <p className="font-semibold">FILTERS</p>

// //     <div className="flex gap-3 text-sm">
// //       <span
// //         onClick={() => setOppenFilter(!oppenFilter)}
// //         className="lg:hidden cursor-pointer text-blue-600"
// //       >
// //         {oppenFilter ? "Hide" : "Show"}
// //       </span>

// //       <span
// //         onClick={clearFilters}
// //         className="hidden lg:block cursor-pointer text-red-500"
// //       >
// //         Clear
// //       </span>
// //     </div>
// //   </div>

// //   {/* Content */}
// //   <div
// //     className={`${oppenFilter ? "block" : "hidden"} lg:block px-5 py-4 space-y-6`}
// //   >
// //     {/* Room Type */}
// //     <div>
// //       <p className="font-medium mb-2">Room Type</p>
// //       {["Deluxe", "Suite", "Standard", "Business"].map((type) => (
// //         <label key={type} className="flex gap-2 text-sm">
// //           <input
// //             type="checkbox"
// //             checked={filters.roomType.includes(type)}
// //             onChange={() => handleRoomTypeChange(type)}
// //           />
// //           {type}
// //         </label>
// //       ))}
// //     </div>

// //     {/* Price */}
// //     <div>
// //       <p className="font-medium mb-2">Price Range</p>
// //       <label className="flex gap-2 text-sm">
// //         <input type="radio" name="price" onChange={() => handlePriceChange("low")} />
// //         Under $100
// //       </label>
// //       <label className="flex gap-2 text-sm">
// //         <input type="radio" name="price" onChange={() => handlePriceChange("mid")} />
// //         $100 - $200
// //       </label>
// //       <label className="flex gap-2 text-sm">
// //         <input type="radio" name="price" onChange={() => handlePriceChange("high")} />
// //         Over $200
// //       </label>
// //     </div>

// //     {/* Rating */}
// //     <div>
// //       <p className="font-medium mb-2">Rating</p>
// //       {[4, 4.5, 5].map((rate) => (
// //         <label key={rate} className="flex gap-2 text-sm">
// //           <input
// //             type="radio"
// //             name="rating"
// //             onChange={() => handleRatingChange(rate)}
// //           />
// //           {rate} ★ & up
// //         </label>
// //       ))}
// //     </div>
// //   </div>
// // </div>


       
// //     </div>
// //     </div>
// //   );
// // }

// // export default AllHotels;


// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // // Images
// // import allrooms_1 from "../assets/allrooms_1.jpg";
// // import allrooms_2 from "../assets/allrooms_2.jpg";
// // import allrooms_3 from "../assets/allrooms_3.jpg";
// // import allrooms_4 from "../assets/allrooms_4.jpg";

// // function AllHotels() {
// //   const navigate = useNavigate();

// //   /* =======================
// //      Filters Toggle (Mobile)
// //   ======================= */
// //   const [oppenFilter, setOppenFilter] = useState(false);

// //   /* =======================
// //      Filters State
// //   ======================= */
// //   const [filters, setFilters] = useState({
// //     roomType: [],
// //     priceRange: "",
// //     rating: "",
// //   });

// //   /* =======================
// //      Rooms Data
// //   ======================= */
// //   const roomsData = [
// //     {
// //       id: 1,
// //       name: "Deluxe Sea View Room",
// //       location: "Hurghada, Egypt",
// //       perNight: 120,
// //       rating: 5,
// //       image: allrooms_1,
// //       isAvailable: true,
// //       roomType: "Deluxe",
// //       createdAt: "2024-10-01",
// //       updatedAt: "2024-12-15",
// //       amenities: ["Free WiFi", "Sea View", "Breakfast Included"],
// //     },
// //     {
// //       id: 2,
// //       name: "Luxury Family Suite",
// //       location: "Sharm El Sheikh, Egypt",
// //       perNight: 220,
// //       rating: 4.5,
// //       image: allrooms_2,
// //       isAvailable: false,
// //       roomType: "Suite",
// //       createdAt: "2024-08-12",
// //       updatedAt: "2024-11-20",
// //       amenities: ["Free WiFi", "Pool Access", "Family Friendly"],
// //     },
// //     {
// //       id: 3,
// //       name: "Standard City Room",
// //       location: "Cairo, Egypt",
// //       perNight: 80,
// //       rating: 4,
// //       image: allrooms_3,
// //       isAvailable: true,
// //       roomType: "Standard",
// //       createdAt: "2024-07-05",
// //       updatedAt: "2024-10-09",
// //       amenities: ["Free WiFi", "City View", "Air Conditioning"],
// //     },
// //     {
// //       id: 4,
// //       name: "Executive Business Room",
// //       location: "New Cairo, Egypt",
// //       perNight: 150,
// //       rating: 4.8,
// //       image: allrooms_4,
// //       isAvailable: true,
// //       roomType: "Business",
// //       createdAt: "2024-09-18",
// //       updatedAt: "2024-12-02",
// //       amenities: ["Workspace", "High-Speed WiFi", "Breakfast Included"],
// //     },
// //   ];

// //   /* =======================
// //      Filter Handlers
// //   ======================= */
// //   const handleRoomTypeChange = (type) => {
// //     setFilters((prev) => ({
// //       ...prev,
// //       roomType: prev.roomType.includes(type)
// //         ? prev.roomType.filter((t) => t !== type)
// //         : [...prev.roomType, type],
// //     }));
// //   };

// //   const handlePriceChange = (range) => {
// //     setFilters((prev) => ({ ...prev, priceRange: range }));
// //   };

// //   const handleRatingChange = (rate) => {
// //     setFilters((prev) => ({ ...prev, rating: rate }));
// //   };

// //   const clearFilters = () => {
// //     setFilters({
// //       roomType: [],
// //       priceRange: "",
// //       rating: "",
// //     });
// //   };

// //   /* =======================
// //      Filter Logic
// //   ======================= */
// //   const filteredRooms = roomsData.filter((room) => {
// //     if (
// //       filters.roomType.length &&
// //       !filters.roomType.includes(room.roomType)
// //     )
// //       return false;

// //     if (filters.priceRange === "low" && room.perNight > 100) return false;
// //     if (
// //       filters.priceRange === "mid" &&
// //       (room.perNight < 100 || room.perNight > 200)
// //     )
// //       return false;
// //     if (filters.priceRange === "high" && room.perNight < 200) return false;

// //     if (filters.rating && room.rating < filters.rating) return false;

// //     return true;
// //   });

// //   /* =======================
// //      Encode ID (Simple Obfuscation)
// //   ======================= */
// //   const encodeId = (id) => btoa(id.toString());

// //   return (
// //     <div className="pt-60 px-6 lg:px-24">
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

// //         {/* ===== LEFT CONTENT ===== */}
// //         <div className="space-y-10">
// //           <div>
// //             <h1 className="text-[#e89755] text-4xl font-bold">Hotel Rooms</h1>
// //             <p className="mt-3 text-gray-600">
// //               Explore our wide range of hotels and find the perfect place to stay
// //             </p>
// //           </div>

// //           <div className="space-y-8">
// //             {filteredRooms.map((room) => (
// //               <div
// //                 key={room.id}
// //                 className="bg-white max-w-sm rounded-2xl shadow-lg overflow-hidden"
// //               >
// //                 {/* Image */}
// //                 <div
// //                   className="h-48 cursor-pointer"
// //                   onClick={() => navigate(`/room/${encodeId(room.id)}`)}
// //                 >
// //                   <img
// //                     src={room.image}
// //                     alt={room.name}
// //                     className="w-full h-full object-cover"
// //                   />
// //                 </div>

// //                 {/* Content */}
// //                 <div className="p-5 space-y-3">
// //                   <div className="flex justify-between">
// //                     <h3 className="font-bold">{room.name}</h3>
// //                     <span
// //                       className={
// //                         room.isAvailable
// //                           ? "text-green-600"
// //                           : "text-red-600"
// //                       }
// //                     >
// //                       {room.isAvailable ? "Available" : "Booked"}
// //                     </span>
// //                   </div>

// //                   <p className="text-sm text-gray-500">{room.location}</p>

// //                   <div className="flex justify-between">
// //                     <span className="text-[#e89755]">
// //                       ${room.perNight} / night
// //                     </span>
// //                     <span className="text-yellow-500">★ {room.rating}</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* ===== RIGHT CONTENT (FILTERS) ===== */}
// //         <div className="w-80 border border-gray-300 text-gray-600 h-fit">
// //           <div className="flex justify-between px-5 py-4 border-b">
// //             <p className="font-semibold">FILTERS</p>
// //             <div className="flex gap-3 text-sm">
// //               <span
// //                 onClick={() => setOppenFilter(!oppenFilter)}
// //                 className="lg:hidden cursor-pointer text-blue-600"
// //               >
// //                 {oppenFilter ? "Hide" : "Show"}
// //               </span>
// //               <span
// //                 onClick={clearFilters}
// //                 className="hidden lg:block cursor-pointer text-red-500"
// //               >
// //                 Clear
// //               </span>
// //             </div>
// //           </div>

// //           <div
// //             className={`${oppenFilter ? "block" : "hidden"} lg:block px-5 py-4 space-y-6`}
// //           >
// //             {/* Room Type */}
// //             <div>
// //               <p className="font-medium mb-2">Room Type</p>
// //               {["Deluxe", "Suite", "Standard", "Business"].map((type) => (
// //                 <label key={type} className="flex gap-2 text-sm">
// //                   <input
// //                     type="checkbox"
// //                     checked={filters.roomType.includes(type)}
// //                     onChange={() => handleRoomTypeChange(type)}
// //                   />
// //                   {type}
// //                 </label>
// //               ))}
// //             </div>

// //             {/* Price */}
// //             <div>
// //               <p className="font-medium mb-2">Price Range</p>
// //               <label className="flex gap-2 text-sm">
// //                 <input type="radio" name="price" onChange={() => handlePriceChange("low")} />
// //                 Under $100
// //               </label>
// //               <label className="flex gap-2 text-sm">
// //                 <input type="radio" name="price" onChange={() => handlePriceChange("mid")} />
// //                 $100 - $200
// //               </label>
// //               <label className="flex gap-2 text-sm">
// //                 <input type="radio" name="price" onChange={() => handlePriceChange("high")} />
// //                 Over $200
// //               </label>
// //             </div>

// //             {/* Rating */}
// //             <div>
// //               <p className="font-medium mb-2">Rating</p>
// //               {[4, 4.5, 5].map((rate) => (
// //                 <label key={rate} className="flex gap-2 text-sm">
// //                   <input
// //                     type="radio"
// //                     name="rating"
// //                     onChange={() => handleRatingChange(rate)}
// //                   />
// //                   {rate} ★ & up
// //                 </label>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default AllHotels;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import allrooms_1 from "../assets/allrooms_1.jpg";
// import allrooms_2 from "../assets/allrooms_2.jpg";
// import allrooms_3 from "../assets/allrooms_3.jpg";
// import allrooms_4 from "../assets/allrooms_4.jpg";

// function AllHotels() {
//   const navigate = useNavigate();

//   // ===== Filters toggle (mobile)
//   const [oppenFilter, setOppenFilter] = useState(false);

//   // ===== Filters state
//   const [filters, setFilters] = useState({
//     roomType: [],
//     priceRange: "",
//     rating: "",
//   });

//   // ===== Handlers
//   const handleRoomTypeChange = (type) => {
//     setFilters((prev) => ({
//       ...prev,
//       roomType: prev.roomType.includes(type)
//         ? prev.roomType.filter((t) => t !== type)
//         : [...prev.roomType, type],
//     }));
//   };

//   const handlePriceChange = (range) => {
//     setFilters((prev) => ({ ...prev, priceRange: range }));
//   };

//   const handleRatingChange = (rate) => {
//     setFilters((prev) => ({ ...prev, rating: rate }));
//   };

//   const clearFilters = () => {
//     setFilters({
//       roomType: [],
//       priceRange: "",
//       rating: "",
//     });
//   };

//   // ===== Rooms data
//   const roomsData = [
//     {
//       id: 1,
//       name: "Deluxe Sea View Room",
//       location: "Hurghada, Egypt",
//       perNight: 120,
//       rating: 5,
//       image: allrooms_1,
//       isAvailable: true,
//       roomType: "Deluxe",
//       createdAt: "2024-10-01",
//       updatedAt: "2024-12-15",
//       amenities: ["Free WiFi", "Sea View", "Breakfast Included"],
//     },
//     {
//       id: 2,
//       name: "Luxury Family Suite",
//       location: "Sharm El Sheikh, Egypt",
//       perNight: 220,
//       rating: 4.5,
//       image: allrooms_2,
//       isAvailable: false,
//       roomType: "Suite",
//       createdAt: "2024-08-12",
//       updatedAt: "2024-11-20",
//       amenities: ["Free WiFi", "Pool Access", "Family Friendly"],
//     },
//     {
//       id: 3,
//       name: "Standard City Room",
//       location: "Cairo, Egypt",
//       perNight: 80,
//       rating: 4,
//       image: allrooms_3,
//       isAvailable: true,
//       roomType: "Standard",
//       createdAt: "2024-07-05",
//       updatedAt: "2024-10-09",
//       amenities: ["Free WiFi", "City View", "Air Conditioning"],
//     },
//     {
//       id: 4,
//       name: "Executive Business Room",
//       location: "New Cairo, Egypt",
//       perNight: 150,
//       rating: 4.8,
//       image: allrooms_4,
//       isAvailable: true,
//       roomType: "Business",
//       createdAt: "2024-09-18",
//       updatedAt: "2024-12-02",
//       amenities: ["Workspace", "High-Speed WiFi", "Breakfast Included"],
//     },
//   ];

//   // ===== Filter logic
//   const filteredRooms = roomsData.filter((room) => {
//     if (filters.roomType.length && !filters.roomType.includes(room.roomType))
//       return false;

//     if (filters.priceRange === "low" && room.perNight > 100) return false;
//     if (
//       filters.priceRange === "mid" &&
//       (room.perNight < 100 || room.perNight > 200)
//     )
//       return false;
//     if (filters.priceRange === "high" && room.perNight < 200) return false;

//     if (filters.rating && room.rating < filters.rating) return false;

//     return true;
//   });

//   const encodeId = (id) => btoa(id.toString());

//   return (
//     <div className="pt-60 px-6 lg:px-24">
//       {/* ===== Responsive Layout ===== */}
//       <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">

//         {/* ===== RIGHT CONTENT (Filters) ===== */}
//         <div className="w-full lg:w-80 border border-gray-300 text-gray-600 h-fit order-1 lg:order-2">
//           {/* Header */}
//           <div
//             className={`flex items-center justify-between px-5 py-4 ${
//               oppenFilter ? "border-b" : ""
//             }`}
//           >
//             <p className="font-semibold">FILTERS</p>

//             <div className="flex gap-3 text-sm">
//               <span
//                 onClick={() => setOppenFilter(!oppenFilter)}
//                 className="lg:hidden cursor-pointer text-blue-600"
//               >
//                 {oppenFilter ? "Hide" : "Show"}
//               </span>

//               <span
//                 onClick={clearFilters}
//                 className="hidden lg:block cursor-pointer text-red-500"
//               >
//                 Clear
//               </span>
//             </div>
//           </div>

//           {/* Filters Content */}
//           <div
//             className={`${
//               oppenFilter ? "block" : "hidden"
//             } lg:block px-5 py-4 space-y-6`}
//           >
//             {/* Room Type */}
//             <div>
//               <p className="font-medium mb-2">Room Type</p>
//               {["Deluxe", "Suite", "Standard", "Business"].map((type) => (
//                 <label key={type} className="flex gap-2 text-sm">
//                   <input
//                     type="checkbox"
//                     checked={filters.roomType.includes(type)}
//                     onChange={() => handleRoomTypeChange(type)}
//                   />
//                   {type}
//                 </label>
//               ))}
//             </div>

//             {/* Price */}
//             <div>
//               <p className="font-medium mb-2">Price Range</p>
//               <label className="flex gap-2 text-sm">
//                 <input
//                   type="radio"
//                   name="price"
//                   onChange={() => handlePriceChange("low")}
//                 />
//                 Under $100
//               </label>
//               <label className="flex gap-2 text-sm">
//                 <input
//                   type="radio"
//                   name="price"
//                   onChange={() => handlePriceChange("mid")}
//                 />
//                 $100 - $200
//               </label>
//               <label className="flex gap-2 text-sm">
//                 <input
//                   type="radio"
//                   name="price"
//                   onChange={() => handlePriceChange("high")}
//                 />
//                 Over $200
//               </label>
//             </div>

//             {/* Rating */}
//             <div>
//               <p className="font-medium mb-2">Rating</p>
//               {[4, 4.5, 5].map((rate) => (
//                 <label key={rate} className="flex gap-2 text-sm">
//                   <input
//                     type="radio"
//                     name="rating"
//                     onChange={() => handleRatingChange(rate)}
//                   />
//                   {rate} ★ & up
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ===== LEFT CONTENT (Cards) ===== */}
//         <div className="space-y-10 order-2 lg:order-1">
//           {/* Header */}
//           <div className="flex flex-col items-start">
//             <h1 className="text-[#e89755] text-4xl font-bold">
//               Hotel Rooms
//             </h1>
//             <p className="mt-3 max-w-xl text-gray-600">
//               Explore our wide range of hotels and find the perfect place to stay
//             </p>
//           </div>

//           {/* Cards */}
//           <div className="grid grid-cols-1 gap-8">
//             {filteredRooms.map((room) => (
//               <div
//                 key={room.id}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300
//              w-full max-w-full sm:max-w-md lg:max-w-sm"
//               >
//                 {/* Image */}
//                 <div
//                   className="h-48 overflow-hidden cursor-pointer"
//                   onClick={() => navigate(`/room/${(room.id)}`)}
//                 >
//                   <img
//                     src={room.image}
//                     alt={room.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-5 space-y-3">
//                   <div className="flex justify-between">
//                     <h3 className="font-bold">{room.name}</h3>
                  
//                   </div>

//                   <p className="text-sm text-gray-500">{room.location}</p>

//                   <div className="flex justify-between">
//                     <span className="text-[#e89755] font-semibold">
//                       ${room.perNight} / night
//                     </span>
//                     <span className="text-yellow-500">★ {room.rating}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default AllHotels;


// import React, { useState } from "react";
// import roomsData from "../allRooms";
// import { useNavigate } from "react-router-dom";

// function AllHotels() {
//   const navigate = useNavigate();

//   const [filters, setFilters] = useState({
//     roomType: [],
//     priceRange: "",
//     rating: "",
//   });

//   const [showFilters, setShowFilters] = useState(false); // 🔥 زرار الفلتر على الموبايل

//   const handleRoomTypeChange = (type) => {
//     setFilters((prev) => {
//       const exists = prev.roomType.includes(type);
//       return {
//         ...prev,
//         roomType: exists
//           ? prev.roomType.filter((t) => t !== type)
//           : [...prev.roomType, type],
//       };
//     });
//   };

//   const handlePriceChange = (price) => {
//     setFilters((prev) => ({ ...prev, priceRange: price }));
//   };

//   const handleRatingChange = (rate) => {
//     setFilters((prev) => ({ ...prev, rating: rate }));
//   };

//   const handleClear = () => {
//     setFilters({
//       roomType: [],
//       priceRange: "",
//       rating: "",
//     });
//   };

//   const filteredRooms = roomsData.filter((room) => {
//     const byType =
//       filters.roomType.length === 0 ||
//       filters.roomType.includes(room.roomType);

//     const byPrice =
//       filters.priceRange === "" ||
//       (filters.priceRange === "low" && room.perNight <= 100) ||
//       (filters.priceRange === "mid" &&
//         room.perNight > 100 &&
//         room.perNight <= 180) ||
//       (filters.priceRange === "high" && room.perNight > 180);

//     const byRating =
//       filters.rating === "" || room.rating >= parseFloat(filters.rating);

//     return byType && byPrice && byRating;
//   });

//   return (
//     <div className="min-h-screen pt-60 px-4 bg-gray-100">

//       <h1 className="text-3xl font-bold text-center mb-6">All Rooms</h1>

//       {/* زرار إظهار الفلاتر على الموبايل */}
//       <button
//         className="lg:hidden mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
//         onClick={() => setShowFilters(!showFilters)}
//       >
//         {showFilters ? "Hide Filters" : "Show Filters"}
//       </button>

//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

//         {/* Filters Section (يمين في الشاشات الكبيرة - قابل للفتح في الموبايل) */}
//         <div
//           className={`
//           bg-white p-5 rounded-xl shadow 
//           ${showFilters ? "block" : "hidden"} 
//           lg:block lg:col-span-1
//         `}
//         >
//           <h2 className="text-xl font-semibold mb-4">Filters</h2>

//           {/* Room Types */}
//           <div className="mb-4">
//             <p className="font-medium mb-1">Room Type:</p>
//             {["Deluxe", "Suite", "Standard", "Business"].map((type) => (
//               <label key={type} className="flex items-center gap-2 mb-1">
//                 <input
//                   type="checkbox"
//                   checked={filters.roomType.includes(type)}
//                   onChange={() => handleRoomTypeChange(type)}
//                 />
//                 {type}
//               </label>
//             ))}
//           </div>

//           {/* Price Range */}
//           <div className="mb-4">
//             <p className="font-medium mb-1">Price Per Night:</p>

//             <label className="flex items-center gap-2 mb-1">
//               <input
//                 type="radio"
//                 name="price"
//                 checked={filters.priceRange === "low"}
//                 onChange={() => handlePriceChange("low")}
//               />
//               Low (0 - 100)
//             </label>

//             <label className="flex items-center gap-2 mb-1">
//               <input
//                 type="radio"
//                 name="price"
//                 checked={filters.priceRange === "mid"}
//                 onChange={() => handlePriceChange("mid")}
//               />
//               Mid (100 - 180)
//             </label>

//             <label className="flex items-center gap-2 mb-1">
//               <input
//                 type="radio"
//                 name="price"
//                 checked={filters.priceRange === "high"}
//                 onChange={() => handlePriceChange("high")}
//               />
//               High (180+)
//             </label>
//           </div>

//           {/* Rating */}
//           <div className="mb-4">
//             <p className="font-medium mb-1">Minimum Rating:</p>
//             {[4, 4.5, 5].map((rate) => (
//               <label key={rate} className="flex items-center gap-2 mb-1">
//                 <input
//                   type="radio"
//                   name="rating"
//                   checked={filters.rating === String(rate)}
//                   onChange={() => handleRatingChange(String(rate))}
//                 />
//                 {rate} ⭐+
//               </label>
//             ))}
//           </div>

//           <button
//             className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg"
//             onClick={handleClear}
//           >
//             Clear Filters
//           </button>
//         </div>

//         {/* Rooms List (يسار) */}
//         <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//           {filteredRooms.map((room) => (
//             <div
//               key={room.id}
//               className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
//               onClick={() => navigate(`/room/${room.id}`)}
//             >
//               <img
//                 src={room.image}
//                 alt={room.name}
//                 className="rounded-lg w-full h-48 object-cover"
//               />
//               <h3 className="text-xl font-bold mt-3">{room.name}</h3>
//               <p className="text-gray-600">{room.location}</p>
//               <p className="font-semibold mt-1">${room.perNight} / night</p>
//               <p className="text-yellow-500">⭐ {room.rating}</p>
//             </div>
//           ))}
//         </div>

//       </div>

//     </div>
//   );
// }

// export default AllHotels;


import React, { useState } from "react";
import roomsData from "../allRooms";
import { useNavigate } from "react-router-dom";

function AllHotels() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    roomType: [],
    priceRange: "",
    rating: "",
  });

  const [showFilters, setShowFilters] = useState(false);

  const handleRoomTypeChange = (type) => {
    setFilters((prev) => {
      const exists = prev.roomType.includes(type);
      return {
        ...prev,
        roomType: exists
          ? prev.roomType.filter((t) => t !== type)
          : [...prev.roomType, type],
      };
    });
  };

  const handlePriceChange = (price) => {
    setFilters((prev) => ({ ...prev, priceRange: price }));
  };

  const handleRatingChange = (rate) => {
    setFilters((prev) => ({ ...prev, rating: rate }));
  };

  const handleClear = () => {
    setFilters({
      roomType: [],
      priceRange: "",
      rating: "",
    });
  };

  const filteredRooms = roomsData.filter((room) => {
    const byType =
      filters.roomType.length === 0 ||
      filters.roomType.includes(room.roomType);

    const byPrice =
      filters.priceRange === "" ||
      (filters.priceRange === "low" && room.perNight <= 100) ||
      (filters.priceRange === "mid" &&
        room.perNight > 100 &&
        room.perNight <= 180) ||
      (filters.priceRange === "high" && room.perNight > 180);

    const byRating =
      filters.rating === "" || room.rating >= parseFloat(filters.rating);

    return byType && byPrice && byRating;
  });

  return (
    <div className="min-h-screen pt-60 px-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">All Rooms</h1>

      {/* Mobile Filters Button */}
      <button
        className="lg:hidden mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {/* GRID FIXED → filters RIGHT, rooms LEFT */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* ROOMS LEFT */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 order-2 lg:order-1">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate(`/room/${room.id}`)}
            >
              <img
                src={room.image}
                alt={room.name}
                className="rounded-lg w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mt-3">{room.name}</h3>
              <p className="text-gray-600">{room.location}</p>
              <p className="font-semibold mt-1">${room.perNight} / night</p>
              <p className="text-yellow-500">⭐ {room.rating}</p>
            </div>
          ))}
        </div>

        {/* FILTERS RIGHT */}
        <div
          className={`
            bg-white p-5 rounded-xl shadow 
            ${showFilters ? "block" : "hidden"} 
            lg:block lg:col-span-1
            order-1 lg:order-2
          `}
        >
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          {/* Room Types */}
          <div className="mb-4">
            <p className="font-medium mb-1">Room Type:</p>
            {["Deluxe", "Suite", "Standard", "Business"].map((type) => (
              <label key={type} className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  checked={filters.roomType.includes(type)}
                  onChange={() => handleRoomTypeChange(type)}
                />
                {type}
              </label>
            ))}
          </div>

          {/* Price Range */}
          <div className="mb-4">
            <p className="font-medium mb-1">Price Per Night:</p>

            <label className="flex items-center gap-2 mb-1">
              <input
                type="radio"
                name="price"
                checked={filters.priceRange === "low"}
                onChange={() => handlePriceChange("low")}
              />
              Low (0 - 100)
            </label>

            <label className="flex items-center gap-2 mb-1">
              <input
                type="radio"
                name="price"
                checked={filters.priceRange === "mid"}
                onChange={() => handlePriceChange("mid")}
              />
              Mid (100 - 180)
            </label>

            <label className="flex items-center gap-2 mb-1">
              <input
                type="radio"
                name="price"
                checked={filters.priceRange === "high"}
                onChange={() => handlePriceChange("high")}
              />
              High (180+)
            </label>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <p className="font-medium mb-1">Minimum Rating:</p>
            {[4, 4.5, 5].map((rate) => (
              <label key={rate} className="flex items-center gap-2 mb-1">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.rating === String(rate)}
                  onChange={() => handleRatingChange(String(rate))}
                />
                {rate} ⭐+
              </label>
            ))}
          </div>

          <button
            className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={handleClear}
          >
            Clear Filters
          </button>
        </div>

      </div>

    </div>
  );
}

export default AllHotels;
