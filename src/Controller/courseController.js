import { Course } from "../Model/modol.js";

export const createCourse = async (req, res, next) => {
  try {
    let result = await Course(req.body);
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
