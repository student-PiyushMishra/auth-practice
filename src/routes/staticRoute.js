import express from "express"
import authVerification from "../middlewares/restrictOnlyToLoggedInUsers.js"

const route = express.Router()


route.get("/",authVerification,(req,res)=>{
    res.render("home")
})

route.get('/out',(req,res)=>{
    res.render('auth')
})

export default route