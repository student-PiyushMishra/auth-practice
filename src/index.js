import express from "express";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = process.env.PORT;

console.log(port)

app.listen(port, ()=>{
    console.log(`Server is up and listening on PORT: ${port}`);
})