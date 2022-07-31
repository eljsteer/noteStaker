const express = require("express");
const path = require("path");
const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");

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