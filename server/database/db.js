import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const Connection = ()=>{
    const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)

    mongoose.connect(DB).then(()=>{ console.log("DataBase connection successfull!")})
}

export default Connection