import teacherSchema from "../Schema/teacherSchema.js";
import userSchema from "../Schema/userSchema.js";
import mongoose from "mongoose";

export const User = mongoose.model("User", userSchema);

export const Teacher = mongoose.model("Teacher", teacherSchema);
