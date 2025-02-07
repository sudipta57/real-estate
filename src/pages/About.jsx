import React from "react";
const stats = [
  { value: "20K+", label: "Satisfied Customers" },
  { value: "15+", label: "Years of Experience" },
  { value: "30K+", label: "Property Collections" },
  { value: "50+", label: "Industry Awards" },
];
const items = [
  {
    title: "Find Excellent Deals",
    description:
      "Explore our extensive listings of properties, ranging from cozy apartments to luxurious estates.",
    icon: "/about/help-icon1.png", // Replace with your actual icon or image
  },
  {
    title: "Outstanding Property",
    description:
      "Explore our extensive listings of properties, ranging from cozy apartments to luxurious estates.",
    icon: "/about/help-icon2.png", // Replace with your actual icon or image
  },
  {
    title: "Find Excellent Deals",
    description:
      "Explore our extensive listings of properties, ranging from cozy apartments to luxurious estates.",
    icon: "/about/help-icon3.png", // Replace with your actual icon or image
  },
];
const teamMembers = [
  {
    name: "Ryan Hastings",
    role: "Realtor",
    image: "/about/team1.png", // Replace with actual image URLs
  },
  {
    name: "Ryan Hastings",
    role: "Realtor",
    image: "/about/team2.png", // Replace with actual image URLs
  },
  {
    name: "Ryan Hastings",
    role: "Realtor",
    image: "/about/team3.png", // Replace with actual image URLs
  },
  {
    name: "Ryan Hastings",
    role: "Realtor",
    image: "/about/team4.png", // Replace with actual image URLs
  },
  {
    name: "Ryan Hastings",
    role: "Realtor",
    image: "/about/team5.png", // Replace with actual image URLs
  },
  {
    name: "Ryan Hastings",
    role: "Realtor",
    image: "/about/team6.png", // Replace with actual image URLs
  },
];
const testimonials = [
  {
    quote:
      "ProNest exceeded my expectations! Their platform is intuitive, user-friendly, and efficient. Found my dream home in no time! Highly recommended.",
    name: "Emily Chen",
    role: "Marketing Manager",
    image: "/about/client1.png",
  },
  {
    quote:
      "ProNest's expert agents provided exceptional service, guiding me through every step. Their local market knowledge is unparalleled.",
    name: "David Lee",
    role: "Entrepreneur",
    image: "/about/client2.png",
  },
  {
    quote:
      "ProNest's seamless search functionality saved me time and stress. Their mobile app is convenient and easy to use.",
    name: "Sarah Taylor",
    role: "Doctor",
    image: "/about/client3.png",
  },
  {
    quote:
      "ProNest's property alerts kept me informed about new listings instantly. Their website is modern and easy to navigate.",
    name: "Mark Davis",
    role: "Travel Writer",
    image: "/about/client4.png",
  },
  {
    quote:
      "I highly recommend ProNest for reliable and efficient real estate services. Their team is knowledgeable and responsive.",
    name: "Rachel Patel",
    role: "Lawyer",
    image: "/about/client5.png",
  },
  {
    quote:
      "ProNest's market analysis tools helped me make informed investment decisions. Accurate and up-to-date data.",
    name: "James Martin",
    role: "Investment Banker",
    image: "/about/client6.png",
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
    authorImg: "/about/ar3.png",
  },
  {
    id: 2,
    category: "Building",
    image: "/about/artical2.png", // Replace with actual image URL
    title: "Navigating the Mortgage Approval Process",
    author: "Jerome Bell",
    date: "July 9, 2024",
    authorImg: "/about/ar2.png",
  },
  {
    id: 3,
    category: "Real Estate",
    image: "/about/artical3.png", // Replace with actual image URL
    title: "The Ultimate Checklist for First-Time Home Buyers",
    author: "Ralph Edwards",
    date: "July 9, 2024",
    authorImg: "/about/ar1.png",
  },
];
const AboutSection = () => {
  return (
    <>
      <section className="md:py-12 px-4 lg:px-20 border-b max-w-[1500px] mx-auto border-[#C9C9C9] pb-20 mb-14">
        <h2 className="text-3xl lg:text-[64px] font-bold text-[#020617] md:mb-16 leading-10 md:leading-[75px] py-6 md:py-0 font-abhaya">
          About our <span className="text-[#FF6700]">Real estate</span>
          <br /> Company
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div>
            <img
              src="/about/img1.png" // Replace with your building image
              alt="Building"
            />
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Experience Card */}
            <div className="flex items-end justify-center">
              <div className="relative border border-gray-200 max-w-[450px] rounded-lg overflow-hidden mb-10">
                <img src="/about/img3.png" alt="img3" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="md:text-[100px] font-exo2">25 +</p>
                  <p className="text-[#020617] text-[24px] font-[500] font-poppins">
                    Years Of Real Estate Experience
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[#020617] text-sm lg:text-[14px] font-[400] font-poppins mb-8 leading-[22px]">
              Our agency takes a collaborative approach, working closely with
              you to understand your business, how to grow up, craft
              personalized marketing solutions that align with our vision, and
              stay updated with the latest trends.
            </p>

            {/* Story & Mission */}
            <div className="flex flex-col items-end gap-8">
              {/* Story Section */}
              <div className="flex gap-4 max-w-md">
                <div>
                  <h4 className="text-[20px] font-[500] text-[#020617] mb-2 font-poppins">
                    Our Story
                  </h4>
                  <p className="text-[#020617] text-sm lg:text-[14px] font-[400] font-poppins mb-8 leading-[22px]">
                    At ProNest, we make finding your dream home effortless with
                    personalized, expert guidance. Your journey to the perfect
                    property starts here.
                  </p>
                </div>
              </div>

              {/* Mission Section */}
              <div className="flex gap-4 max-w-md">
                <div>
                  <h4 className="text-[20px] font-[500] text-[#020617] mb-2 font-poppins">
                    Our Mission
                  </h4>
                  <p className="text-[#020617] text-sm lg:text-[14px] font-[400] font-poppins mb-8 leading-[22px]">
                    At ProNest, our mission is to simplify your real estate
                    journey with expert guidance and personalized service.
                  </p>
                </div>
                <img
                  src="/about/img2.png" // Replace with your mission image
                  alt="Mission"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-4 mb-14">
        <div className=" border-b max-w-[1500px] mx-auto border-[#C9C9C9] pb-20">
          <div className="flex flex-wrap justify-center gap-8 relative">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center w-[270px] h-[270px] rounded-full border border-gray-300 ${
                  index === 1 || index === 3 ? "-translate-y-10" : ""
                }`}
              >
                <h3 className="text-3xl font-semibold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-base text-gray-600 text-center">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex justify-between">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl lg:text-[64px] font-bold text-[#020617] leading-[75px] font-abhaya">
              How We Can <br /> <span className="text-[#FF6700]">Help</span> You
            </h2>
          </div>

          {/* Items */}
          <div className="space-y-8 lg:w-3/5">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-[#C9C9C9] pb-10"
              >
                {/* Left Section - Icon and Text */}
                <div className="flex items-center gap-6">
                  {/* Icon */}
                  <img src={item.icon} alt="img" />

                  {/* Title and Description */}
                  <div>
                    <h3 className="text-[20px] font-semibold text-[#020617] font-poppins">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#020617] max-w-md text-[14px] font-[400] font-poppins mt-5">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right Arrow */}
                <img src="/about/help-icon4.png" alt="img" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" py-12 px-6">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`relative p-6 text-center ${
                  index === 1 || index === 4 ? "mt-12" : ""
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto object-cover  mb-4"
                />
                <h3 className="text-[28px] font-semibold text-[#020617] font-poppins">
                  {member.name}
                </h3>
                <p className="text-[#6E6E6E] text-[26px] font-semibold font-poppins">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <section className=" py-12 px-6 max-w-7xl mx-auto">
          <div className="container mx-auto">
            <h2 className="text-[64px] font-abhaya font-bold text-center text-[#020617] mb-10">
              Discover Our{" "}
              <span className="text-[#FF6700]">Clients Experiences</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <p className="text-[#020617] mb-6 text-[14px] font-[400] font-poppins">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-start">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-[500] text-[16px] font-poppins text-[#020617]">
                        {testimonial.name}
                      </h3>
                      <p className="text-[#020617] text-[14px] font-[400] font-poppins">
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
      <section className="max-w-[1500px] mx-auto py-16 px-4 lg:px-32">
        <div className="text-center mb-10">
          <h2 className="text-[64px] font-abhaya font-bold text-center text-[#020617] mb-1">
            Latest <span className="text-[#FF6700]">Articles</span>
          </h2>
          <p className="text-[#000000] text-[18px] font-[400] font-poppins">
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
    </>
  );
};

export default AboutSection;
const ArticleCard = ({ article }) => (
  <div className="bg-white  overflow-hidden">
    <div className="relative">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <span className="absolute top-4 left-4 bg-transparent border border-[#003366] text-[#003366] text-sm font-medium px-3 py-1 rounded-[4px]">
        {article.category}
      </span>
    </div>
    <div>
      <h3 className="text-[20px] font-semibold text-[#020617] mb-2 font-poppins">
        {article.title}
      </h3>
      <hr className="border-[#D9D9D9] my-3 mb-5" />
      <div className="flex items-center justify-between bg-[#ECECEC] rounded-md p-2">
        <div className="flex items-center">
          <img
            src={article.authorImg} // Replace with author image URL
            alt={article.author}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-[16px] font-[600] font-poppins text-[#020617]">
              {article.author}
            </p>
            <p className="text-[14px] font-[400] font-poppins text-[#6E6E6E]">
              {article.date}
            </p>
          </div>
        </div>
        <button className="text-orange-500">
          <img src="/about/Vector.png" alt="vector" />
        </button>
      </div>
    </div>
  </div>
);
