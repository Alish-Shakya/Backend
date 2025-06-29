import bcrypt from "bcryptjs";
import { webUser } from "../Model/modol.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail.js";
import { secretKey } from "../utils/constant.js";

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

export const verifyEmail = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    //id, iat, exp
    let user = await jwt.verify(token, "n9solution");

    let result = await webUser.findByIdAndUpdate(
      user._id,
      { isVerifiedEmail: true },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "message verified true",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const Login = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    let user = await webUser.findOne({ email: email });

    if (!user) {
      throw new Error("User not found");
    }

    if (!user.isVerifiedEmail) {
      throw new Error("Email not verified");
    }

    let isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid Credentials");
    }

    let infoObj = {
      _id: user._id,
    };

    let expiryInfo = {
      expiresIn: "365d",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    res.status(200).json({
      success: true,
      message: "web user login successfully",
      result: user,
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const myProfile = async (req, res, next) => {
  try {
    let id = req._id;
    let result = await webUser.findById(id);
    res.status(200).json({
      success: true,
      message: "webuser profile read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    let id = req._id;
    let data = req.body;
    delete data.email;
    delete data.password;

    let result = await webUser.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({
      success: true,
      message: "webuser profil updated",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updatePassword = async (req, res, next) => {
  try {
    let id = req._id;
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;

    let user = await webUser.findById(id);

    let hashedPassword = user.password;

    let isValidPassword = await bcrypt.compare(oldPassword, hashedPassword);

    if (isValidPassword) {
      let newHashedPassword = await bcrypt.hash(newPassword, 10);

      let result = await webUser.findByIdAndUpdate(
        id,
        { password: newHashedPassword },
        { new: true }
      );

      res.status(200).json({
        success: true,
        messsage: "password changed successfully",
        result: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const forgotPassword = async (req, res, next) => {
  try {
    let email = req.body.email;

    let user = await webUser.findOne({ email: email });

    if (user) {
      let infoObj = {
        _id: user._id,
      };
      let expiryInfo = {
        expiresIn: "1h",
      };

      let token = await jwt.sign(infoObj, secretKey, expiryInfo);

      await sendEmail({
        to: user.email,
        subject: "Reset Password",
        html: `
        <h1> Password Reset</h1>
        <p> Click this link to reset your password </p>
        <a href="http://localhost:3000/webuser/reset-password?token=${token}">
        http://localhost:3000/webuser/reset-password?token=${token}
       </a>

        `,
      });

      res.status(200).json({
        success: true,
        message: "Password link has been sent to your email",
        result: user,
      });
    } else {
      console.log("User not found");
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    let password = req.body.password;
    let hashedPasswod = await bcrypt.hash(password, 10);
    let result = await webUser.findByIdAndUpdate(
      req._id,
      { password: hashedPasswod },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "password reset successfuly",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllWeb = async (req, res, next) => {
  try {
    let result = await webUser.find({});
    res.status(200).json({
      success: true,
      message: "all user readed",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const singleWeb = async (req, res, next) => {
  try {
    let result = await webUser.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "single web user retrived",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateWeb = async (req, res, next) => {
  try {
    let result = await webUser.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "updated user ",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteWeb = async (req, res, next) => {
  try {
    let result = await webUser.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "deleted user ",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
