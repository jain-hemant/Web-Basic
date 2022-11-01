const mongoose = require("mongoose")
const dotenv =  require("dotenv")

dotenv.config()

const dbConnetction = ()=>{
    return  mongoose.connect(process.env.DBURL)
}

module.exports =  dbConnetction;