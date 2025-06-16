import mongoose from "mongoose";

const practiceSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },

  contact: {
    type: Number,
    required: true,
  },

  education: {
    type: String,
    required: true,
  },

  isMarried: {
    type: Boolean,
  },

  dob: {
    type: Date,
    required: true,
  },
});
