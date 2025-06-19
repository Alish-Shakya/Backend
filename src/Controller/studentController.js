import { Student } from "../Model/modol.js";

export const createStudent = async (req, res, next) => {
  try {
    let result = await Student.Create(req.body);
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
