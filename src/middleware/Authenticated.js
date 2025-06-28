import jwt from "jsonwebtoken";
import { secretKey } from "../utils/constant.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    // console.log(tokenString);

    let tokenArray = tokenString.split(" ");
    console.log(tokenArray);

    let token = tokenArray[1];

    let user = await jwt.verify(token, secretKey);

    req._id = user._id;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "token not valid",
    });
  }
};
