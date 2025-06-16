import { Router } from "express";
import { createUser } from "../Controller/userController.js";

const userRouter = Router();

userRouter.route("/create").post(createUser);

export default userRouter;
