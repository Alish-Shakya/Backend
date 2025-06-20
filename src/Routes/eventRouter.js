import { Router } from "express";
import {
  createEvent,
  readSingleEvent,
  realAllEvent,
  realAllUser,
} from "../Controller/eventController.js";

const eventRouter = Router();

eventRouter.route("/createEvent").post(createEvent);
eventRouter.route("/allEvent").get(realAllEvent);

eventRouter.route("/singleUser/:id").get(readSingleEvent);
