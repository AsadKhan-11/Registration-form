const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const userModel = require("./Model/register");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://mrasad10khan:mongodb@cluster0.yz0l1cn.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/users", (req, res) => {
  const { name, email, password } = req.body;

  userModel.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("Already has an account");
    } else {
      userModel
        .create({ name: name, email: email, password: password })
        .then((result) => {
          console.log(result);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

app.listen(8000, () => {
  console.log("server start");
});
