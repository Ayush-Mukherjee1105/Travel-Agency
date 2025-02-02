import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Luxury Maldives Retreat",
    city: "Maldives",
    address: "Male Atoll",
    distance: 500,
    price: 1999,
    maxGroupSize: 8,
    desc: "Experience ultimate luxury in overwater villas, pristine beaches, and world-class diving in the crystal-clear waters of the Maldives.",
    reviews: [
      {
        name: "Emma Wilson",
        rating: 5.0,
      },
    ],
    avgRating: 5.0,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Swiss Alps Adventure",
    city: "Zermatt",
    address: "Switzerland",
    distance: 400,
    price: 2499,
    maxGroupSize: 6,
    desc: "Discover the majestic Swiss Alps with luxury accommodations, private ski lessons, and gourmet mountain dining experiences.",
    reviews: [
      {
        name: "James Brown",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Santorini Exclusive",
    city: "Santorini",
    address: "Greece",
    distance: 300,
    price: 1799,
    maxGroupSize: 4,
    desc: "Enjoy breathtaking sunsets, private wine tastings, and luxury cave suites in the most romantic destination in Greece.",
    reviews: [
      {
        name: "Sofia Martinez",
        rating: 4.9,
      },
    ],
    avgRating: 4.9,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Bali Private Paradise",
    city: "Ubud",
    address: "Indonesia",
    distance: 500,
    price: 1599,
    maxGroupSize: 6,
    desc: "Experience spiritual wellness, luxury villa stays, and private cultural tours in the heart of Bali.",
    reviews: [
      {
        name: "Michael Chen",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg04,
    featured: false,
  },
  {
    id: "05",
    title: "African Safari Luxury",
    city: "Serengeti",
    address: "Tanzania",
    distance: 600,
    price: 3999,
    maxGroupSize: 4,
    desc: "Witness the great migration from luxury tented camps, with private game drives and helicopter safaris.",
    reviews: [
      {
        name: "David Thompson",
        rating: 5.0,
      },
    ],
    avgRating: 5.0,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Amalfi Coast Escape",
    city: "Positano",
    address: "Italy",
    distance: 200,
    price: 2299,
    maxGroupSize: 6,
    desc: "Explore the stunning Amalfi Coast with private yacht tours, cooking classes, and stays in historic luxury hotels.",
    reviews: [
      {
        name: "Laura Bennett",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Dubai Royal Experience",
    city: "Dubai",
    address: "UAE",
    distance: 400,
    price: 2999,
    maxGroupSize: 8,
    desc: "Live like royalty with desert safaris, luxury shopping experiences, and stays in iconic Dubai hotels.",
    reviews: [
      {
        name: "Ahmed Hassan",
        rating: 4.9,
      },
    ],
    avgRating: 4.9,
    photo: tourImg07,
    featured: false,
  }
];

export default tours;
