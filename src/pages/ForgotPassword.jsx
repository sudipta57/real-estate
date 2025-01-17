import React from "react";

const ForgotPassword = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Left Side - Image */}
      <div>
        <img
          src="/register/register.png" // Replace with the actual image path
          alt="Hands holding a house"
        />
      </div>
      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-white px-8 py-10 lg:p-20">
        <h2 className="text-[48px] font-[700] text-gray-900 text-center">
          <span className="text-orange-500">Forgot</span> Password
        </h2>
        <div className="my-10">
          <h3 className="text-[26px] font-[500] text-[#0000009E]">
            Forgot Password
          </h3>
          <p className="text-[20px] text-[#A9ABAF] font-[400]">
            Enter Username, Email or Phone Number
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <input
              type="email"
              placeholder="shkhjahan@gmail.com"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="">
            <button
              type="submit"
              className="w-full py-3 mt-6 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 transition"
            >
              Confirm
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-gray-600">
          Questions? Email us at{" "}
          <a href="/" className="text-orange-500">
            support@realestate.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
