import express from "express";
import userRouter from "./src/Routes/userRouter.js";
import connectDB from "./src/ConnectDB/connectDB.js";
import teacherRouter from "./src/Routes/teacherRoute.js";
import studentRouter from "./src/Routes/studentRoute.js";
import courseRouter from "./src/Routes/courseRoute.js";

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/user", userRouter);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);
app.use("/course", courseRouter);
