import books from "../models/Books.js";

class booksController {
  static getAllBooks = (req, res) => {
    books.find((err, book) => {
      if (!err) {
        res.status(200).json(book);
      } else {
        res.status(400).send({ message: `${err.message} - Books no found` });
      }
    });
  };

  static getBookById = (req, res) => {
    const id = req.params.id;

    books.findById(id, (err, book) => {
      if (!err) {
        res.status(200).json(book);
      } else {
        res.status(400).send({ message: `${err.message} - Book not found` });
      }
    });
  };

  static bookCreate = (req, res) => {
    let book = new books(req.body);
    book.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - New book create fail` });
      } else {
        res.status(201).send(book.toJSON());
      }
    });
  };

  static bookUpdate = (req, res) => {
    const id = req.params.id;
    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: ` - Update book success` });
      } else {
        res.status(500).send({ message: `${err.message} - Update book error` });
      }
    });
  };

  static bookDelete = (req, res) => {
    const id = req.params.id;
    books.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: ` - Book delete success` });
      } else {
        res.status(200).send({ message: ` - Book delete error` });
      }
    });
  };
}

export default booksController;
