import express from "express";
import editorsController from "../controller/editorController.js";

const router = express
  .Router()
  .get("/editors", editorsController.getAllEditors)
  .post("/editors", editorsController.editorCreate);

export default router;
