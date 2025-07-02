import { Router } from "express";
import {
  deleteWeb,
  forgotPassword,
  Login,
  myProfile,
  readAllWeb,
  register,
  resetPassword,
  singleWeb,
  updatePassword,
  updateProfile,
  updateWeb,
  verifyEmail,
} from "../Controller/webUserController.js";
import { isAuthenticated } from "../middleware/Authenticated.js";
import { isAuthorized } from "../middleware/Authorized.js";

const webUserRouter = Router();

webUserRouter.route("/register").post(register);

webUserRouter.route("/verifyEmail").post(verifyEmail);

webUserRouter.route("/login").post(Login);

webUserRouter.route("/profile").get(isAuthenticated, myProfile);

webUserRouter.route("/update-profile").patch(isAuthenticated, updateProfile);

webUserRouter.route("/update-password").patch(isAuthenticated, updatePassword);

webUserRouter.route("/forgot-password").post(forgotPassword);

webUserRouter.route("/reset-password").patch(isAuthenticated, resetPassword);

webUserRouter
  .route("/all-webUser")
  .get(isAuthenticated, isAuthorized(["Admin", "SuperAdmin"]), readAllWeb);

webUserRouter
  .route("/single-webuser/:id")
  .get(isAuthenticated, isAuthorized(["Admin"]), singleWeb);

webUserRouter
  .route("/update-web/:id")
  .patch(isAuthenticated, isAuthorized(["Admin"]), updateWeb);

webUserRouter
  .route("/delete-web/:id")
  .delete(isAuthenticated, isAuthorized(["Admin"]), deleteWeb);

export default webUserRouter;
