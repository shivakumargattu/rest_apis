const express =require("express");
const router =express.Router()
const emploeControllers=require("../controllers/employeControllers")
const Employe=require("../models/Employe")

//   methonds

router.post("/add-emp",emploeControllers.createEmpolye)
router.get("/allempol",emploeControllers.getEmploye)
router.get("/:id",emploeControllers.singleEmploye)

module.exports=router