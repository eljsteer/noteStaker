const noteData = require("./db/db.json");
const notes = require("notes")

apiRouter.use("/notes", notes);

apiRouter.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

apiRouter.get("*"), (req, res) => {
  res.sendFile(path.join(__dirname,"public/index.html")); 
};

apiRouter.post("/api/notes", (req, res) => {
  res.json(noteData)
  writeToFile(destination, noteData);
});

// apiRouter.delete("/api/notes", (req, res) => {
//   res.json(noteData)
//   writeToFile(destination, noteData);
// });

module.exports = apiRouter