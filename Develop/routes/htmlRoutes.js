const express = require("express");
const htmlRouter = express.Router();

htmlRouter.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'notes.html')),
);

htmlRouter.get("*"), (req, res) => {
  res.sendFile(path.join(__dirname,"index.html")); 
};

module.exports = htmlRouter