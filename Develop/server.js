const express = require("express");
const path = require("path");
const fs = require("fs")
const apiRouter = require("./routes/apiRoutes.js");
const htmlRouter = require("./routes/htmlRoutes.js");

const app = express();

const PORT = process.env.PORT || 3005
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/api", apiRouter);
app.use("/public", htmlRouter);

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🔥`)
);