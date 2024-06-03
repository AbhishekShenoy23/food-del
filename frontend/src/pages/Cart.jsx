import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cartItems, removeItemsFromCart, getsubTotalFromCartItems } =
    useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-grid ">
        <div className="cart-headers grid  grid-cols-12 border-2 mb-4">
          <div className="col-span-2">Items</div>
          <div className="col-span-2">Title</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-2">Quantity</div>
          <div className="col-span-2">Total</div>
          <div className="col-span-2">Remove</div>
        </div>
        <hr className="border-2  mb-2" />
        {cartItems.map((cartItem) => (
          <>
            <div key={cartItem._id} className="grid  grid-cols-12">
              <div className="cart-imag col-span-2">
                <img src={cartItem.image} className=" max-w-[50%]" />
              </div>
              <div className="cart-name col-span-2">{cartItem.name}</div>
              <div className="cart-price col-span-2">{cartItem.price}</div>
              <div className="cart-quantity col-span-2">
                {cartItem.quantity}
              </div>
              <div className="cart-total col-span-2">
                {cartItem.price * cartItem.quantity}
              </div>
              <div
                className="cart-remove hover:cursor-pointer hover:shadow-lg"
                onClick={() => removeItemsFromCart(cartItem._id)}
              >
                X
              </div>
            </div>
            <hr className="border-2  my-2 " />
          </>
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-total-promo grid grid-cols-1 md:grid-cols-12 border-2 mb-4">
          <div className="cart-total col-span-8">
            <h2 className="font-bold text-xl">Cart Totals</h2>
            <div className="flex flex-col px-4">
              <div className="flex justify-between">
                <p className="">Sub total</p>
                <p>₹{getsubTotalFromCartItems()}</p>
              </div>
              <div className="flex  justify-between">
                <p className="">Tax</p>
                <p>₹2</p>
              </div>
              <div className="flex   justify-between">
                <p className="">Total</p>
                <p>₹{2 + getsubTotalFromCartItems()}</p>
              </div>
              <Link
                to="/order"
                className="bg-orange-600 text-white border-2 p-1 w-[50%] text-center"
              >
                Proceed To CheckOut
              </Link>
            </div>
          </div>
          <div className="cart-promo col-span-4">
            <p className="text-sm">If you have any promo code,enter here</p>
            <div className="promo-input bg-gray-400 flex ">
              <input
                type="text"
                placeholder="PROMO CODE"
                className=" bg-transparent w-[90%] outline-none ml-2 text-white"
              />
              <button className="bg-black text-white w-full h-full p-1">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
