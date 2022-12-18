import express from "express";
import booksController from '../controller/booksController.js'

const router = express.Router()

router 
.get('/books', booksController.getAllBooks)
.post('/books', booksController.bookCreate)

export default router
