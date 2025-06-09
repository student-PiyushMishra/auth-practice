function restrictUsers(req,res,next){
    const isLoggedIn = req.cookie?.uuid;
    if(!isLoggedIn){
        return res.redirect("/out")
    }
    next()
}

export default restrictUsers