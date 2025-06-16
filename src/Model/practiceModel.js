import mongoose from "mongoose";
import userSchema from "../Schema/userSchema";

export const Practice = mongoose.model("Practice", userSchema);
