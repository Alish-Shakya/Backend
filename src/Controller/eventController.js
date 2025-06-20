import { Event } from "../Model/modol.js";

export const createEvent = async (req, res, next) => {
  try {
    let result = await Event.create(req.body);
    res.status(201).json({
      success: true,
      message: "event created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
