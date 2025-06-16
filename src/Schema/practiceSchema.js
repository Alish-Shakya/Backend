import mongoose from "mongoose";

const practiceSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Class: {
    type: Number,
    required: true,
  },
  DOB: {
    type: Boolean,
    required: true,
  },
});

export default practiceSchema;
