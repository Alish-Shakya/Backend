import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    let user = await jwt.verify(token, "n9solution");

    req._id = user._id;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "token not valid",
    });
  }
};
