import express from "express";
import authorsController from "../controller/authorController.js";

const router = express
  .Router()
  .get("/authors", authorsController.getAllAuthors)
  .post("/authos/:id", authorsController.authorCreate);

export default router;
