import { Router } from "express";
import { createStudent } from "../Controller/studentController.js";

const studentRouter = Router();

studentRouter.route("/createStudent").post(createStudent);

export default studentRouter;
