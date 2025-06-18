import { Router } from "express";
import { createTeacher } from "../Controller/teacherController.js";

const teacherRouter = Router();
teacherRouter.route("/createTeacher").post(createTeacher);

export default teacherRouter;
