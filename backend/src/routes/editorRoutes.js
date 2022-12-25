import express from "express";
import editorsController from "../controller/editorController.js";

const router = express
  .Router()
  .get("/editors", editorsController.getAllEditors)
  .get("/editors/:id", editorsController.getEditorById)
  .post("/editors", editorsController.editorCreate)
  .put("/editors/:id", editorsController.editorUpdate);

export default router;
