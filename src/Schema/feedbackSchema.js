import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  suggestion: {
    type: String,
    required: true,
  },
  givenBy: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

export default feedbackSchema;
