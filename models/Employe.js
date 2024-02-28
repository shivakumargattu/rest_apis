const mongoose =require("mongoose")

const employeSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        
    },
    city:{
        type:String,
       
    }
})

module.exports=mongoose.model("Employe",employeSchema)