import React, { useState } from "react";
import { MenuIcon, UserCircleIcon} from "@heroicons/react/solid";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex  items-center">
              
<a href="/home">

            <img 
  className="h-16 w-16  mx-auto mt-9"
  src="src\assets\WhatsApp_Image_2024-05-02_at_11.44.16_54372dd2-removebg-preview.png"
  alt="logo"
/>

</a>
              <div>
              <span className="text-white mt-6 text-3xl font-bold sm:text-4xl font-serif   ">Solvera</span>
              </div>
              <div className="hidden md:block p-5 ml-20">
                <a
                  href="/home"
                  className="text-white  px-3 py-2 rounded-md text-xl font-medium hover:bg-green-700"
                >
                  Home
                </a>
                <a
                  href="/login"
                  className="text-white px-3 py-2 rounded-md text-xl font-medium hover:bg-green-700"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="text-white px-3 py-2 rounded-md text-xl font-medium hover:bg-green-700"
                >
                  Signup
                </a>
                <a href="/about-us" className="text-white px-3 py-2 rounded-md text-xl font-medium hover:bg-green-700">
                  About Us

                </a>
                <a href="/contact-us" className="text-white px-3 py-2 rounded-md text-xl font-medium hover:bg-green-700">
                 Contact Us
                </a>
                <a href="/faq" className="text-white px-3 py-2 rounded-md text-xl font-medium hover:bg-green-700">
                 FaQ
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
          
              <a href="/profile">
                <UserCircleIcon className="h-9 w-12 mt-7  text-white" />
                <span className="text-xl font-bold text-white">Profile</span>
              </a>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black mt-9">
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Login
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Signup
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Contact Us
            </a>
          </div>
          <div className="px-2 pt-2 pb-3 sm:px-3 bg-black">
           
          </div>
          <div className="px-2 ml-4 pt-2 flex pb-3 bg-slate-600 sm:px-3">
            <UserCircleIcon className="h-9 w-34 text-white" />
            <span className="text-white font-bold text-xl ml-4">Profile</span>
          </div>
        </div>
      )}
   
    
    </div>
  );
};

export default Navbar;
