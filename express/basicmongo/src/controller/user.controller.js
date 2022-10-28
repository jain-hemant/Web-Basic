const User = require("../model/user.model");


const addUser = async(req, res)=>{
    const {name, email, password} = req.body
    try{
        let newUser  = await User.create({name, email, password})
        res.send(newUser)
    }catch(e){
       res.status(401).send(e.message)
    }
}

 const getUser = async(req, res)=>{
 
    try{
        let users  = await User.find({})
        res.send(users)
    }catch(e){
       res.status(401).send(e.message)
    }
}


module.exports ={addUser, getUser}