import { Teacher } from "../Model/modol.js";

export const createTeacher = async (req, res, next) => {
  try {
    let result = await Teacher.create(req.body);
    res.status(200).json({
      success: true,
      mesage: "teacher create successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllTeacher = async (req, res, next) => {
  try {
    let result = await Teacher.find({});
    res.status(200).json({
      success: true,
      message: "All teacher retrived successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readSingleTeacher = async (req, res, next) => {
  try {
    let result = await Teacher.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "single teacher data retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTeacher = async (req, res, next) => {
  try {
    let result = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "teacher Id updated",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


