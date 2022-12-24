import mongoose from "mongoose";

const editorSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const editors = mongoose.model("editor", editorSchema);

export default editors;
