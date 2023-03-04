import React from "react";

export function Navbar() {
  return (
    <div>
      <nav className="flex bg-slate-700 h-12 justify-between items-center">
        <div className="text-white">
          <p className="pl-4">Start TailwindCSS</p>
        </div>
        <div className="text-gray-500">
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
