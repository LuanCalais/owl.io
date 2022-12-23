import express from "express";
import booksController from "../controller/booksController.js";

const router = express
  .Router()
  .get("/books", booksController.getAllBooks)
  .get("/books/search", booksController.getBooksByAuthor)
  .get("/books/:id", booksController.getBookById)
  .post("/books", booksController.bookCreate)
  .put("/books/:id", booksController.bookUpdate)
  .delete("/books/:id", booksController.bookDelete);

export default router;
