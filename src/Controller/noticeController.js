import { Notice } from "../Model/modol.js";

export const createNotice = async (req, res, next) => {
  try {
    let result = await Notice.create(req.body);
    res.status(200).json({
      success: true,
      message: "student created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: erroe.message,
    });
  }
};

export const allNotice = async (req, res, next) => {
  try {
    let result = await Notice.find({});
    res.status(200).json({
      success: true,
      message: "notice read",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const singleNotice = async (req, res, next) => {
  try {
    let result = await Notice.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "single notice read",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
};

export const updateNotice = async (req, res, next) => {
  try {
    let result = await Notice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "updated successfully",
      data: result,
    });
  } catch {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteNotice = async (req, res, next) => {
  try {
    let result = await Notice.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "deleted successfully",
      data: result,
    });
  } catch {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
