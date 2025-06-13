import Book from "../models/bookModel.js"

export const addBook=async(req,res)=>{
    try {
        if(!req.body.title||!req.body.author||!req.body.publishYear){
            return res.json({success:true,message:'complete all fields'})
        }
        const newBook={title:req.body.title,author:req.body.author,publishYear:req.body.publishYear}
        const book=await Book.create(newBook)//await tells that "Wait here until the book is saved in the database before moving on to the next line."
        return res.json({success:true,book})
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
}

export const getBook=async(req,res)=>{
    try{
        const books=await Book.find({})
        return res.json({success:true,
            count:books.length,
            data:books
        })
    }catch(error){
        console.log(error.message)
        res.json({success:false,message:error.message})
    

    }
}

export const getBookById=async(req,res)=>{
    try {
        
        const {id}=req.params
        const book=await Book.findById(id)
        return res.json({success:true,
            count:book.length,
            data:book
        })
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
}

export const updateBook=async(req,res)=>{
    try {
        if(!req.body.title||!req.body.author||!req.body.publishYear){
            return res.json({success:false,message:'Send all required fields'})
        }

        const{id}=req.params
        const result=await Book.findByIdAndUpdate(id,req.body)
        if(!result){
            return res.json({success:false,message:'Book not found'})
        }
         return res.json({success:true,message:'Book updated successfully'})

    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
        
    }
}

export const deleteBook=async(req,res)=>{
    try {

        const {id}=req.params
        const result=await Book.findByIdAndDelete(id)
        if(!result){
            return res.json({success:false,message:'Book not found'})
        }
        return res.json({success:true,message:'Book deleted successfully'})
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
        
    }
}