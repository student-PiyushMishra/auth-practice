import users from "../db/models/user.js"

async function loginUser(req,res){
    const userDetails = req.body
    const user = await users.findOne({...userDetails})
    if(user){
        res.send("valid user! we are trying to get you logged in")
    }
    else{
        res.send(`Bad request! Go <a href="/user/login">back</a>.`)
    }
}

export default loginUser