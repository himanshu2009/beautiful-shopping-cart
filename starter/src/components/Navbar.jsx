import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "./logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <nav className="font-medium text-white flex justify-around mx-auto items-center h-20 max-w-10xl px-8">
      <div>
      <NavLink to="/">
        <img src={logo} alt="logo" className="md:h-14 h-10" />
      </NavLink>
      </div>
      <div className="flex justify-between items-center gap-6">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/Cart">
          <div className="relative">
            <span className="text-red-500">{cart.length}</span>
            <FaShoppingCart className="" />
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
