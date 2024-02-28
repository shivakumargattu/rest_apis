const express =require("express");
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const employeRoutes=require("./routes/employeRoutes")


const app =express();

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://gshiva0018:gshiva0018@cluster0.rnm60yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("dB Is connected"))
.catch((e)=>console.log(e))



app.use("/employe",employeRoutes)

app.listen(5000, ()=>{
    console.log("server is responding")
})