import { Router } from "express";
import { createStudent } from "../Controller/studentController.js";

const studentRouter = Router();

studentRouter.route("/studentRoute").post(createStudent);

export default studentRouter;
