const mongoose=require("mongoose")

const studentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    father:{type:String,required:true},
    rollnumber:{type:String,required:true}
})

const Student=mongoose.model("student",studentSchema)

module.exports = Student