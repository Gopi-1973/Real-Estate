import React from "react";

const SignIn = () => {
  return (
    <div className=" h-[79vh] flex items-center justify-center bg-gray-400">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
          Sign In
        </h1>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300  px-3 py-2 rounded-md focus:outline-nonefocus-ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full border border-gray-300  px-3 py-2 rounded-md focus:outline-nonefocus-ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a
              href="#"
              className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition">Sign In</button>
        </form>

        <p className="text-center text-gray-600 mt-6">Don't have an account?{""}
            <a href="#" className="text-blue-600 hover:underline ml-1">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
