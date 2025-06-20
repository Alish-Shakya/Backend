import { Router } from "express";
import { createEvent } from "../Controller/eventController.js";

const eventRouter = Router();

eventRouter.route("/createEvent").post(createEvent);
