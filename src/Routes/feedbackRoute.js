import { Router } from "express";
import {
  createFeedback,
  allFeedback,
} from "../Controller/feedbackController.js";

export const feedbackRouter = Router();

feedbackRouter.route("/feedbackCreated").post(createFeedback);
feedbackRouter.route("/allFeedback").get(allFeedback);
