import express from "express";
import authorsController from "../controller/authorController.js";

const router = express
  .Router()
  .get("/authors", authorsController.getAllAuthors)
  .get("/authors/:id", authorsController.getAuthorById)
  .post("/authors", authorsController.authorCreate);

export default router;
