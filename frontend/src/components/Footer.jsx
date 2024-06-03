import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="footer bg-gray-600 flex-col flex items-center p-2 text-white"
      id="footer"
    >
      <div className="footer-content grid-cols-1  grid md:grid-cols-3  gap-4">
        <div className="footer-left flex flex-col gap-2">
          <img src={assets.logo} alt="" className="max-w-[30%]" />
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            ullam odit totam quidem delectus dolorem maxime saepe! Animi
            suscipit quidem eum, illo mollitia sit incidunt velit, sequi minus
            ullam praesentium.
          </p>
          <div className="footer-left-social-icons flex gap-1">
            <img src={assets.facebook_icon} alt="" className="max-w-[10%]" />
            <img src={assets.linkedin_icon} alt="" className="max-w-[10%]" />
            <img src={assets.twitter_icon} alt="" className="max-w-[10%]" />
          </div>
        </div>
        <div className="footer-center flex flex-col gap-2">
          <h2 className="text-orange-600 font-bold">COMPANY</h2>
          <ul className="text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2 className="text-orange-600 font-bold">Get In Touch</h2>
          <ul>
            <li>+1 2-223344</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-coyright">
        Copyright 2024 © Tomato.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
