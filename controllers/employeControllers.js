const Employe =require("../models/Employe")


const createEmpolye=async(req,res)=>{
    try{
       
        const {name,email,phone,city}=req.body

        const employe=new Employe({
            name,email,phone,city
        })

        await employe.save()
        res.status(201).json(employe)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"server error"})
    }
}


const getEmploye=async(req,res)=>{
    try {
        
        const employe=await Employe.find()
        res.status(200).json(employe)

    } catch (error) {
        console.error(" there is an error:",error)
        res.status(500).json({message:"server error"})
        
    }
}

const singleEmploye=async (req,res)=>{
    try {

        const employe=await Employe.findById(req.params.id)
        if (!employe){
            return res.status(404).json({massage:"employe Not Found"})
        }
        res.status(200).json(employe)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server Error"})
    }
}

module.exports={createEmpolye,getEmploye,singleEmploye}