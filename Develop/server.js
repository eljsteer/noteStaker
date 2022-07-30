const express = require("express");
const path = require("path");
const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");
const api = require("./public/assets/js/index");

// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const app = express();

const PORT = process.env.PORT || 3005
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/api", apiRouter);
app.use("/public", htmlRouter);

// app.delete("/api/notes/:id", (req, res) => )

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🔥`)
);

// need to create HTML routes file
// need to create API routes file
// need to create 2 APIs for saving and retrieving notes.
// APIs are for the data that gets created by user and saved to JSON file