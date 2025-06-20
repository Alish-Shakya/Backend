import { Router } from "express";
import {
  createSubject,
  deleteSubject,
  singleSubject,
  updateSubject,
} from "../Controller/subjectController.js";

const subjectRouter = Router();

subjectRouter.route("/createSubject").post(createSubject);

subjectRouter.route("/singleSubject/:id").get(singleSubject);
subjectRouter.route("/updateSubject/:id").patch(updateSubject);
subjectRouter.route("/deleteSubject/:id").delete(deleteSubject);

export default subjectRouter;
