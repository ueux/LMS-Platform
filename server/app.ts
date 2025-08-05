import express, { NextFunction, Request, Response } from "express"
import "dotenv/config"
import cookieParser from "cookie-parser"
import cors from "cors"
import { ErrorMiddleware } from "./middleware/error"
import userRouter from "./routes/user.route"
export const app = express()

app.use(express.json({ limit: "50mb" }))
app.use(cookieParser())
app.use(cors({ origin: process.env.ORIGIN }))

app.use("/api/v1",userRouter)

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({success:true,message:"Api is working"})
})




app.use(ErrorMiddleware)