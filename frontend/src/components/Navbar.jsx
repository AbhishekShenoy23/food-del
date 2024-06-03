import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { assets } from "../assets/assets.js";
import { StoreContext } from "../context/StoreContext.jsx";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { cartItems } = useContext(StoreContext);

  return (
    <div className="navbar flex justify-between items-center py-4 text-orange-600">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo w-[150px]" />
      </Link>
      <ul className="navbar-menu md:flex gap-4 hidden ">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`cursor-pointer ${menu == "home" ? "underline" : ""}`}
        >
          home
        </Link>
        <a
          href="#explore"
          onClick={() => setMenu("menu")}
          className={`cursor-pointer ${menu == "menu" ? "underline" : ""}`}
        >
          menu
        </a>
        <li
          onClick={() => setMenu("mobile-app")}
          className={`cursor-pointer ${
            menu == "mobile-app" ? "underline" : ""
          }`}
        >
          mobile-app
        </li>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={`cursor-pointer ${
            menu == "contact us" ? "underline" : ""
          }`}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right flex gap-6 items-center ">
        <img src={assets.search_icon} alt="" className="h-6 w-6" />
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} className="h-6 w-6" />
            <div className="dot  flex items-center h-4 w-4 p-3 rounded-full justify-center bg-orange-600 absolute -top-3 left-3 text-white">
              <span>{cartItems.length}</span>
            </div>
          </Link>
        </div>

        <button
          className="border p-1 rounded-md"
          onClick={() => setShowLogin((prev) => !prev)}
        >
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
