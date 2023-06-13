const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const studentDb = require("./data/students");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("data", path.join(__dirname, "data"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/students", (req, res) => {
  res.render("students-page", { students: studentDb.getStudents() });
});

app.get("/students/:id", (req, res) => {
  res.render("student-page", { student: studentDb.getStudent(req.params.id) });
});

app.listen(port, function () {
  console.log("listening on port 3000");
});
