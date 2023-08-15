import express from "express";
import cors from "cors";
import config from "./utils/config.js";
import mongoose from "mongoose";
import messageRouter from "./routes/messageRouter.js";
import { fileURLToPath } from "url";
import path from "path";
const app = express();

const connectToDB = async (url) => {
  await mongoose.connect(url);
  console.log("You are now connected to the database");
};

connectToDB(config.MONGODB);
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "dist")));
app.use("/", messageRouter);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  } else {
    res.type("txt").send("404 Not Found");
  }
});
export default app;
