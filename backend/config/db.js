import mongoose from "mongoose";

const connectDB=async()=>{

    try{//“When database connects, show a message. Now go connect to it.”
        mongoose.connection.on('connected',()=>console.log('Database connected'))
        await mongoose.connect(`${process.env.MONGODB_URI}`)

    }catch(error)
    {
        console.error(error.message)

    }
}
export default connectDB;