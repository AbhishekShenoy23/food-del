import { Router } from "express";
import {
  addFoodItem,
  getFoodList,
  removeFoodItem,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = Router();

//Image Storage Engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const uploads = multer({ storage: storage });

foodRouter.post("/add", uploads.single("image"), addFoodItem);

foodRouter.get("/list", getFoodList);

foodRouter.post("/remove", removeFoodItem);

export default foodRouter;
