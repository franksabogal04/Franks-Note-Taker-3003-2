const fs = require('fs');
const path = require('path');

function createNotesFile(body, notesData) {
  const note = body;
  notesData.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notesData }, null, 2)
  );
  return note;
}

   // this deletes the notes that were created

function deleteNotesFile(id, notes) {
  let notesData = notes.filter(el => {
    if (el.id == id) {
      return false
    } else {
      return true
    }
  })

  // re-index 

  let index = 0;
  notesData.forEach(note => {
    note.id = index;
    index += 1;
  });

  //write to file

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notesData }, null, 2)
  );
  return notesData;

}

module.exports = {
  createNotesFile,
  deleteNotesFile
};