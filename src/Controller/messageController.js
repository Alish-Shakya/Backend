import { Message } from "../Model/modol.js";

export const messageCreated = async (req, res, next) => {
  try {
    let result = await Message.create(req.body);
    res.status(201).json({
      success: true,
      message: "Message created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const singleMessage = async (req, res, next) => {
  try {
    let result = await Message.findById(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "message are readed",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateMessage = async (req, res, next) => {
  try {
    let result = await Message.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "message updated successfully",
      data: true,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteMessage = async (req, res, next) => {
  try {
    let result = await Message.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "deleted message",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
