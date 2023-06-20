const notesRouter = require("express").Router()
const { readFromFile, readAndAppend, writeToFile} = require("../utilities/utils")
const { v4: uuidv4 } = require('uuid');



notesRouter.get('/', (req, res) => {
    console.info(`${req.method} request for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

notesRouter.post('/', (req, res) => {
    console.info(`${req.method} request to add note`)
    const {title, text} = req.body
    if (req.body) {const newNote = {
        title,
        text,
        id: uuidv4()
    }
    readAndAppend(newNote, './db/db.json');
    res.json(`Note successfully added`)
}})

module.exports = notesRouter