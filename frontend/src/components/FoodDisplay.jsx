import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  console.log(food_list);
  return (
    <div className="mt-4 food-display">
      <h2 className=" font-bold mt-4">Top Dishes Near You</h2>
      <div className="food-display-list grid grid-cols-1 md:grid-cols-4 gap-3 mt-4">
        {food_list.map((item) => {
          if (category === "All" || item.category === category) {
            return <FoodItem key={item._id} foodItem={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
