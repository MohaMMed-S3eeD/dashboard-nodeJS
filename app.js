const express = require("express");
const app = express();
const Link_DB = require("./pass");
const port = 3001;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const User = require("./models/customerSchema");
app.set("view engine", "ejs");
app.use(express.static("public"));
var moment = require('moment'); // require
var methodOverride = require('method-override')
app.use(methodOverride('_method'))



// Auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// GET Requst
app.get("/", (req, res) => {
  // result ==> array of objects

  User.find()
    .then((result) => {
      res.render("index", { users: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/user/add.html", (req, res) => {
  res.render("user/add");
});



app.get("/:id/edit.html", (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((result) => {
      console.log("********************************")
      console.log(result)
      res.render("user/edit", { user: result, moment: moment });
      // res.render("user/view", { user: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((result) => {
      console.log("********************************")
      console.log(result)
      res.render("user/view", { user: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
  // res.render("user/view");
});
// POST Requst
app.post("/user/add.html", (req, res) => {

  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.redirect("/user/add.html");
    })
    .catch((err) => {
      console.log(err);
    });
});

// DELETE Requst
app.delete("/edit/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});
// PUT Requst
app.put("/edit/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate
    (id, req.body)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
}
);
mongoose
  .connect(Link_DB)
  .then(() => {
    console.clear();
    console.log("\n\n✅ Connected to the database successfully! 🚀\n\n");
    app.listen(port, () => {
      console.log(`🚀 Server is running on: 🌍 http://localhost:${port} (Listening on port ${port})`);
    });
  })
  .catch((err) => {
    console.log("Error in DB 💥💥💥💥  ", err);
  });
