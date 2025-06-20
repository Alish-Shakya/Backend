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

export const realAllEvent = async (req, res, next) => {
  try {
    let result = await Event.find({});
    res.status(200).json({
      success: true,
      message: "all events are retrived",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readSingleEvent = async (req, res, next) => {
  try {
    let result = await Event.findById(req.prams.id);
    res.status(200).json({
      success: true,
      message: "single event retrived",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: result,
    });
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    let result = await Event.findByIdAndUpdate(req.param.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "event updated",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    let result = await Event.findByIdAndDelete(req.body);
    res.status(200).json({
      success: true,
      message: "event deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
