import { Router } from "express";
import createFeedback from "../Controller/feedbackController.js";

export const feedbackRouter = Router();

feedbackRouter.route("/feedbackCreated").post(createFeedback);
