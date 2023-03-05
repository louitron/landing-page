import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { gsap } from "gsap";

export function Navbar() {
  return (
    <div>
      <nav className="flex bg-slate-700 h-24 justify-between items-center fixed top-0 w-full z-50">
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
        <div className="text-gray-500 text-xl">
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
      </nav>
    </div>
  );
}
