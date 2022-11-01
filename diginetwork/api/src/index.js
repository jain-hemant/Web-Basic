// import express, cors, dotenv
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const dbConnetction  =  require("./config/dbconfig")
const User = require("./model/user.model")
dotenv.config()


// create an express instance 
const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Server Started Successfully")
})



app.post("/login", async(req, res)=>{
    // let email = req.body.email;
    // let password = req.body.password;
    let {email, password} =  req.body

    if(!email||!password){
        return  res.status(401).send({error:"Invalid creadintials"})
    }
    try{


        let existUser =  await User.findOne({email:email})

        if(!existUser){
            return  res.status(401).send({error:"User Not Registered, Signup first"})
        }

        if(email===existUser.email && password===existUser.password){
            return res.status(200).send({message:"Login Success"})
        }else{
            return  res.status(401).send({error:"Invalid creadintials"})
        }

    }catch(e){
       return  res.status(401).send(e.message)
    }

    res.send({email, password})
})


app.listen(process.env.PORT||8080, ()=>{
    dbConnetction()
    console.log(`server started on http://localhost:${process.env.PORT||8080}`)
})

