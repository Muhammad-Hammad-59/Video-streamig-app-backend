import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";


const connectdb= async ()=>{
    try {
        const connectionResponce= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionResponce.connection.host} `);
        process.exit(1);
    } catch (error) {
        console.log(`Mongodb connection error:${error}`)
        throw error

    }
}

export default connectdb;