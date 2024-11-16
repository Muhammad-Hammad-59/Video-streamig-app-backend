import mongoose from "mongoose";

import dotenv from 'dotenv';

import connectdb from "./db/index.js";

dotenv.config({
    path: './env'
})


connectdb()




/*
import { DB_NAME } from "./constants";
import express from 'express'

const app=express();


( async ()=>{
    try {

       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on('error',(error)=>{
        console.log("Error:",error)
        throw error;
       })

       app.listen(process.env.PORT,()=>{
        console.log(`app is listening on Port no: ${process.env.PORT}`)
       })
        
    } catch (error) {
        console.log("Error:",error)
        throw error
        
    }
})()

*/