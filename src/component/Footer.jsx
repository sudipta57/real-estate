import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* footer */}

      <section
        className="relative bg-cover bg-center text-white py-16 px-8"
        style={{
          backgroundImage: "url('/landing/Footer.png')", // Replace with actual background image URL
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
          {/* Left Side - Title and Subtitle */}
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2 ml-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Start Your Project Now!
            </h1>
            <p className="text-lg lg:text-xl mb-6">
              Made for your convenience for a more beautiful future for you and
              your family
            </p>
          </div>

          {/* Right Side - Contact Button and Social Icons */}
          <div className="flex flex-col items-center lg:items-end lg:w-1/2 space-y-6 mr-10">
            {/* Contact Button */}
            <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-600">
              Contact Us
            </button>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="relative z-10 border-t border-gray-600 pt-6 mt-8">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Brand Logo */}
            <h2 className="text-lg font-bold">
              Copyright@RealEstate | developed by SECWEBXPERTS PVT. LTD.
            </h2>

            {/* Navigation Links */}
            <nav className="flex space-x-6 mt-4 lg:mt-0">
              <a href="#" className="hover:text-orange-500">
                Home
              </a>
              <a href="#" className="hover:text-orange-500">
                About Us
              </a>
              <a href="#" className="hover:text-orange-500">
                Property
              </a>
              <a href="#" className="hover:text-orange-500">
                Blog
              </a>
              <a href="#" className="hover:text-orange-500">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
