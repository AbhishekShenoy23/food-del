import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  // add items to cart

  /*const addItemsToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };*/

  const addItemsToCart = (product) => {
    const currentItem = cartItems.find((item) => item._id === product._id);

    if (currentItem) {
      const updatedItems = cartItems.map((item) => {
        if (item._id === product._id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCartItems(updatedItems);
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  /*const addItemsToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item._id === product._id
    );

    if (existingItemIndex !== -1) {
      // If the item already exists, update its quantity
      const updatedCartItems = cartItems.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCartItems(updatedCartItems);
    } else {
      // If the item doesn't exist, add it to the cart with a quantity of 1
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }

    console.log("Updated cartItems", cartItems);
  };*/

  /* const removeItemsFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };*/

  /* const removeItemsFromCart = (itemId) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item._id === itemId) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return null; // Mark for removal
          }
          return item;
        })
        .filter(Boolean); // Remove items marked for removal
    });
  };*/

  const removeItemsFromCart = (itemId) => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item._id === itemId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        } else {
          return item;
        }
      })
      .filter(Boolean);

    setCartItems(updatedCartItems);
  };

  const getsubTotalFromCartItems = () => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  const contextValue = {
    food_list,
    cartItems,
    addItemsToCart,
    removeItemsFromCart,
    getsubTotalFromCartItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
