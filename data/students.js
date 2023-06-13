const crypto = require("crypto");

const students = [
  { name: "Mark", id: crypto.randomUUID() },
  { name: "Anish", id: crypto.randomUUID() },
  { name: "Joseph", id: crypto.randomUUID() },
  { name: "Bryan", id: crypto.randomUUID() },
  { name: "Nic", id: crypto.randomUUID() },
  { name: "Wilson", id: crypto.randomUUID() },
  { name: "David", id: crypto.randomUUID() },
  { name: "Josh", id: crypto.randomUUID() },
];

exports.getStudent = function (id) {
  return students.find((student) => student.id === id);
};

exports.getStudents = function () {
  return students;
};
