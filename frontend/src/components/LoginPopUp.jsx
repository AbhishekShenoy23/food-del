import React, { useState } from "react";
import { assets } from "../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login-pop w-[100%] h-[100%] z-10 absolute bg-[#00000090] grid">
      <form
        action=""
        className="login-popup-container w-[70%] flex p-8 flex-col place-self-center bg-white text-[#808080]"
      >
        <div className="login-title flex items-center justify-between">
          <h2 className="font-bold text-pretty text-orange-500  flex-1 text-center uppercase text-xl">
            {currentState}
          </h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div className="login-inputs flex flex-col gap-4  shadow-lg rounded-md border border-orange-600 mt-2 p-1">
          {currentState == "Sign Up" && (
            <div className="grid grid-cols-12 gap-4">
              <label className="col-span-4  text-center text-lg">Name :</label>
              <input
                type="text"
                placeholder="Your Name is Required"
                className="outline-none border border-orange-600 rounded-md p-1 col-span-8"
              />
            </div>
          )}
          <div className="grid grid-cols-12 gap-4">
            <label className="col-span-4  text-center text-lg">EMAIL :</label>
            <input
              type="email"
              placeholder="Your Email is Required"
              className="outline-none border border-orange-600 rounded-md p-1 col-span-8"
            />
          </div>
          <div className="grid grid-cols-12 gap-4">
            <label className="col-span-4  text-center text-lg">
              PASSWORD :
            </label>
            <input
              type="password"
              placeholder="Password"
              className="outline-none border border-orange-600 rounded-md p-1 col-span-8"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white font-bold border-2 p-1"
          >
            {currentState == "Sign Up" ? "Sign Up" : "Login"}
          </button>
          <div className="login-popup-condition flex gap-2 items-center">
            <input
              type="check"
              required
              className="border w-[2%] border-orange-600 outline-none"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          {currentState == "Login" ? (
            <p>
              Create an Account?{" "}
              <span
                onClick={() => setCurrentState("Sign Up")}
                className=" underline cursor-pointer"
              >
                Click Here
              </span>
            </p>
          ) : (
            <p>
              Already have an Account?{" "}
              <span
                onClick={() => setCurrentState("Login")}
                className=" underline cursor-pointer"
              >
                Click Here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopUp;
