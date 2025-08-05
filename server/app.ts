require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import orderRouter from "./routes/order.route";
import notificationRoute from "./routes/notification.route";
import analyticsRoute from "./routes/analytics.route";
import layoutRouter from "./routes/layout.route";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
const swaggerDocument = JSON.parse(
  fs.readFileSync(path.join(__dirname, "swagger-output.json"), "utf-8")
);
// body parser
app.use(express.json({ limit: "50mb" }));

//cookie parser
app.use(cookieParser());

//cors => Cross Origin Resource Sharing
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.get("/docs-json", (req, res) => {
    res.json(swaggerDocument)
})

//routes
app.use("/api/v1", userRouter,courseRouter,orderRouter,notificationRoute,analyticsRoute,layoutRouter);

//tetsing api
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

app.use(ErrorMiddleware);
