import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//app configuration

const app = express();

//api endpoints
const port = 4000;

//middleware endpoints
app.use(express.json());
app.use(cors());

//DB connection endpoint.

//IF we are able to connected to DB then only connect it to the server

connectDB().then(() => {
  app.listen(port, (err, res) => {
    console.log("server listening on port", port);
  });
});

app.use("/api/food", foodRouter);

app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});
