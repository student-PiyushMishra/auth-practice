import users from "../db/models/user.js"
import { v4 as uuidv4 } from 'uuid';
import states from "../states.js"

async function loginUser(req,res){
    const userDetails = req.body
    const user = await users.findOne({...userDetails})
    if(user){
        const uid = uuidv4()
	    res.cookie("uid",uid)	
        states.set(uid,user._id)
        return res.send("valid user! we are trying to get you logged in")
    }
    else{
        return res.send(`Bad request! Go <a href="/user/login">back</a>.`)
    }
}

export default loginUser
