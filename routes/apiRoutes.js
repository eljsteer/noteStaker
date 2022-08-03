const fs = require("fs");
const router = require("express").Router();
const { getNotes, write, read} = require("../db/store");
const newNote = require("../db/store");
const noteDb = require("../db/db.json")

// Function to Get notes from db.json database
router.get("/notes", (req, res) => {
  newNote.getNotes().then((notes) => {
    return res.json(notes);
  }).catch((err) => res.status(404).json(err));
});

// Function to Post notes to db.json database
router.post("/notes", (req, res) => {
  newNote.addNotes(req.body).then((notes) => {
    return res.json(notes);
  }).catch((err) => res.status(404).json(err));
});

 // Function to Delete Notes from db.json database
router.delete("/notes/:id", (req, res) => {
read()
.then((data) => {
    const noteArray = JSON.parse(data).filter((note) => {
      return note.id !== req.params.id
    });
    write(noteArray);
    res.send("Note Successfully deleted"); 
  }
)});

module.exports = router
