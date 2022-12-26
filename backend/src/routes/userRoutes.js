import express from "express";
import userController from "../controller/userController.js";

const router = express
  .Router()
  .get("/users", userController.getAllUsers)
  .post("/users", userController.userCreate);

export default router;
