const express = require("express");
const path = require("path");
const fs = require("fs")
const apiRoutes = require("./routes/apiRoutes")

const app = express();

const PORT = process.env.PORT || 3005
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.use("/api", apiRoutes);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html')),
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html')),
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html')),
);

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🔥`)
);