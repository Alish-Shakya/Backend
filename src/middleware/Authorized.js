import { webUser } from "../Model/modol.js";

export const isAuthorized = (roles) => {
  return async (req, res, next) => {
    try {
      let _id = req._id;
      let user = await webUser.findById(_id);

      let tokenRole = user.role;
      if (roles.includes(tokenRole)) {
        next();
      } else {
        res.status(403).json({
          success: false,
          error: "User not authorized",
        });
      }
    } catch (error) {
      res.status(403).json({
        success: false,
        error: error.message,
      });
    }
  };
};
