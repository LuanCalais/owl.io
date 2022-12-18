import books from "../models/Books.js";

class booksController {
  static getAllBooks = (req, res) => {
    books.find((err, book) => {
      res.status(200).json(book);
    });
  };

  static bookCreate = (req, res) => {
    let book = new books(req.body);
    book.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - New book create fail` });
      } else {
        res.status(201).send(book.toJSON());
      }
    });
  };

}

export default booksController
