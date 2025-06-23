import { Router } from "express";
import {
  createFee,
  deleteFee,
  singleFee,
  updateFee,
} from "../Controller/feeController.js";

const feeRouter = Router();

feeRouter.route("/createFee").post(createFee);
feeRouter.route("/seeFees/:id").get(singleFee);
feeRouter.route("/feeUpdate/:id").patch(updateFee);
feeRouter.route("/deleteFee/:id").delete(deleteFee);

export default feeRouter;
