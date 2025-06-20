import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  readSingleEvent,
  realAllEvent,
  updateEvent,
} from "../Controller/eventController.js";

const eventRouter = Router();

eventRouter.route("/createEvent").post(createEvent);
eventRouter.route("/allEvent").get(realAllEvent);

eventRouter.route("/singleUser/:id").get(readSingleEvent);
eventRouter.route("/updateEvent/:id").patch(updateEvent);
eventRouter.route("/deleteEvent/:id").delete(deleteEvent);
