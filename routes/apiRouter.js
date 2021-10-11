const express = require('express');
const router = express.Router();
const fs = require('fs');
var notes = require('../db/db.json');

// Get notes
router.get('/notes', (req, res) => {
    return res.json(notes);
});

// Create new note
router.post('/notes', (req, res) => {
    let newNote = req.body;
    // console.log(req.body);
    
    // give every note a unique id that will always be different
    newNote["id"] = Date.now();            
    
    notes.push(newNote);

    writeNotes();

    return res.status(200).end();
});

// delete note at specified id
router.delete('/notes/:id', (req, res) => {
    res.send('DELETE request at /api/notes/:id')
    console.log(req.params);
    for (i=0; i<notes.length; i++){
        console.log(notes[i].id);
    }
    notes.splice(req.params, 1);
    writeNotes();
});


const writeNotes = () => {
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
        if (err) {
            console.log('Error')
            return console.log(err);
        };
        console.log('Success!!!');
    });
};

module.exports = router;