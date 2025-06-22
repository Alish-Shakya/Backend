import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect("mongodb://localhost:27017/backend");

  console.log("Database Connected successfully");
};
export default connectDB;
