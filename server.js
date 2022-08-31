var express = require("express");
var mongoose = require("mongoose");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

var DB_URL = "mongodb://localhost:27017/user";
mongoose.connect(DB_URL, { useNewUrlParser: true });
var userSchema = mongoose.Schema;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,DELETE,PATCH,OPTIONS"
  );
  next();
});

var usersSchema = new userSchema({
  id: Number,
  userId: Number,
  title: String,
  body: String,
});
var users = mongoose.model("users", usersSchema);
var db = mongoose.connection;
db.on("error", () => {
  console.log("7asal Error");
});
db.once("open", () => {
  console.log("Connected");

  app.get("/", (req, res) => {
    users.find((err, data) => {
      res.send(data);
    });
  });
  app.get("/:id", (req, res) => {
    let id = req.params.id;

    let details = { id: id };

    users.findOne(details, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.send(docs);
      }
    });
  });
  app.post("/", (req, res) => {
    console.log(req.body);
    var newUser = new users(req.body);
    newUser.save();
    res.send(req.body);
  });

  app.delete("/:id", (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    users.findOneAndDelete({ id: id }, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Deleted User : ", docs.id);
      }
    });

    res.send(req.params.id);
  });

  app.patch("/:id", (req, res) => {
    users.updateOne(
      { id: req.body.id },
      { title: req.body.title, body: req.body.body },
      (err, docs) => {}
    );

    res.send(req.body);
  });
});

app.listen(9002, () => {
  console.log("Listining on PORT 9002");
});
