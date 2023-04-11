const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const bcrypt = require("bcrypt");
const path = require('path')


const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const { register } = require("./controller/auth");

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());



app.post("/auth/register", register);

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});


mongoose.set("strictQuery", false);


mongoose.connect('mongodb+srv://social:social@cluster0.by9sszx.mongodb.net/social?retryWrites=true&w=majority').then(() =>
  app.listen(5000, () => {
    console.log("connected");
  })
).catch((error)=>console.log(error));
