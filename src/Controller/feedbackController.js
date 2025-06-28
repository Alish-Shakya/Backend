import { Feedback } from "../Model/modol.js";

export const createFeedback = async (req, res, next) => {
  try {
    // You could validate req.body here
    let result = await Feedback.create(req.body);
    res.status(201).json({
      success: true,
      message: "Feedback created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const allFeedback = async (req, res, next) => {
  try {
    let result = await Feedback.find({});
    res.status(200).json({
      success: true,
      message: "Read all feedback",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
