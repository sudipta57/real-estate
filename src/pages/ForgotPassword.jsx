import React from "react";

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Left Side - Image */}
      <div>
        <img
          src="/register/register.png" // Replace with the actual image path
          alt="Hands holding a house"
        />
      </div>
      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-white px-8 py-10 lg:p-20">
        <h2 className="text-[48px] font-[700] text-[#020617] text-center font-abhaya">
          <span className="text-orange-500">Forgot</span> Password
        </h2>
        <div className="my-10">
          <h3 className="text-[26px] font-[500] text-[#0000009E] font-poppins">
            Forgot Password
          </h3>
          <p className="text-[20px] text-[#A9ABAF] font-[400] font-poppins">
            Enter Username, Email or Phone Number
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="flex items-center justify-center border mt-2 p-3 rounded-[7px]">
            <img src="/register/forgot.png" alt="img" className="me-5" />
            <input
              type="email"
              placeholder="Username, Email or Phone Number"
              className="w-full text-[#D1D5DB] rounded-md focus:outline-none"
            />
          </div>
          <div className="flex justify-center items-center gap-4 h-[64px]">
            {/* Image Container */}
            <div className="bg-[#F3F4F6] flex items-center justify-center rounded p-4 h-full">
              <img src="/register/back.png" alt="img" />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="py-3 px-6 text-[22px] font-[700] font-poppins bg-[#FF6700] text-white rounded-md w-full h-full"
            >
              Confirm
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-[#A9ABAF] text-[25px] font-[400] font-poppins">
          Questions? Email us at{" "}
          <a href="/" className="text-[#FF6700]">
            support@realestate.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
