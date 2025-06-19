import mongoose from "mongoose";

const webUserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  isMarried: {
    type: Boolean,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
  },
  isVerifiedEmail: {
    type: Boolean,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export default webUserSchema;
