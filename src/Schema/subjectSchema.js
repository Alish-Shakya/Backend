import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  creditHrs: {
    type: Number,
    required: true,
  },
});

export default subjectSchema;
