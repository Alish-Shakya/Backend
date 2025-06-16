import mongoose from "mongoose";
import practiceSchema from "../Schema/practiceSchema.js";

export const Practice = mongoose.model("Practice", practiceSchema);
