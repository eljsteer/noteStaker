const express = require("expresss");
const htmlRouter = express.Router();

htmlRouter.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'notes.html')),
  res.send("Successfully sent Notes HTML Page")
);

htmlRouter.get("*"), (req, res) => {
  res.sendFile(path.join(__dirname,"index.html")); 
};

module.exports = htmlRouter