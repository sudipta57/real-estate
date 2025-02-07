import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto my-10 justify-between ">
      {/* Form Section */}
      <div className="lg:w-1/2 bg-white p-10 flex flex-col justify-center border-[#D9D9D9] border rounded-[25px] ">
        <h2 className="text-2xl lg:text-[34px] font-[600] font-poppins text-[#020617]">
          Send Us a <span className="text-[#FF6700]">Message</span>
        </h2>
        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-[#F4F4F4] placeholder:text-[#020617] text-[#020617]"
            />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-[#F4F4F4] placeholder:text-[#020617] text-[#020617]"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-[#F4F4F4] placeholder:text-[#020617] text-[#020617]"
          />
          <input
            type="text"
            placeholder="Your address"
            className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-[#F4F4F4] placeholder:text-[#020617] text-[#020617]"
          />
          <textarea
            placeholder="Write your message"
            className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-[#F4F4F4] placeholder:text-[#020617] text-[#020617]"
          ></textarea>
          <button
            type="submit"
            className="border border-[#FF6700] text-[#FF6700] text-[20px] font-[600] px-2 rounded-md h-[49px] max-w-[156px]"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="lg:w-1/2 h-96 lg:h-auto px-4 rounded-lg">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509419!2d144.953735315316!3d-37.81627937975139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779ebeb8c896d3!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1600212554518!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
