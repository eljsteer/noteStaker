const express = require("express");
const apiRouter = express.Router();
const uuid = require("../helpers/uuid");
// const {readAndAppend, readFromFile } = require("../db/store");

apiRouter.get('/notes', (req, res) => {

  readFromFile().then((err, notes) => {
    if (err) {
      console.log(err);
    } else {
      res.json(JSON.parse(notes));
    }
  })
});

// POST Route for saving Notes
apiRouter.post('/notes', (req, res) => {

    let noteID = uuid("id");
    req.body["id"] = noteID;
    notesData.push(req.body);
    fs.writeFileSync("./db/db.json", JSON.stringify(notesData))
  });

// apiRouter.delete("/api/notes:id", (req, res) => {
// let   
// apiRouter.delete(req.params.id);
// });

module.exports = apiRouter