import express from "express";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path"
import __dirname from "../staticFiles.js"
import staticRoutes from "./routes/staticRoute.js"

dotenv.config();
const app = express();
const port = process.env.PORT;

app.set('view engine', "ejs");
app.use(express.static(path.join(__dirname,"public")))

app.use("/",staticRoutes)

app.listen(port, ()=>{
    console.log(`Server is up and listening on PORT: ${port}`);
})