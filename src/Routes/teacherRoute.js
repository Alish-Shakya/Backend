import { Router } from "express";
import {
  createTeacher,
  readAllTeacher,
  readSingleTeacher,
  updateTeacher,
} from "../Controller/teacherController.js";

const teacherRouter = Router();

teacherRouter.route("/createTeacher").post(createTeacher);
teacherRouter.route("/getAllTeacher").get(readAllTeacher);

teacherRouter.route("/getSingleTeacher/:id").get(readSingleTeacher);
teacherRouter.route("/updateTeacher/:id").patch(updateTeacher);

export default teacherRouter;
