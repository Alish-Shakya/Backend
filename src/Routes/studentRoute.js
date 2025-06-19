import { Router } from "express";
import {
  createStudent,
  readAllStudent,
} from "../Controller/studentController.js";

const studentRouter = Router();

studentRouter.route("/createStudent").post(createStudent);
studentRouter.route("/getAllStudent").get(readAllStudent);
export default studentRouter;
