import { Library } from "../Model/modol.js";

export const createLibrary = async (req, res, next) => {
  try {
    let result = await Library.create(req.body);
    res.status(200).json({
      success: true,
      message: "library created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const allBooks = async (req, res, next) => {
  try {
    let result = await Library.find({});
    res.status(200).json({
      success: true,
      message: "these are the all books",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
};

export const singleBook = async (req, res, next) => {
  try {
    let result = await Library.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "single book retri",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
