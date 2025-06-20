import { Router } from "express";
import { createCourse, readAllCourse } from "../Controller/courseController.js";

const courseRouter = Router();

courseRouter.route("/createCourse").post(createCourse);
courseRouter.route("/allCourse").get(readAllCourse);

export default courseRouter;
