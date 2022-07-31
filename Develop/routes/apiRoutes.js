const router = require("express").Router();
const newNote = require("../db/store");

router.get("/notes", (req, res) => {
  newNote.getNotes().then((notes) => {
    console.log("here");
    console.log(notes)
    return res.json(notes);
  }).catch((err) => res.status(404).json(err));

});

router.post("/notes", (req, res) => {
  newNote.addNotes(req.body).then((notes) => {
    return res.json(notes);
  }).catch((err) => res.status(404).json(err));

});

router.delete("/notes:id", (req, res) => {
  router.delete(req.params.id);
});

module.exports = router
