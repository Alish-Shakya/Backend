import { Router } from "express";
import { createCourse } from "../Controller/courseController.js";

const courseRouter = Router();

courseRouter.route("/createCourse").post(createCourse);

export default courseRouter;
