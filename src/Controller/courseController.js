import { Course } from "../Model/modol.js";

export const createCourse = async (req, res, next) => {
  try {
    let result = await Course.create(req.body);
    res.status(200).json({
      success: true,
      message: "Course created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllCourse = async (req, res, next) => {
  try {
    let result = await Course.find({});
    res.status(200).json({
      success: true,
      message: "All courses retrived",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const singleCourse = async (req, res, next) => {
  try {
    let result = await Course.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "one course selected",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCourse = async (req, res, next) => {
  try {
    let result = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "student updatde",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCourse = async (req, res, next) => {
  try {
    let result = await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "course deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
