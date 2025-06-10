import states from "../states.js"

function restrictUsers(req,res,next){
    const uuid = req.cookies?.uid;
    console.log('states',states)
    console.log('uid',uuid)
    if(!uuid){
        console.log("The user is not logged in")
        return res.redirect("/out")
    }
    if(uuid){
        console.log(uuid)
        console.log(states)
        console.log("The user is logged in")
        return next()
    }
}

export default restrictUsers
