import { Router } from "express";
import {
  createCourse,
  readAllCourse,
  singleCourse,
  updateCourse,
} from "../Controller/courseController.js";

const courseRouter = Router();

courseRouter.route("/createCourse").post(createCourse);
courseRouter.route("/allCourse").get(readAllCourse);

courseRouter.route("/singleCourse/:id").get(singleCourse);
courseRouter.route("/updateCourse/:id").patch(updateCourse);
export default courseRouter;
