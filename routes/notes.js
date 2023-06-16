const notesRouter = require("express").Router()
const { readFromFile, readAndAppend, writeToFile} = require("../utilities/utils")


notesRouter.get('/', (req, res) => {
    console.info(`${req.method} request for notes`);
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)))
})

