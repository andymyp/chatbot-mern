import mongoose from "mongoose";
import Message from "../models/Message.js";

export const getMessages = async (request, response) => {
  try {
    const messages = await Message.find().sort({ createdAt: "desc" });
    response.status(200).json(messages);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
