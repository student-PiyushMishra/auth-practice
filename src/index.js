import express from "express";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path";
import __dirname from "../staticFiles.js";
import staticRoutes from "./routes/staticRoute.js";
import userRoutes from "./routes/user.js"
import db from "./db/connection.js"
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.set('view engine', "ejs");
app.use(express.static(path.join(__dirname,"public")))
db(process.env.MONGODB_URI)

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use("/",staticRoutes)
app.use('/user',userRoutes)

app.listen(port, ()=>{
    console.log(`Server is up and listening on PORT: ${port}`);
})