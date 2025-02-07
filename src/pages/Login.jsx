import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-[1500px] mx-auto">
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
          Login
        </h2>
        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-[#0000009E] font-medium">Email</label>
            <input
              type="email"
              placeholder="shkhjahan@gmail.com"
              className="text-[#0000009E] w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-[#0000009E] font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="text-[#0000009E] w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex items-center justify-end mt-4">
            <label
              className="ml-3 text-[#214C7E] text-[14px] font-[700] font-poppins"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              forgot password?
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-10 bg-orange-500 text-white text-[22px] font-[700] font-poppins rounded-full hover:bg-orange-600 transition"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center my-6 w-[50%] justify-center mx-auto">
          <hr className="flex-grow border-[#000000] border-[1.1px]" />
          <span className="px-4 text-[#0000009E] text-[22px] font-[700]">
            OR
          </span>
          <hr className="flex-grow border-[#000000] border-[1.1px]" />
        </div>
        <div className="flex justify-center md:space-x-4">
          <img
            src="/register/icon1.png" // Replace with Google logo image path
            alt="Google"
          />
          <img
            src="/register/icon2.png" // Replace with Facebook logo image path
            alt="Facebook"
          />
          <img
            src="/register/icon3.png" // Replace with Twitter logo image path
            alt="Twitter"
          />
        </div>

        <p className="mt-8 text-center text-[#0000009E] text-[16px] font-[400]">
          don't have an account?{" "}
          <Link to="/sign-up" className="text-orange-500">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
