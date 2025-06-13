import express from 'express'
import { addBook, deleteBook, getBook, getBookById, updateBook } from '../controllers/BookController.js'

const BookRouter=express.Router()

BookRouter.post('/add',addBook)
BookRouter.get('/get',getBook)
BookRouter.get('/get/:id',getBookById)
BookRouter.put('/update/:id',updateBook)
BookRouter.delete('/delete/:id',deleteBook)
export default BookRouter;