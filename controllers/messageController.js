import Feedback from "../model/Feedback.js";

const getMessages = async (req, res) => {
  const messages = await Feedback.find({});
  res.status(200).json(messages);
};

const createMessage = async (req, res) => {
  try {
    const { email, message } = req.body;

    const feedback = new Feedback({
      message,
      email,
    });

    const savedFeedback = await feedback.save();
    res.status(201).json(savedFeedback);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getMessages,
  createMessage,
};
