import express from "express";
import books from "./booksRoutes.js";
import authors from "./authorRoutes.js";
import editors from "./editorRoutes.js";
import users from "./userRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ name: "Owl Io" });
  });

  app.use(express.json(), books, authors, editors, users);
};

export default routes;
