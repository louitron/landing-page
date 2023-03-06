import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex bg-gradient-to-b from-slate-700 to-blue-400 h-24 justify-between items-center fixed top-0 w-full z-50">
        <div className="text-white">
          <p className="flex text-xl pl-4">Made with React and TailwindCSS</p>
        </div>
        <div className="flex">
          <div className="animate-spin-slow flex text-4xl text-white">
            <FaReact />
          </div>
          <div className=" ml-3 text-4xl text-white">
            <SiTailwindcss />
          </div>
        </div>
        <div className="text-gray-200 text-xl hidden md:block">
          <a className="pl-4 hover:text-white" href="#">
            Home
          </a>
          <a className="pl-4 hover:text-white" href="#">
            About
          </a>
          <a className="pl-4 hover:text-white" href="#">
            Services
          </a>
          <a className="pl-4 pr-4 hover:text-white" href="#">
            Contact
          </a>
        </div>
        <div className="md:hidden flex">
          {isOpen ? (
            <button
              className="text-white text-3xl mr-4"
              onClick={handleMenuClick}
            >
              <AiOutlineClose />
            </button>
          ) : (
            <button
              className="text-white text-3xl mr-4"
              onClick={handleMenuClick}
            >
              <GiHamburgerMenu />
            </button>
          )}
        </div>
      </nav>
      {isOpen && (
        <div className="z-50 fixed top-24 w-full bg-gradient-to-b from-blue-400 to-slate-700">
          <div className="flex flex-col items-center py-4">
            <a
              className="py-2 px-4 text-gray-200 hover:bg-blue-500"
              href="#"
              onClick={handleMenuClick}
            >
              Home
            </a>
            <a
              className="py-2 px-4 text-gray-200 hover:bg-blue-500"
              href="#"
              onClick={handleMenuClick}
            >
              About
            </a>
            <a
              className="py-2 px-4 text-gray-200 hover:bg-blue-500"
              href="#"
              onClick={handleMenuClick}
            >
              Services
            </a>
            <a
              className="py-2 px-4 text-gray-200 hover:bg-blue-500"
              href="#"
              onClick={handleMenuClick}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
