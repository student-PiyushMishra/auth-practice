import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    dp: {
        type: String,
        required:false
    }
}, {timestamps:true})

const users = mongoose.model('User',userSchema)

export default users