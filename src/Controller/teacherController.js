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
