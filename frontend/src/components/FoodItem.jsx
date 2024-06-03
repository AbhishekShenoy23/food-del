import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ foodItem }) => {
  // Find the item in the cart, if it exists
  const { cartItems, addItemsToCart, removeItemsFromCart } =
    useContext(StoreContext);
  const itemInCart = cartItems.find((item) => item._id === foodItem._id);

  return (
    <div className="food-item animate-fade-in w-full rounded-t-md shadow-md relative">
      <div className="image-container">
        <img
          src={foodItem.image}
          alt={foodItem.name}
          className="food-item-img w-full rounded-t-md"
        />
      </div>
      <div className="absolute bottom-40 left-80  md:top-[140px] md:left-[190px]">
        {!itemInCart ? (
          <img
            src={assets.add_icon_white}
            alt="add"
            onClick={() => addItemsToCart(foodItem)}
            className="opacity-[0.5] h-8 w-8"
          />
        ) : (
          <div className="add_remove_btns flex gap-1 items-center justify-end mt-2 mr-1">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeItemsFromCart(foodItem._id)}
              alt="remove"
              className="h-8 w-8"
            />
            <span className="border py-1 px-2 font-bold bg-white rounded-full">
              {itemInCart.quantity}
            </span>
            <img
              src={assets.add_icon_green}
              onClick={() => addItemsToCart(foodItem)}
              alt="add"
              className="h-8 w-8"
            />
          </div>
        )}
      </div>

      <div className="food-item-info p-4">
        <div className="food-item-img-rating flex justify-between items-center mb-2">
          <p className="food-item-name font-bold">{foodItem.name}</p>
          <img
            src={assets.rating_starts}
            alt="rating"
            className="food-item-img-rating max-w-[50px]"
          />
        </div>
        <p className="food-item-description text-md tracking-tighter">
          {foodItem.description}
        </p>
        <p className="food-item-price my-2 font-semibold">₹{foodItem.price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
