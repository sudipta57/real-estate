import { useEffect, useRef, useState } from "react";
import {
  FaBath,
  FaBed,
  FaChevronDown,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

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
      <section className="w-full bg-white text-black pt-10 pb-10">
        <div className="w-full mx-auto px-4 flex flex-col items-center text-center">
          {/* Heading */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-6xl">
              <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[100px] text-left font-[700] font-abhaya leading-tight">
                Discover your Living
              </h1>
              <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
                <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[90px] font-bold font-abhaya leading-tight text-center md:text-left">
                  <span className="text-orange-500">dream</span> property
                </h2>
                <p className="text-[#1E293B] text-[14px] sm:text-[16px] md:text-[18px] max-w-lg mt-4 md:mt-0 ml-0 md:ml-6 text-left font-abhaya font-[400]">
                  Crafted for your comfort, to enhance the beauty of your
                  present lifestyle but also paves the way for a more
                  aesthetically.
                </p>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative mt-10 max-w[1400px] h-72 sm:h-80 md:h-96">
            <img
              src="/landing/banner_bg.png" // Replace with your actual image URL
              alt="Banner"
              className="w-full h-full object-cover rounded-md"
            />

            {/* Circular Icon */}
            <div className="absolute top-[-30px] sm:top-[-90px] right-10 sm:right-64 flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 lg:w-[175px] lg:h-[175px] bg-black rounded-full border-2 border-white z-10">
              <img
                src="/landing/bannerLogo.png" // Replace with your actual image URL
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Search Filters */}
            <div className="absolute bottom-[-50px] sm:bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] max-w-5xl bg-white p-4 sm:p-6 shadow-lg flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              {[
                { label: "Purpose", options: ["Rent", "Sell"] },
                {
                  label: "Location",
                  options: ["New York, USA", "Vancouver, Canada"],
                },
                { label: "Type", options: ["Apartment", "Villa"] },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative w-full sm:w-auto flex flex-col items-start"
                >
                  <label className="text-[#1E293B] text-[16px] font-[400] font-abhaya w-full relative">
                    <div className="relative w-full">
                      <select className="appearance-none w-full bg-white rounded-lg px-4 py-2 pr-10 focus:outline-none">
                        <option>{item.label}</option>
                        {item.options.map((option, i) => (
                          <option key={i}>{option}</option>
                        ))}
                      </select>
                      <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#FF6700] pointer-events-none" />
                    </div>
                    <span className="block mb-1 text-[#020617] text-[18px] font-[700] font-abhaya">
                      {item.label}
                    </span>
                  </label>
                </div>
              ))}
              <button className="px-8 py-3 bg-orange-500 text-[24px] font-[700] text-white w-full sm:w-auto">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* end banner section */}

      {/* Brand Section */}
      <div className="max-w-[1300px] mx-auto flex flex-col px-4 items-center w-full py-12 md:flex-row md:justify-between md:px-12">
        {/* Left Text Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-[#1E293B] font-abhaya font-bold md:text-[32px] leading-[45px] tracking-wider">
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
          <div className="flex flex-col max-w-[1500px] mx-auto space-y-6">
            <h2 className="text-[#020617] md:text-[64px] font-bold font-abhaya leading-[71px]">
              At a Glance Our <span className="text-[#FF6700]">Company</span>{" "}
              Details
            </h2>
            <p className="text-[#334155] text-[18px] font-[400] font-abhaya">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
              malesuada leo volutpat.
            </p>
            <a
              href="#learn-more"
              className="mt-4 text-[18px] text-[#FF6700] font-bold flex items-center justify-center lg:justify-start space-x-1"
            >
              <p>Learn More</p> <FiArrowRight />
            </a>
            {/* Statistics Section */}
            <div className="flex flex-col md:flex-row justify-center lg:justify-between mt-10 gap-8">
              <div className="text-center">
                <h3 className="text-[70px] text-[#020617] font-bold font-abhaya">
                  150+
                </h3>
                <p className="text-[#475569] text-[24px] font-[400] font-abhaya">
                  Property Ready
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-[70px] text-[#020617] font-bold font-abhaya">
                  1.9+
                </h3>
                <p className="text-[#475569] text-[24px] font-[400] font-abhaya">
                  Happy Customer
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-[70px] text-[#020617] font-bold font-abhaya">
                  150+
                </h3>
                <p className="text-[#475569] text-[24px] font-[400] font-abhaya">
                  Capital Raised
                </p>
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
      <div className=" bg-[#0A1128]">
        <div className="max-w-[1300px] mx-auto text-white py-24 px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row gap-8">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-3 w-full lg:w-1/2">
            <img
              src="/landing/apartment1.png"
              alt="House 1"
              className="w-full h-auto object-cover "
            />
            <img
              src="/landing/apartment2.png"
              alt="House 2"
              className="w-full h-auto object-cover "
            />
            <img
              src="/landing/apartment3.png"
              alt="House 3"
              className="w-full h-auto object-cover col-span-2"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Heading and Text */}
            <div className="text-left">
              <h2 className="text-[64px] font-bold font-abhaya text-white mb-4">
                Apartment
              </h2>
              <p className="text-[#FFFFFF] mb-8 md:text-[18px] font-[400] font-abhaya">
                Crafted for your comfort, to enhance the beauty of your present
                lifestyle but also paves the way for a more aesthetically
                pleasing future.
              </p>
            </div>

            {/* Call to Action Button */}
            <a
              href="#"
              className="text-[18px] font-[700] mb-8 text-orange-500 font-abhaya border border-orange-500 py-2 px-6 rounded w-[125px]"
            >
              Book Now
            </a>

            {/* Additional Image */}
            <img
              src="/landing/apartment4.png"
              alt="House 4"
              className="w-full h-auto mt-15 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="bg-white">
        <div className="py-12 px-4 sm:px-6 lg:px-16 max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 md:gap-0">
            {/* Left Section: Title and Description */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="md:text-[64px] font-bold text-[#0F172A] font-abhaya">
                Our <span className="text-[#FF6700]">Features</span>
              </h2>
              <p className="text-[#334155] font-abhaya mt-4 text-[18px] font-[400]">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus. Nulla convallis ipsum molestie nibh malesuada,
                ac malesuada leo volutpat.
              </p>
            </div>

            {/* Right Section: Learn More link */}
            <div className="md:w-1/2 text-center md:text-right">
              <a
                href="#"
                className="text-[18px] space-x-1 text-[#FF6700] font-bold flex items-center justify-center md:justify-end"
              >
                <p>Learn More</p> <FiArrowRight />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="/landing/feature1.png"
                alt="Luxurious Fittings"
                className="w-full md:w-1/2 h-auto"
              />
              <div className="text-center md:text-left md:w-1/2">
                <h3 className="text-[32px] font-bold tracking-wider font-abhaya text-[#020617]">
                  Luxurious Fittings
                </h3>
                <p className="text-[#334155] font-abhaya mt-4 text-[18px] font-[400]">
                  Crafted for your comfort, to enhance the beauty of your
                  present lifestyle but also paves the way for a more
                  aesthetically pleasing future.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-6">
              <div className="text-center md:text-left md:w-1/2">
                <h3 className="text-[32px] font-bold tracking-wider font-abhaya text-[#020617]">
                  Royal Touch Paint
                </h3>
                <p className="text-[#334155] font-abhaya mt-4 text-[18px] font-[400]">
                  Crafted for your comfort, to enhance the beauty of your
                  present lifestyle but also paves the way for a more
                  aesthetically pleasing future.
                </p>
              </div>
              <img
                src="/landing/feature2.png"
                alt="Royal Touch Paint"
                className="w-full md:w-1/2 h-auto"
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
                <h3 className="text-[32px] font-bold tracking-wider font-abhaya text-[#020617]">
                  Living Inside Nature
                </h3>
                <p className="text-[#334155] font-abhaya mt-4 text-[18px] font-[400]">
                  Crafted for your comfort, to enhance the beauty of your
                  present lifestyle but also paves the way for a more
                  aesthetically pleasing future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Properties Section */}
      <PropertiesSection properties={properties} />

      {/* Client Section */}
      <TestimonialSlider />

      {/* Subscribe Section */}
      <section className="bg-white py-12 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Text and Subscription Form */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-[46px] font-bold font-abhaya text-[#020617] leading-[56px]">
              Subscribe to get the latest <br /> news for you!
            </h2>
            <form className="flex items-center w-full max-w-[462px] h-[64px] border mt-16 border-[#FF6700]">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-grow p-3 sm:p-4 focus:outline-none rounded-l text-[#475569] placeholder:text-[#475569]"
              />
              <button
                type="submit"
                className="bg-[#FF6700] text-white px-6 py-3 font-abhaya mr-2 h-[48px] w-[117px] text-[18px] font-bold"
              >
                Search
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

const PropertiesSection = ({ properties }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      prevRef.current.classList.add("swiper-button-prev");
      nextRef.current.classList.add("swiper-button-next");
    }
  }, []);

  return (
    <section className="py-10 bg-white flex mx-auto flex-col items-center">
      {/* Title and Filter Buttons Section */}
      <div className="flex flex-col md:flex-row md:items-center max-w-[1440px] w-full justify-between my-8 gap-4 px-4 md:px-6">
        {/* Title and Subtitle */}
        <div>
          <h2 className="sm:text-[64px] mb-5 font-bold font-abhaya text-gray-900">
            <span>Latest Listed </span>
            <span className="text-[#FF6700] font-abhaya">Properties</span>
          </h2>
          <p className="text-[#808080] font-abhaya text-[18px] font-[400]">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim <br /> purus.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex space-x-2 md:space-x-4">
          {["All", "Sell", "Rent"].map((label, index) => (
            <button
              key={index}
              className="px-3 sm:px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white text-sm sm:text-base"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Wrapper for Both Sections */}
      <div className="flex flex-col md:flex-row items-start justify-center max-w-[1440px] w-full gap-8 px-4 md:px-6">
        <div className="relative w-full">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            centeredSlides={true}
            className="property-slider"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {properties.map((property, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`border rounded-lg overflow-hidden border-[#FF670040] mb-10 max-w-full transition-all duration-300 ${
                    activeIndex === index ? "scale-105" : ""
                  }`}
                >
                  <img
                    src={property.image}
                    alt="Property"
                    className="w-full h-48 sm:h-60 object-fill"
                  />
                  {/* Details container - shown only on active slide */}
                  <div
                    className={`p-4 ${
                      activeIndex === index ? "block" : "hidden"
                    }`}
                  >
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute bottom-[-100px] left-0 right-0 flex justify-center space-x-4 z-10">
            <button className="custom-prev">
              <img src="/prev.png" alt="prev" />
            </button>
            <button className="custom-next">
              <img src="/next.png" alt="next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote:
        "Crafted for your comfort, to enhance the beauty of your present lifestyle but also paves the way for a more aesthetically pleasing and harmonious future for both you and your cherished family.",
      name: "JOHN KOLIY",
      location: "USA",
      image: "/landing/client.png",
    },
    {
      quote:
        "Another amazing testimonial about the exceptional service and quality provided. Truly transformed our living experience!",
      name: "SARAH SMITH",
      location: "CANADA",
      image: "/landing/client2.png",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="bg-gray-50 py-12 px-6 sm:py-16 sm:px-8 flex items-center justify-center mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 justify-between">
        {/* Title and Arrows */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl sm:text-[64px] leading-[71px] font-bold font-abhaya text-[#020617]">
            <span>
              What Your Client <br /> Says About{" "}
            </span>
            <span className="text-[#FF6700] font-abhaya">JOHN</span>
          </h2>
          <div className="flex space-x-4 mt-6">
            {/* <button className="testimonial-prev p-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition-colors">
              <FiArrowLeft size={20} />
            </button>
            <button className="testimonial-next p-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition-colors">
              <FiArrowRight size={20} />
            </button> */}

            <img
              src="/prev.png"
              alt="prev"
              className="testimonial-prev cursor-pointer"
            />
            <img
              src="/next.png"
              alt="next"
              className="testimonial-next cursor-pointer"
            />
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="lg:w-1/2">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 sm:p-8 rounded-lg flex flex-col">
                  <div className="flex items-start text-orange-500 mb-4">
                    <img src="/landing/quoteleft.png" alt="left" />
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg font-abhaya leading-relaxed mb-4">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center mt-4">
                    <img
                      src={testimonial.image}
                      alt="Client"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 font-abhaya">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-sm font-abhaya">
                        - {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end text-orange-500 mt-4">
                    <img src="/landing/quoteright.png" alt="right" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
