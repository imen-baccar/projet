const express=require("express");
const product = require("../models/produit");
const productRouter=express.Router();

productRouter.post("/add",async(req,res)=>{
    try {
        let newproduct= new product(req.body)
        let result=await newproduct.save()
        res.send({product:result,msg:"product added successfully"})
    } catch (error) {
        console.log(error)
    }
}
)
productRouter.get("/all",async(req,res)=>{
    try {
        
        let result=await product.find()
        res.send({product:result,msg:" all product"})
    } catch (error) {
        console.log(error)
    }
}
)
productRouter.get("/:id",async(req,res)=>{
    try {
        
        let result=await product.findById({_id:req.params.id})
        res.send({product:result,msg:" product found"})
    } catch (error) {
        console.log(error)
    }
}
)
productRouter.delete("/:id",async(req,res)=>{
    try {
        
        let result=await product.findByIdAndDelete({_id:req.params.id})
        res.send({msg:" product removed"})
    } catch (error) {
        console.log(error)
    }
}
)
productRouter.put("/:id",async(req,res)=>{
    try {
        
        let result=await product.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
        res.send({msg:" product updated"})
    } catch (error) {
        console.log(error)
    }
}
)
module.exports=productRouter
