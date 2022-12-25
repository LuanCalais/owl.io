import editors from "../models/Editor.js";

class editorsController {
  static getAllEditors = (req, res) => {
    editors.find((err, editor) => {
      if (!err) {
        res.status(200).json(editor);
      } else {
        res.status(400).send({ message: `${err.message} - Editors not found` });
      }
    });
  };

  static getEditorById = (req, res) => {
    const id = req.params.id;
    editors.findById(id, (err, editor) => {
      if (!err) {
        res.status(200).json(editor);
      } else {
        res.status(400).send({ message: `${err.message} - Editor not found` });
      }
    });
  };

  static editorCreate = (req, res) => {
    let editor = new editors(req.body);
    editor.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - New editor create` });
      } else {
        res.status(201).send(editor.toJSON());
      }
    });
  };

  

}

export default editorsController;
