import express from "express";
import cors from "cors";
import config from "./utils/config.js";
import mongoose from "mongoose";
import messageRouter from "./routes/messageRouter.js";
const app = express();

const connectToDB = async (url) => {
  await mongoose.connect(url);
  console.log("You are now connected to the database");
};

connectToDB(config.MONGODB);

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use("/", messageRouter);

export default app;
