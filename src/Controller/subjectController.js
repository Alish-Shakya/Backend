import { Subject } from "../Model/modol.js";

export const createSubject = async (req, res, next) => {
  try {
    let result = await Subject.create(req.body);
    res.status(200).json({
      success: true,
      message: "student created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.status,
    });
  }
};

export const singleSubject = async (req, res, next) => {
  try {
    let result = await Subject.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "single subject retrived",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateSubject = async (req, res, next) => {
  try {
    let result = await Subject.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "subject updated",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteSubject = async (req, res, next) => {
  try {
    let result = await Subject.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "subject deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
