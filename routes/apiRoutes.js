const fs = require("fs");
const router = require("express").Router();
const { getNotes } = require("../db/store");
const newNote = require("../db/store");
const noteDb = require("../db/db.json")

router.get("/notes", (req, res) => {
  newNote.getNotes().then((notes) => {
    return res.json(notes);
  }).catch((err) => res.status(404).json(err));
});

router.post("/notes", (req, res) => {
  newNote.addNotes(req.body).then((notes) => {
    return res.json(notes);
  }).catch((err) => res.status(404).json(err));
});

router.delete("/notes/:id", (req, res) => {
    const noteId = noteDb.find(n => n.id === (req.params.id))
    console.log(noteId);
    if(!noteId) return res.status(404).send("Cannot find note with that id");
  
    // delete Note
    const index = noteDb.findIndex(note);
    note.splice(index,1);
    return fs.writeFileSync("../db/db.json", JSON.stringify(db));  
  }

  
);

module.exports = router
