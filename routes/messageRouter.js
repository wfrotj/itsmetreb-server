import express from "express";
import messageController from "../controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.post("/", messageController.createMessage);
messageRouter.get("/", messageController.getMessages);
export default messageRouter;
