const express = require("express")
const BooksRouter = express.Router()
const BooksModel = require("../models/Books.model")

//Add Books
BooksRouter.post("/add",async(req,res)=>{
    const payload = req.body
    try {
        const Book = new BooksModel(payload)
        await Book.save()
        res.status(200).send({"msg":"The book has been successfully added to the catalog"})
    } catch (error) {
    res.status(401).send({"msg":error.message})
    }
})

//fetch All Books 
BooksRouter.get("/",async(req,res)=>{
   try {
    const Books = await BooksModel.find()
     res.status(200).send({Books})
   } catch (error) {
    res.status(401).send({"msg":error.message})
   }
})

///Delete Book Data 
BooksRouter.delete("/delete/:_id",async(req,res)=>{
    const _id = req.params._id
    try {
        const DeletedUser=await BooksModel.findByIdAndDelete(_id)
     res.status(200).send({"msg":`The book has been deleted successfully.`})
        
    } catch (error) {
    res.status(401).send({"msg":error.message})
        
    }
})

///Update Book data 
BooksRouter.put("/edit/:_id",async(req,res)=>{
    const _id = req.params._id
    try {
       await BooksModel.findByIdAndUpdate(_id,req.body)
        
     res.status(200).send({"msg":`The book has been Edited successfully.`})
        
    } catch (error) {
    res.status(401).send({"msg":error.message})
        
    }
})

module.exports =BooksRouter




