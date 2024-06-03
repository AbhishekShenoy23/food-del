import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getsubTotalFromCartItems } = useContext(StoreContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mb-4 border-2 p-2">
      <div className="col-span-8 flex flex-col gap-4 mr-2">
        <h2 className="font-bold">Delivery Information</h2>
        <form action="" className="grid grid-row-6 gap-8 ">
          <div className="flex items-center   border-2 py-1">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 outline-none"
            />
          </div>
          <div className="flex py-1 border-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 outline-none"
            />
          </div>
          <div className="flex border-2 py-1">
            <input
              type="text"
              placeholder="Street"
              className="flex-1 outline-none"
            />
            <input
              type="text"
              placeholder="City"
              className="flex-1 outline-none"
            />
          </div>
          <div className="flex border-2 py-1">
            <input
              type="text"
              placeholder="State"
              className="flex-1 outline-none"
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="flex-1 outline-none"
            />
          </div>
          <div className="flex border-2 py-1">
            <input
              type="text"
              placeholder="Country"
              className="flex-1 outline-none"
            />
          </div>
          <div className="flex border-2 py-1">
            <input
              type="text"
              placeholder="Phone Number"
              className="flex-1 outline-none"
            />
          </div>
        </form>
      </div>
      <div className="cart-total  col-span-4 border-2 shadow-lg">
        <h2 className="font-bold text-xl ml-4  underline-offset-1">
          Cart Totals
        </h2>
        <div className="flex flex-col px-4 justify-between">
          <div>
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
          </div>
          <Link
            to="/order"
            className="bg-orange-600 text-white border-2 p-1 w-full text-center"
          >
            Proceed To CheckOut
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
