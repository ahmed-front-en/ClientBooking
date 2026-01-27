import allrooms_1 from "../src/assets/allrooms_1.jpg";
import allrooms_2 from "../src/assets/allrooms_2.jpg";
import allrooms_3 from "../src/assets/allrooms_3.jpg";
import allrooms_4 from "../src/assets/allrooms_4.jpg";

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

export default roomsData;
