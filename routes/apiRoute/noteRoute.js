const router = require('express').Router();
const { createNotesFile, deleteNotesFile } = require('../../lib/notes.js');
let { notesData } = require('../../db/db.json');

// notes that will be available in json

router.get('/notes', (req, res) => {
  let results = notesData;
  res.json(results);
});

// parameters for the routes

router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  notesData = await deleteNotesFile(id, notesData);
  res.json(notesData);
});

router.post('/notes', (req, res) => {
  // sets id for the index of the array that will be created

  if(notesData){
  req.body.id = notesData.length.toString();
  } else 
  {req.body.id = 0}
  res.json(createNotesFile(req.body, notesData));
});


module.exports = router;