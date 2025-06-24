import { Router } from "express";
import {
  Login,
  myProfile,
  register,
  updateProfile,
  verifyEmail,
} from "../Controller/webUserController.js";
import { isAuthenticated } from "../middleware/Authenticated.js";

const webUserRouter = Router();

webUserRouter.route("/register").post(register);

webUserRouter.route("/verifyEmail").post(verifyEmail);
webUserRouter.route("/login").post(Login);

webUserRouter.route("/profile").get(isAuthenticated, myProfile);
webUserRouter.route("/update-profile").patch(isAuthenticated, updateProfile);
export default webUserRouter;
