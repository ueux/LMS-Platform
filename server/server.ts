import dotenv from "dotenv";
import { app } from "./app";
import connectDB from "./utils/db";
dotenv.config();


app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port: http://localhost:${process.env.PORT}`);
    connectDB()
});
