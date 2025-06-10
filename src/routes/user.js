import express from "express"
import loginUser from "../controllers/loginUser.js"
import createUser from "../controllers/createUser.js"

const route = express.Router()

route.get("/",(req,res)=>{
    res.redirect("/login")
})

route.get("/login",(req,res)=>{
    res.render('login')
})

route.post("/signup",(req,res)=>{
    if(!req.body) return res.send(`Bad Request! Go <a href="/user/signup">back</a>.`)
    if(!req.body.fullName) return res.send(`Bad Request! Go <a href="/user/signup">back</a>.`)
    if(!req.body.email) return res.send(`Bad Request! Go <a href="/user/signup">back</a>.`)
    if(!req.body.password) return res.send(`Bad Request! Go <a href="/user/signup">back</a>.z`)
    createUser(req.body)
    res.redirect('/')
})

route.post("/login",(req,res)=>{
    loginUser(req=req,res=res)
})

route.get('/signup',(req,res)=>{
    res.render('signup')
})

export default route
