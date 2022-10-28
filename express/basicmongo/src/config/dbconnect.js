const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()

const dbconnect=async()=>{
    return await mongoose.connect(process.env.DBURL)
}

module.exports=dbconnect