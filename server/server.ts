import dotenv from "dotenv";
dotenv.config();
import connectDB from './utils/db';
import cloudinary from 'cloudinary'
import { app } from "./app";

//cloudinary config
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,

})

//create server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    connectDB();
});