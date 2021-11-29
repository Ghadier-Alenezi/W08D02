const userModel = require("./../../db/models/user");

const register = (req, res) => {
  const { email, passowrd, role } = req.body;
  const newUser = new userModel({
    email,
    passowrd,
    role,
  });
  newUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const login = (req, res) => {
  const { email, passowrd } = req.body;
  userModel
    .findOne({ email })
    .then((result) => {
      //   console.log(result);
      if (result) {
        if (email == result.email) {
          if (passowrd == result.passowrd) {
            res.status(200).json(result);
          } else {
            res.status(400).send("invalid email or password");
          }
        } else {
          res.status(400).send("invalid email or password");
        }
      } else {
        res.status(404).json("this email not exist!");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {register,login };