import foodModel from "../models/foodModel.js";
import fs from "fs";

//Add food Item

const addFoodItem = async (req, res, next) => {
  let image_filename = req.file.filename;
  console.log(req.file.filename);

  const food = new foodModel({
    name: req.body.name,
    image: image_filename,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
  });

  console.log(food);
  try {
    await food.save();
    res.status(201).json({
      message: "Food Item Added Successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error saving food",
      success: false,
    });
  }
};

const getFoodList = async (req, res) => {
  try {
    const foodList = await foodModel.find({});
    res.status(200).json({ sucess: true, data: foodList });
  } catch (error) {
    res.status(500).json({ sucess: false, message: error.message });
  }
};

//Remove food

const removeFoodItem = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Food Item Not Found" });
    }

    fs.unlink(`uploads/${food.image}`, (err) => {
      if (err) {
        console.log(err.message);
      }
    });

    await foodModel.findByIdAndDelete(req.body.id);

    res
      .status(200)
      .json({ success: true, message: "Food Item Removed Successfully" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to Remove the Food Item" });
  }
};

export { addFoodItem, getFoodList, removeFoodItem };
