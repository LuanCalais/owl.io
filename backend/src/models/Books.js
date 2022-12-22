import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true },
  editor: { type: String, required: true },
  numberPages: { type: Number },
});

const books = mongoose.model('books', bookSchema)

export default books
