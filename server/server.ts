import dotenv from "dotenv";
dotenv.config();
import connectDB from './utils/db';
import cloudinary from 'cloudinary'
import { app } from "./app";

//cloudinary config
cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_SECRET_KEY,

})

//create server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    connectDB();
});