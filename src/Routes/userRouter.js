import { Router } from "express";
import {
  createUser,
  deleteUser,
  readAllUser,
  readSingle,
  updateUser,
} from "../Controller/userController.js";

const userRouter = Router();

// normal route
userRouter.route("/create").post(createUser);
userRouter.route("/get-all").get(readAllUser);

// dymanic rout: dymanic route always placed at last
userRouter.route("/single/:id").get(readSingle);
userRouter.route("/update/:id").patch(updateUser);
userRouter.route("/delete/:id").delete(deleteUser);

export default userRouter;
