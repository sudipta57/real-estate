import React from "react";

const RegisterScreen = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen items-center justify-center">
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
          Let’s Get <span className="text-orange-500">Started</span>
        </h2>
        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-gray-600 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Jahan Ara"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              placeholder="shkhjahan@gmail.com"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              className="w-5 h-5 text-orange-500 rounded focus:ring-orange-500"
            />
            <label className="ml-3 text-gray-600">
              By continuing you agree to{" "}
              <a href="/" className="text-orange-500">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/" className="text-orange-500">
                Privacy Policy
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 transition"
          >
            Create Account
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-4 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
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

        <p className="mt-8 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;
