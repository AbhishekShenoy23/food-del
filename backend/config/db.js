import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log("Error connecting", err);
    });
};

export default connectDB;
