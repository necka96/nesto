const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const { Izreke } = require("../models/izreke")
// get quote
router.get("/api/izreke", (req, res)=>{
 Izreke.find({}, (error, data)=>{
  if(!error){
 
   res.send(data[Math.floor(Math.random() * data.length)])
  }else{
   console.log(error);
  }
 })
})
// save quote

router.post("/api/izreke/add", (req,res)=>{
 const izreke = new Izreke({
   author: req.body.author,
   quote: req.body.quote
 })
 izreke.save((error, data)=>{
  res.status(200).json({code : 200, message: "izreka je uspesno dodata", addIzreke: data})
 })
})
// get single quote

router.get("/api/izreke/:id", (req,res)=>{
 Izreke.findById(req.params.id, (error, data)=>{
  if(!error){
   res.send(data)
  }else{
   console.log(error);
  }
 })
})
// update single quote
router.put("/api/izreke/edit/:id", (req, res)=>{
 const iz ={
  author: req.body.author,
  quote: req.body.quote
 }
 Izreke.findByIdAndUpdate(req.params.id, { $set: iz}, {new: true}, (error, data)=>{
  if(!error){
   res.status(200).json({code: 200, message: "izreka apdejtovana", apdejujIzreku: data})
  }else{
   console.log(error);
  }
 })
})
router.delete("/api/izreke/:id", (req,res)=>{
 Izreke.findByIdAndRemove(req.params.id, (error, data)=>{
  if(!error){
   res.status(200).json({code: 200, message: "Izreka izbrisana uspesno", izbrisanaIzreka: data})
  }else{
   console.log(error);
  }
 })
})


module.exports = router