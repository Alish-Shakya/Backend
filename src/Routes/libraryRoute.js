import { Router } from "express";
import {
  allBooks,
  createLibrary,
  singleBook,
} from "../Controller/libraryController.js";

const libraryRouter = Router();

libraryRouter.route("/createLibrary").post(createLibrary);
libraryRouter.route("/readBook").get(allBooks);

libraryRouter.route("/singleBook/:id").get(singleBook);
export default libraryRouter;
