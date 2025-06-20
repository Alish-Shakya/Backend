import studentSchema from "../Schema/studentSchema.js";
import teacherSchema from "../Schema/teacherSchema.js";
import userSchema from "../Schema/userSchema.js";
import mongoose from "mongoose";
import webUserSchema from "../Schema/webUserSchema.js";
import courseSchema from "../Schema/courseSchema.js";
import subjectSchema from "../Schema/subjectSchema.js";
import eventSchema from "../Schema/eventSchema.js";

export const User = mongoose.model("User", userSchema);

export const Teacher = mongoose.model("Teacher", teacherSchema);

export const Student = mongoose.model("Student", studentSchema);

export const webUser = mongoose.model("webUser", webUserSchema);

export const Course = mongoose.model("Course", courseSchema);

export const Subject = mongoose.model("Subject", subjectSchema);

export const Event = mongoose.model("Event", eventSchema);
