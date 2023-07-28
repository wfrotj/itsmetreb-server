import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({
  message: String,
  email: String,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
