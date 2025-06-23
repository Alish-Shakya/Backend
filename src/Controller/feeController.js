import { Fee } from "../Model/modol.js";

export const createFee = async (req, res, next) => {
  try {
    let result = await Fee.create(req.body);
    res.status(200).json({
      success: true,
      message: "fee structure created",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const singleFee = async (req, res, next) => {
  try {
    let result = await Fee.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "fees are readed",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateFee = async (req, res, next) => {
  try {
    let result = await Fee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "fee are updated",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteFee = async (req, res, next) => {
  try {
    let result = await Fee.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "fee deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
