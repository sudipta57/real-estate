import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* footer */}

      <section
        className="relative bg-contain bg-center text-white py-16 px-8 md:h-[435px]"
        style={{
          backgroundImage: "url('/landing/Footer.png')", // Replace with actual background image URL
        }}
      >
        <div className="absolute bottom-10 left-0 right-0">
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center ">
            {/* Left Side - Title and Subtitle */}
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-[70px] font-bold mb-4 font-abhaya">
                Start Your Project Now!
              </h1>
              <p className="text-[24px] font-[400] mb-6 text-[#F8FAFC]">
                Made for your convenience for a more beautiful future for you
                and your family
              </p>
            </div>

            {/* Right Side - Contact Button and Social Icons */}
            <div className="flex flex-col items-center lg:items-end space-y-6">
              {/* Contact Button */}
              <button className="bg-[#FF6700] text-[32px] font-[400] font-abhaya text-white h-[58px] w-[189px] hover:bg-orange-600">
                Contact Us
              </button>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <img
                  src="/facebook.png"
                  alt="facebook"
                  className="cursor-pointer"
                />
                <img
                  src="/twitter.png"
                  alt="twitter"
                  className="cursor-pointer"
                />
                <img
                  src="/linkedin.png"
                  alt="linkedin"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="relative z-10 border-t border-[#FFFFFF3D] pt-6 mt-8 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Brand Logo */}
              <h2 className="text-2xl font-bold text-[32px] font-abhaya">
                Real <span className="text-[#FF6700]">Estate</span>
              </h2>

              {/* Navigation Links */}
              <nav className="flex space-x-10 mt-4 lg:mt-0 text-[18px] font-bold font-abhaya">
                <a href="#">home</a>
                <a href="#">About Us</a>
                <a href="#">Property</a>
                <a href="#">Blog</a>
                <a href="#">Contact Us</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
