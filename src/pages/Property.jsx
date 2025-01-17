import React from "react";
import { BiBath, BiBed } from "react-icons/bi";
const testimonials = [
  {
    quote:
      "ProNest exceeded my expectations! Their platform is intuitive, user-friendly, and efficient. Found my dream home in no time! Highly recommended.",
    name: "Emily Chen",
    role: "Marketing Manager",
    image: "https://via.placeholder.com/100", // Replace with actual avatar URL
  },
  {
    quote:
      "ProNest's expert agents provided exceptional service, guiding me through every step. Their local market knowledge is unparalleled.",
    name: "David Lee",
    role: "Entrepreneur",
    image: "https://via.placeholder.com/100", // Replace with actual avatar URL
  },
  {
    quote:
      "ProNest's seamless search functionality saved me time and stress. Their mobile app is convenient and easy to use.",
    name: "Sarah Taylor",
    role: "Doctor",
    image: "https://via.placeholder.com/100", // Replace with actual avatar URL
  },
  {
    quote:
      "ProNest's property alerts kept me informed about new listings instantly. Their website is modern and easy to navigate.",
    name: "Mark Davis",
    role: "Travel Writer",
    image: "https://via.placeholder.com/100", // Replace with actual avatar URL
  },
  {
    quote:
      "I highly recommend ProNest for reliable and efficient real estate services. Their team is knowledgeable and responsive.",
    name: "Rachel Patel",
    role: "Lawyer",
    image: "https://via.placeholder.com/100", // Replace with actual avatar URL
  },
  {
    quote:
      "ProNest's market analysis tools helped me make informed investment decisions. Accurate and up-to-date data.",
    name: "James Martin",
    role: "Investment Banker",
    image: "https://via.placeholder.com/100", // Replace with actual avatar URL
  },
];

const articles = [
  {
    id: 1,
    category: "Architecture",
    image: "/about/artical1.png", // Replace with actual image URL
    title: "Home Staging Tips to Attract Buyers Quickly",
    author: "Brooklyn Simmons",
    date: "July 9, 2024",
  },
  {
    id: 2,
    category: "Building",
    image: "/about/artical2.png", // Replace with actual image URL
    title: "Navigating the Mortgage Approval Process",
    author: "Jerome Bell",
    date: "July 9, 2024",
  },
  {
    id: 3,
    category: "Real Estate",
    image: "/about/artical3.png", // Replace with actual image URL
    title: "The Ultimate Checklist for First-Time Home Buyers",
    author: "Ralph Edwards",
    date: "July 9, 2024",
  },
];
const Properties = () => {
  const properties = [
    {
      title: "Cedar Ridge Villas",
      distance: "26 miles away",
      price: "₹1,560/month",
      beds: 4,
      baths: 5,
      sqft: "2,560.00 sqft",
      image: "/about/artical1.png", // Replace with actual property image
    },
    {
      title: "Maplewood Estates",
      distance: "34 miles away",
      price: "₹1,224/month",
      beds: 4,
      baths: 3,
      sqft: "2,080.00 sqft",
      image: "/about/artical2.png", // Replace with actual property image
    },
    {
      title: "Pine Hill Residences",
      distance: "40 miles away",
      price: "₹1,024/month",
      beds: 3,
      baths: 4,
      sqft: "2,096.00 sqft",
      image: "/about/artical3.png", // Replace with actual property image
    },
    {
      title: "Brookside Manor",
      distance: "38 miles away",
      price: "₹2,024/month",
      beds: 6,
      baths: 5,
      sqft: "3,096.00 sqft",
      image: "/about/artical1.png", // Replace with actual property image
    },
    {
      title: "Crescent Villa",
      distance: "3 miles away",
      price: "₹2,200/month",
      beds: 3,
      baths: 2,
      sqft: "1,500.00 sqft",
      image: "/about/artical2.png", // Replace with actual property image
    },
    {
      title: "Maplewood Estate",
      distance: "5 miles away",
      price: "₹3,000/month",
      beds: 4,
      baths: 3,
      sqft: "2,200.00 sqft",
      image: "/about/artical3.png", // Replace with actual property image
    },
    {
      title: "Sunset Grove House",
      distance: "8 miles away",
      price: "₹1,800/month",
      beds: 2,
      baths: 1,
      sqft: "1,100.00 sqft",
      image: "/about/artical1.png", // Replace with actual property image
    },
    {
      title: "Riverside Retreat",
      distance: "10 miles away",
      price: "₹2,800/month",
      beds: 3,
      baths: 2,
      sqft: "1,800.00 sqft",
      image: "/about/artical2.png", // Replace with actual property image
    },
  ];

  return (
    <div>
      <section className="bg-gray-50 py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Browse Our <span className="text-orange-500">Properties</span>
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Browse our diverse properties to find the perfect home, rental, or
            investment opportunity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1300px] mx-auto">
            {properties.map((property, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row p-4"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="rounded-md"
                  />
                  <span className="absolute top-5 left-5 text-sm font-medium text-[#020617] mb-2 border border-[#020617] bg-transparent px-2 py-1 rounded-md">
                    For Rent
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {property.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {property.distance}
                  </p>
                  <p className="text-orange-500 text-xl font-bold border-b border-gray-200 pb-3 mb-3">
                    {property.price}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mt-3 space-x-4">
                    <span className="flex items-center">
                      <BiBed /> {property.beds}
                    </span>
                    <span className="flex items-center">
                      <BiBath />
                      {property.baths}
                    </span>
                    <span>{property.sqft}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-8">
            <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-md">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-md">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-md">
              3
            </button>
            <span className="px-4 py-2 text-gray-500">...</span>
            <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-md">
              Next
            </button>
          </div>
        </div>
      </section>
      <div className="bg-gray-50">
        <section className=" py-12 px-6 max-w-7xl mx-auto">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              Discover Our{" "}
              <span className="text-orange-500">Clients Experiences</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center border border-gray-200"
                >
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <section className="py-16 px-4 lg:px-32">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-gray-800">
            Latest <span className="text-orange-500">Articles</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Personalized property recommendations, expert advice, <br />
            throughout the buying or renting process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;
const ArticleCard = ({ article }) => (
  <div className="bg-white  overflow-hidden">
    <div className="relative">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <span className="absolute top-4 left-4 bg-transparent border border-[#003366] text-[#003366] text-sm font-medium px-3 py-1 rounded-full">
        {article.category}
      </span>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {article.title}
      </h3>
      <hr className="border-gray-300 mb-3" />
      <div className="flex items-center justify-between bg-[#ECECEC] rounded-md p-2">
        <div className="flex items-center">
          <img
            src="/about/ar1.png" // Replace with author image URL
            alt={article.author}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-medium text-gray-700">
              {article.author}
            </p>
            <p className="text-xs text-gray-500">{article.date}</p>
          </div>
        </div>
        <button className="text-orange-500">&gt;</button>
      </div>
    </div>
  </div>
);
