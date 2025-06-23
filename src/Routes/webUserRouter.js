import { Router } from "express";
import { register, verifyEmail } from "../Controller/webUserController.js";

const webUserRouter = Router();

webUserRouter.route("/register").post(register);

webUserRouter.route("/verifyEmail").post(verifyEmail);

export default webUserRouter;
