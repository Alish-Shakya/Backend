import { Router } from "express";
import {
  createStudent,
  readAllStudent,
  readSingleStudent,
} from "../Controller/studentController.js";

const studentRouter = Router();

studentRouter.route("/createStudent").post(createStudent);
studentRouter.route("/getAllStudent").get(readAllStudent);

studentRouter.route("/singleStudent/:id").get(readSingleStudent);
export default studentRouter;
