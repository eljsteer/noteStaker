const express = require("express");
const apiRouter = express.Router();
// const notes = require("/notes");
const noteData = require("./db/db.json");

apiRouter.use("/notes", notes);

apiRouter.get('/notes', (req, res) => {
  console.log.json(noteData);
  res.send(noteData);
});

// apiRouter.get("*"), (req, res) => {
//   res.sendFile(path.join(__dirname,"public/index.html")); 
// }; --> Do we need this??

apiRouter.post("/notes", (req, res) => {
  res.json(noteData)
  writeToFile(destination, noteData);
});

// apiRouter.delete("/api/notes", (req, res) => {
//   res.json(noteData)
//   writeToFile(destination, noteData);
// });

module.exports = apiRouter