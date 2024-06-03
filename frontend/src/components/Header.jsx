import React from "react";
import headerImg from "../assets/header_img.png"; // Adjust the path as ne.eded
const Header = () => {
  return (
    <div
      className="relative h-64 w-full bg-cover -z-20"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className="absolute md:max-w-[60%] bottom-0 left-0 animate-fade-in text-white flex flex-col gap-2 p-4">
        <h2 className="font-bold text-sm md:text-xl">
          Order your Favourite Food Here
        </h2>
        <p className="tracking-tighter text-sm md:text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi atque
          ratione, nostrum alias porro aut.
        </p>
        <button className="md:bg-white text-white md:text-orange-600 md:border md:p-1 max-w-fit rounded-md hover:cursor-pointer hover:bg-slate-400 text-xs md:text-md">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
