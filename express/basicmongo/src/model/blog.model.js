const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title:{type:String, required:true},
    content:{type:String, required:true},
    user:{type:mongoose.Schema.Types.ObjectId, ref:"user"}
})


const Blog = mongoose.model("blog", blogSchema)
module.exports = Blog