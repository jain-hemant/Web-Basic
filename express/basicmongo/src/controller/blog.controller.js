const Blog = require("../model/blog.model")

const addBlog = async(req, res)=>{
    const {title, content, user} = req.body
    try{
        let newBlog  = await Blog.create({title, content, user})
        res.send(newBlog)
    }catch(e){
       res.status(401).send(e.message)
    }
}


const getBlogs = async(req, res)=>{
    try{
        let blogs  = await Blog.find({}).populate("user", "name email")
        res.send(blogs)
    }catch(e){
       res.status(401).send(e.message)
    }
}


module.exports ={addBlog, getBlogs}