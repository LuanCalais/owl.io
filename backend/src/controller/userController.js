import users from "../models/User.js";

class userController {
  static getAllUsers = (req, res) => {
    users.find((err, user) => {
      if (!err) {
        res.status(200).json(user);
      } else {
        res.status(400).send({ message: ` - Users not found` });
      }
    });
  };

  static userCreate = (req, res) => {
    let user = new users(req.body);
    user.save((err) => {
      if (err) {
        res.status(500).send({ message: ` - New user create` });
      } else {
        res.status(201).send(user.toJSON);
      }
    });
  };
}

export default userController;
