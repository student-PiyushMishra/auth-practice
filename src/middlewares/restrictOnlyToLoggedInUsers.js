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
        if(states.has(uuid)){
            console.log("The user is logged in")
            return next()
        }
        else{
            console.log("The user is not logged in")
            return res.redirect('/out')
        }
    }
}

export default restrictUsers
