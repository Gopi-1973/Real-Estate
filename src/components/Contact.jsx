import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto  max-h-screen "> 
        <h1 className="text-4xl font-bold text-center text-blue-600 hover:text-blue-800 underline cursor-pointer mt-6">
          Contact Us
        </h1>
        <form
          action="submit"
          method="post"
          className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-lg space-y-2"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email:
            </label>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message:
            </label>
            <textarea
              rows="4"
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600 resize-none "
            ></textarea>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
