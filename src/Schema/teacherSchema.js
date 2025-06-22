import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

export default teacherSchema;
