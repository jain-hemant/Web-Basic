const Student = require("../model/student.model")

const addStudent = async(req,res)=>{
    const {name,father,rollnumber} = req.body
    try {
        let newStudent= await Student.create({name, father, rollnumber})
        res.send(newStudent)
    } catch (e) {
        res.Status(400).send(e.message)
    }
}

const getStudent=async(req,res)=>{
    try {
        let student= await Student.find({})
        res.send(student)
        
    } catch (e) {
        res.status(401).send(e.message)
    }
}

module.exports={addStudent,getStudent}