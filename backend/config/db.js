import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
         await mongoose.connect(`${process.env.MONGO_URI}`)
    //    mongoose.connection.on('connected', () => console.log('DB is connected'))
       console.log('DB is connected')

    }catch(err){
        console.error(err.message)

    }
}