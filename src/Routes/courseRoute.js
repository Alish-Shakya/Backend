import { Router } from "express";
import {
  createCourse,
  readAllCourse,
  singleCourse,
} from "../Controller/courseController.js";

const courseRouter = Router();

courseRouter.route("/createCourse").post(createCourse);
courseRouter.route("/allCourse").get(readAllCourse);

courseRouter.route("/singleCourse/:id").get(singleCourse);

export default courseRouter;
