import { Student } from "../Model/modol.js";

export const createStudent = async (req, res, next) => {
  try {
    let result = await Student.create(req.body);
    res.status(200).json({
      success: true,
      message: "student created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllStudent = async (req, res, next) => {
  try {
    let result = await Student.find({});
    res.status(200).json({
      success: true,
      message: "all student retrived successfully",
      data: result,
    });
  } catch (error) {
    req.status(400)({
      success: false,
      message: error.message,
    });
  }
};

export const readSingleStudent = async (req, res, next) => {
  try {
    let result = await Student.findById(req.params.id);
    res.status(400).json({
      success: true,
      message: "single student retrived",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updataStudent = async (req, res, next) => {
  try {
    let result = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "student updated",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteStudent = async (req, res, next) => {
  try {
    let result = await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "student deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
