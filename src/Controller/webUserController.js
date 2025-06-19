import bcrypt from "bcryptjs";
import { webUser } from "../Model/modol";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail";

export const register = async (req, res, next) => {
  try {
    let data = req.body;
    let password = data.password;

    let hashedPassword = await bcrypt.hash(password, 10);

    data = {
      ...data,
      password: hashedPassword,
      isVerifiedEmail: false,
      role: "user",
    };

    let result = await webUser.create(data);

    //generate token

    let infoObj = {
      _id: result._id,
    };

    let secretKey = "n9solution";

    let expiryInfo = {
      expiresIn: "1h",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    await sendEmail({
      to: data.email,
      Subject: "Account registrition",
      html: `


      <h1> Your account has been registered successfully </h1>

      <p>Click this link to verify your email </p>

      <a href="http://locolhost:3000/webuser/verify-email?token=${token}">http://locolhost:3000/webuser/verify-email?token=${token}</a>


      `,
    });

    res.status(201).json({
      success: true,
      message: "Web user Registered successfully",
      result: result,
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
