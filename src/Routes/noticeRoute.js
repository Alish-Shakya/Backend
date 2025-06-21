import { Router } from "express";
import {
  allNotice,
  createNotice,
  deleteNotice,
  singleNotice,
  updateNotice,
} from "../Controller/noticeController.js";

const noticeRouter = Router();

noticeRouter.route("/noticeCreated").post(createNotice);
noticeRouter.route("/allNotice").get(allNotice);

noticeRouter.route("/singleNotice/:id").get(singleNotice);
noticeRouter.route("/updateNotice/:id").patch(updateNotice);
noticeRouter.route("/deleteNotice/:id").delete(deleteNotice);

export default noticeRouter;
