import mongoose from "mongoose";

const feeSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
});

export default feeSchema;
