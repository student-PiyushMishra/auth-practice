import express from "express"

const route = express.Router()

route.get("/",(req,res)=>{
    res.render("home")
})

export default route