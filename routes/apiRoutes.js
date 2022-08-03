const fs = require("fs");
const router = require("express").Router();
const { getNotes, write } = require("../db/store");
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
    const noteId = noteDb.findIndex(n => n.id === (req.params.id))
    console.log("noteId", noteId);
    if(noteId === -1) return res.status(404).send("Cannot find note with that id");
  
    // delete Note
    noteDb.splice(noteId,1);
    write(noteDb)
    res.send("Note Successfully deleted");  
  }
  
);

module.exports = router
