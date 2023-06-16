const express = require("express")
const path = require("path")
const api = require("./routes/index.js")
const exp = require("constants")
const PORT = process.env.port || 3001
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use("/api", api)

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./public/index.hmtl")))
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "./public/notes.hmtl")))
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "./public/index.hmtl")))

app.listen(PORT, () =>  console.log(`App listening at http://localhost:${PORT}`))
