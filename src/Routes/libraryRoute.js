import { Router } from "express";
import { allBooks, createLibrary } from "../Controller/libraryController.js";

const libraryRouter = Router();

libraryRouter.route("/createLibrary").post(createLibrary);
libraryRouter.route("/readBook").get(allBooks);

export default libraryRouter;
