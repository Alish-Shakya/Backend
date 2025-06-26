import { Router } from "express";
import {
  allBooks,
  createLibrary,
  deleteLibrary,
  singleBook,
  updataLibrary,
} from "../Controller/libraryController.js";

const libraryRouter = Router();

libraryRouter.route("/createLibrary").post(createLibrary);
libraryRouter.route("/readBook").get(allBooks);

libraryRouter.route("/singleBook/:id").get(singleBook);
libraryRouter.route("/updateBook/:id").get(updataLibrary);
libraryRouter.route("/deleteBook/:id").get(deleteLibrary);

export default libraryRouter;
