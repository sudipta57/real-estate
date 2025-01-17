import {
  FaBed,
  FaBath,
  FaQuoteLeft,
  FaQuoteRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import Navbar from "./Navbar";
export default function Home() {
  const properties = [
    {
      image: "/landing/property_left.png", // Replace with actual image URLs
      price: "5,970",
      title: "Tranquil Haven in the Woods",
      location: "103 Wright Court Burien, WA 98168",
      beds: 4,
      baths: 3,
      rating: 4.8,
    },
    {
      image: "/landing/property_midle.png", // Replace with actual image URLs
      price: "6,500",
      title: "Luxury Villa by the Sea",
      location: "89 Beachside Drive Miami, FL 33101",
      beds: 5,
      baths: 4,
      rating: 4.9,
    },
    {
      image: "/landing/property_right.png", // Replace with actual image URLs
      price: "7,200",
      title: "Modern City Apartment",
      location: "450 Central Park West New York, NY 10025",
      beds: 3,
      baths: 2,
      rating: 4.7,
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <section className="w-full bg-white text-black pt-20 pb-10">
        <div className="w-full mx-auto px-4 flex flex-col items-center text-center">
          {/* Heading */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-6xl">
              <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[90px] text-left font-bold font-abhaya leading-tight">
                Discover your <span className="text-orange-500">Living</span>
              </h1>
              <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
                <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[90px] font-bold font-abhaya leading-tight text-center md:text-left">
                  <span className="text-orange-500">dream</span> property
                </h2>
                <p className="text-gray-400 text-[14px] sm:text-[16px] md:text-[18px] max-w-lg mt-4 md:mt-0 ml-0 md:ml-6 text-left font-abhaya">
                  Crafted for your comfort, to enhance the beauty of your
                  present lifestyle but also paves the way for a more
                  aesthetically.
                </p>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative mt-10 w-full h-72 sm:h-80 md:h-96 max-w-5xl">
            <img
              src="/landing/banner_bg.png" // Replace with your actual image URL
              alt="Banner"
              className="w-full h-full object-cover rounded-md"
            />

            {/* Circular Icon */}
            <div className="absolute top-[-30px] sm:top-[-40px] right-10 sm:right-20 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-25 lg:h-25 bg-black rounded-full border-2 border-white z-10">
              <img
                src="/landing/bannerLogo.png" // Replace with your actual image URL
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Search Filters */}
            <div className="absolute bottom-[-50px] sm:bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] max-w-5xl bg-white p-4 sm:p-6 shadow-lg rounded-lg flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex flex-col items-start">
                <label className="text-gray-500">
                  Purpose
                  <select className="block mt-1 text-black bg-white border-gray-300 rounded-lg">
                    <option>Buy</option>
                    <option>Rent</option>
                    <option>Sell</option>
                  </select>
                </label>
              </div>
              <div className="flex flex-col items-start">
                <label className="text-gray-500">
                  Location
                  <select className="block mt-1 text-black bg-white border-gray-300 rounded-lg">
                    <option>Toronto, Canada</option>
                    <option>New York, USA</option>
                    <option>Vancouver, Canada</option>
                  </select>
                </label>
              </div>
              <div className="flex flex-col items-start">
                <label className="text-gray-500">
                  Type
                  <select className="block mt-1 text-black bg-white border-gray-300 rounded-lg">
                    <option>Industrial home</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                  </select>
                </label>
              </div>
              <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 w-full sm:w-auto">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* end banner section */}

      {/* Brand Section */}
      <div className="flex flex-col items-center w-full py-12 md:flex-row md:justify-between md:px-12">
        {/* Left Text Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-[#1E293B] font-abhaya font-semibold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[52px] leading-tight">
            As seen on the world’s best <br className="hidden md:block" />
            magazines and media
          </p>
        </div>

        {/* Logos Section */}

        <div className="flex flex-wrap justify-center md:justify-start gap-4 space-x-4 md:space-x-6">
          <img
            src="/landing/Google.png"
            alt="Google"
            className="h-6 sm:h-8 md:h-10"
          />
          <img
            src="/landing/Ubs.png"
            alt="UBS"
            className="h-6 sm:h-8 md:h-10"
          />
          <img
            src="/landing/Uber.png"
            alt="Uber"
            className="h-6 sm:h-8 md:h-10"
          />
          <img
            src="/landing/Webflow.png"
            alt="Webflow"
            className="h-6 sm:h-8 md:h-10"
          />
        </div>
      </div>

      <section className="w-full bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          {/* Left Content (Text and Statistics) */}
          <div className="flex flex-col max-w-full lg:max-w-lg space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-abhaya leading-tight">
              At a Glance Our <span className="text-orange-500">Company</span>{" "}
              Details
            </h2>
            <p className="text-gray-500 font-abhaya">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
              malesuada leo volutpat.
            </p>
            <a
              href="#learn-more"
              className="mt-4 text-orange-500 font-semibold flex items-center justify-center lg:justify-start"
            >
              Learn More <span className="ml-2">→</span>
            </a>
            {/* Statistics Section */}
            <div className="flex flex-wrap justify-center lg:justify-between mt-10 gap-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold font-abhaya">150+</h3>
                <p className="text-gray-500 font-abhaya">Property Ready</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold font-abhaya">1.9+</h3>
                <p className="text-gray-500 font-abhaya">Happy Customer</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold font-abhaya">150+</h3>
                <p className="text-gray-500 font-abhaya">Capital Raised</p>
              </div>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="w-full max-w-md lg:max-w-lg">
            <img
              src="/landing/company.png"
              alt="Company Building"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Apartment Section */}
      <div className="w-full bg-[#0A1128] text-white py-12 px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row gap-8">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
          <img
            src="/landing/apartment1.png"
            alt="House 1"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="/landing/apartment2.png"
            alt="House 2"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="/landing/apartment3.png"
            alt="House 3"
            className="w-full h-auto object-cover rounded-lg col-span-2"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Heading and Text */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-abhaya text-white mb-4">
              Apartment
            </h2>
            <p className="text-gray-400 mb-8 text-sm sm:text-base lg:text-lg font-abhaya">
              Crafted for your comfort, to enhance the beauty of your present
              lifestyle but also paves the way for a more aesthetically pleasing
              future.
            </p>
          </div>

          {/* Call to Action Button */}
          <a
            href="#"
            className="inline-block text-orange-500 font-semibold font-abhaya border border-orange-500 py-2 px-6 rounded transition hover:bg-orange-500 hover:text-white max-w-[200px] sm:w-auto"
          >
            Book Now
          </a>

          {/* Additional Image */}
          <img
            src="/landing/apartment4.png"
            alt="House 4"
            className="w-full h-auto mt-4 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Feature Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 md:gap-0">
          {/* Left Section: Title and Description */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-[60px] font-bold text-gray-900">
              Our <span className="text-orange-500 font-abhaya">Features</span>
            </h2>
            <p className="text-gray-600 font-abhaya mt-4 text-sm sm:text-base">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
              malesuada leo volutpat.
            </p>
          </div>

          {/* Right Section: Learn More link */}
          <div className="md:w-1/2 text-center md:text-right">
            <a
              href="#"
              className="text-orange-500 font-semibold hover:underline flex items-center justify-center md:justify-end"
            >
              Learn More <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/landing/feature1.png"
              alt="Luxurious Fittings"
              className="w-full md:w-1/2 h-auto rounded-lg"
            />
            <div className="text-center md:text-left md:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-bold font-abhaya text-[#020617]">
                Luxurious Fittings
              </h3>
              <p className="text-gray-600 mt-2 font-abhaya text-sm sm:text-base">
                Crafted for your comfort, to enhance the beauty of your present
                lifestyle but also paves the way for a more aesthetically
                pleasing future.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-6">
            <div className="text-center md:text-left md:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-bold font-abhaya text-[#020617]">
                Royal Touch Paint
              </h3>
              <p className="text-gray-600 mt-2 font-abhaya text-sm sm:text-base">
                Crafted for your comfort, to enhance the beauty of your present
                lifestyle but also paves the way for a more aesthetically
                pleasing future.
              </p>
            </div>
            <img
              src="/landing/feature2.png"
              alt="Royal Touch Paint"
              className="w-full md:w-1/2 h-auto rounded-lg"
            />
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/landing/feature3.png"
              alt="Living Inside Nature"
              className="w-full md:w-1/2 h-auto rounded-lg"
            />
            <div className="text-center md:text-left md:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-bold font-abhaya text-[#020617]">
                Living Inside Nature
              </h3>
              <p className="text-gray-600 mt-2 font-abhaya text-sm sm:text-base">
                Crafted for your comfort, to enhance the beauty of your present
                lifestyle but also paves the way for a more aesthetically
                pleasing future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Section */}
      <section className="px-4 sm:px-8 lg:px-20 py-10 bg-white">
        {/* Title and Filter Buttons Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-8 gap-4">
          {/* Title and Subtitle */}
          <div>
            <h2 className="text-3xl sm:text-[64px] mb-10 font-bold text-left font-abhaya text-gray-900">
              <span>Latest Listed </span>
              <span className="text-orange-500 font-abhaya">Properties</span>
            </h2>
            <p className="text-gray-500 text-left mt-2 font-abhaya text-sm sm:text-base">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-2 md:space-x-4">
            <button className="px-3 sm:px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white text-sm sm:text-base">
              All
            </button>
            <button className="px-3 sm:px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white text-sm sm:text-base">
              Sell
            </button>
            <button className="px-3 sm:px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white text-sm sm:text-base">
              Rent
            </button>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg max-w-full"
            >
              <img
                src={property.image}
                alt="Property"
                className="w-full h-48 sm:h-60 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xl sm:text-2xl font-semibold font-abhaya text-gray-900">
                    ${property.price}
                  </p>
                  <span className="text-yellow-500 font-abhaya text-sm sm:text-base">
                    ⭐ {property.rating}
                  </span>
                </div>

                <div className="text-left mt-2">
                  <h3 className="text-lg sm:text-xl font-semibold font-abhaya text-gray-800 mb-1">
                    {property.title}
                  </h3>
                  <p className="text-gray-500 font-abhaya text-sm">
                    {property.location}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 text-gray-700">
                  <div className="flex space-x-4 text-gray-700">
                    <span className="flex items-center space-x-1 text-sm">
                      <FaBed className="text-orange-500" />
                      <span>{property.beds} Beds</span>
                    </span>
                    <span className="flex items-center space-x-1 text-sm">
                      <FaBath className="text-orange-500" />
                      <span>{property.baths} Bath</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-8 space-x-2 sm:space-x-4">
          <button className="p-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white text-sm sm:text-base">
            &lt;
          </button>
          <button className="p-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white text-sm sm:text-base">
            &gt;
          </button>
        </div>
      </section>

      {/* Client Section */}
      <section className="bg-gray-50 py-12 px-6 sm:py-16 sm:px-8 flex items-center justify-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Title and Arrows */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl sm:text-[64px] leading-[70px] font-bold font-abhaya text-gray-900">
              <span>What Your Client Says About </span>
              <span className="text-orange-500 font-abhaya">JOHN</span>
            </h2>
            <div className="flex space-x-4 mt-6">
              <button className="p-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white">
                <FiArrowLeft size={20} />
              </button>
              <button className="p-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white">
                <FiArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Testimonial */}
          <div className="lg:w-2/3 bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col">
            <div className="flex items-start text-orange-500 mb-4">
              <FaQuoteLeft size={30} />
            </div>
            <p className="text-gray-700 text-base sm:text-lg font-abhaya leading-relaxed mb-4">
              Crafted for your comfort, to enhance the beauty of your present
              lifestyle but also paves the way for a more aesthetically pleasing
              and harmonious future for both you and your cherished family.
            </p>
            <div className="flex items-center mt-4">
              <img
                src="/landing/client.png"
                alt="Client"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-900 font-abhaya">
                  JOHN KOLIY
                </p>
                <p className="text-gray-500 text-sm font-abhaya">- USA</p>
              </div>
            </div>
            <div className="flex justify-end text-orange-500 mt-4">
              <FaQuoteRight size={30} />
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-white py-12 px-6 sm:py-16 sm:px-8 flex items-center justify-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Text and Subscription Form */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold font-abhaya text-gray-900 mb-6">
              Subscribe to get the latest news for you!
            </h2>
            <form className="flex items-center w-full max-w-lg border border-orange-500 rounded">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-grow p-3 sm:p-4 text-gray-700 focus:outline-none rounded-l"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 sm:px-6 py-3 sm:py-4 font-semibold font-abhaya hover:bg-orange-600 rounded-r mr-2 mt-2 mb-2"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/landing/subscribe.png" // Replace this with the path to your image
              alt="Hands holding a house"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
