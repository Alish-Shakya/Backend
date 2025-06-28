import { Feedback } from "../Model/modol.js";

export const createFeedback = async (req, res, next) => {
  try {
    let result = await Feedback.create(req.body);
    res.status(201).json({
      success: true,
      message: "feedback created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
