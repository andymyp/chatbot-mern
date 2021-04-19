import mongoose from "mongoose";

const MessageSchema = mongoose.Schema({
  name: String,
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Message = mongoose.model("Message", MessageSchema);

export default Message;
