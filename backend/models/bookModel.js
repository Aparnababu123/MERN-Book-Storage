import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    publishYear:{type:Number,required:true},
},{timestamps:true})

const Book=mongoose.models.book || mongoose.model('book',bookSchema)//This checks if a model named 'book' already exists in Mongoose's internal cache.
                                                                    //or If it does not exist, then create a new model with bookSchema
export default Book;