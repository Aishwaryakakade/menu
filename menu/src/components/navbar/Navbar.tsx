import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="w-screen h-16 border-b-4 border-myteal px-6">
      <div className="flex items-center justify-between h-full relative">
        {/* Logo on the left */}
        <span className="logo text-xl font-bold absolute left-0 top-1/2 -translate-y-1/2">
          MixMaster
        </span>

        {/* NavLinks centered */}
        <div className="flex justify-center w-full">
          <div className="nav-links flex space-x-6">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/newsletter" className="nav-link">
              NewsLetter
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
