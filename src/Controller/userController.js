import { User } from "../Model/modol.js";

export const createUser = async (req, res, next) => {
  try {
    //Frontend always request
    //Backend always response
    let result = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: "user created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllUser = async (req, res, next) => {
  try {
    let result = await User.find({});
    res.status(200).json({
      success: true,
      message: "All User retrived successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readSingle = async (req, res, next) => {
  try {
    let result = await User.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Single user retrieved successfuly",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res, next) => {
  try {
    let result = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "User Updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    let result = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "user data deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
};
