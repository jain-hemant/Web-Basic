const express=require("express")
const dotenv=require("dotenv")
const  dbconnect  = require("./src/config/dbconnect")
const { addUser, getUser } = require("./src/controller/user.controller")
const { addBlog, getBlogs } = require("./src/controller/blog.controller")

dotenv.config()
const port = process.env.PORT || 8080
const app= express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("My first express")
})

app.post("/users/addUser", addUser)

app.get("/users/getusers", getUser)

app.post("/blogs/addblog", addBlog)

app.get("/blogs/getblog", getBlogs)


app.listen(port,async()=>{
   await dbconnect()
   console.log(`Connect on http://localhost:${port}`)
})