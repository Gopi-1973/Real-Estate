import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMdList } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <nav className=" bg-white shadow-md w-full py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-600"> <span className="text-gray-500">Real</span>Estate</h1>

        {/* Dekstop Menu */}
        <ul className="hidden md:flex text-gray-700 gap-6 text-lg font-medium">
          <li className="hover:text-red-500 cursor-pointer hover:underline  "><a href="/">Home</a></li>

           <li className="hover:text-red-500 cursor-pointer hover:underline"><a href="/about">About</a></li>

          <li className="hover:text-red-500 cursor-pointer hover:underline"><a href="/properties">Properties</a></li>
          
          <li className="hover:text-red-500 cursor-pointer hover:underline"><a href="/contact">Contact</a></li>
        </ul>
        {/* Dekstop Button */}
        <button className="block md:flex bg-red-600 px-4 py-2 rounded-full text-white  hover:bg-red-700"><a href="/SignIn">Sign In</a>
        </button>
          
        {/* Mobile Hamburger */}
        <button
          className="md:hidden  text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose size={30} /> : <IoMdList size={30} />}
        </button>
      </div>
      {/*Mobile menu  */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-top">
          <ul className=" flex flex-col items-center py-4 text-gray-700 gap-4 text-lg font-medium ">
            <li className="hover:text-red-500 cursor-pointer"><a href="/">Home</a></li>

             <li className="hover:text-red-500 cursor-pointer"><a href="/about">About</a></li>
             
            <li className="hover:text-red-500 cursor-pointer"><a href="/properties">Properties</a></li>

            <li className="hover:text-red-500 cursor-pointer"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
