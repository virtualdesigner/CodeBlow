const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const db = require("./config/keys").mongoURI;

const posts = require("./routes/api/posts");
const qa = require("./routes/api/qa");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/api/posts", posts);
app.use("/api/qa", qa);

// test
app.get("/", (req, res) => {
  res.json({ msg: "Hey there!" });
});

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
