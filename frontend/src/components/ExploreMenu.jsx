import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  const handleCategory = (categorySelected) => {
    setCategory((prev) => {
      if (prev == categorySelected) {
        return "All";
      } else {
        return categorySelected;
      }
    });
  };

  return (
    <div className="explore-menu flex flex-col gap-4 mt-4" id="explore">
      <h1 className=" font-bold text-lg">Explore Menu</h1>
      <p className="max-w-full md:max-w-[50%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ullam odio
        nisi neque quisquam! Ipsa!
      </p>
      <div className="explore-menu-list flex items-center hide-scrollbar gap-4 justify-between text-center mt-4 overflow-x-scroll">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`explore-menu-item min-w-[80px] cursor-pointer   rounded-lg p-3
            ${item.menu_name == category ? " scale-110" : ""}`}
            onClick={() => handleCategory(item.menu_name)}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`${
                item.menu_name == category
                  ? " border-4 rounded-full border-orange-600"
                  : ""
              }`}
            />
            <p className="mt-2 min-w-[30%] tracking-tighter">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
