import authors from "../models/Author.js";

class authorsController {
  static getAllAuthors = (req, res) => {
    authors.find((err, author) => {
      if (!err) {
        res.status(200).json(author);
      } else {
        res.status(400).send({ message: `${err.message} - Authors not found` });
      }
    });
  };

  static authorCreate = (req, res) => {
    let author = new authors(req.body);
    author.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - New author create fail` });
      } else {
        res.status(201).send(author.toJSON());
      }
    });
  };
}

export default authorsController;
