import users from "../db/models/user.js"

async function createUser(userData){
    const user = await users.create({...userData})
    return user;
}

export default createUser