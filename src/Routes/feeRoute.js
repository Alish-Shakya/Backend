import { Router } from "express";
import { feeCreate } from "../Controller/feeController.js";

const feeRouter = Router();

feeRouter.route("/createFee").post(feeCreate);

export default feeRouter;
