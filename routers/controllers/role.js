const roleModel = require("./../../db/models/role");

const newRole = (req, res) => {
  const { role, Permissions } = req.body;
  const newRole = new roleModel({
    role,
    Permissions,
  });
  newRole
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const roles = (req, res) => {
  roleModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { newRole, roles };
