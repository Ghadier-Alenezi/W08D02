const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./db");

const app = express();
app.use(express.json());
app.use(cors());

const roleModel = require("./db/models/role"); 
app.post("/newRole", (req, res)=>{
    const {role , Permissions}  = req.body;
    const newRole = new roleModel({
        role , Permissions
    })
    newRole.save().then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.send(err);
    })

})

app.get("/roles", (req, res)=>{
    roleModel.find({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send(err);

    })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`SERVER ON ${PORT}`);
});
