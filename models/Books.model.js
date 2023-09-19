const mongoose = require("mongoose")
const BookSchema = mongoose.Schema({
     title:{type:String,unique:true},
     author:{type:String,required:true},
     description:{type:String,required:true},
     genre:{type:String,required:true},
     price:{type:String,required:true},
     createdAt : {
          type:Date,
          default:Date.now
     }
})

const BooksModel =mongoose.model("Book",BookSchema)

module.exports =BooksModel