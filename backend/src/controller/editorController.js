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

  static editorUpdate = (req, res) => {
    const id = req.params.id;

    editors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: `- Update editor success` });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Update editor error` });
      }
    });
  };

  static editorDelete = (req, res) => {
    const id = req.params.id;

    editors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: ` - Delete editor` });
      } else {
        res.status(500).send({ message: ` - Delete editor error` });
      }
    });
  };
}

export default editorsController;
