import mongoose from "mongoose"

async function connectToDB(URI){
mongoose.connect(URI).then(()=>{console.log("MongoDB connected.")}).catch((e)=>{console.error("MongoDB connection error:",e)})
}

export default connectToDB