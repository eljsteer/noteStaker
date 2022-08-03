const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require("uuid")
const readFileFun = util.promisify(fs.readFile);
const writeFileFun = util.promisify(fs.writeFile);

// Class for notes containing the various functions needed in the express API request calls
class Notes {
  read() {
    return readFileFun("db/db.json", "utf-8");
  };
  write(note) {
    return writeFileFun("db/db.json", JSON.stringify(note))
  };
  getNotes() {
    return this.read().then((notes) => {
      let tempNotes
      try {
        tempNotes = [].concat(JSON.parse(notes));
      } catch (error) {
        tempNotes = [];
      }
      return tempNotes;
    })
  };
  addNotes(note) {
    const { title, text } = note
    const newNote = { 
      title, 
      text, 
      id:uuidv4()
    };
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((newNote) => this.write(newNote))
      .then(() => newNote);
  };

};

module.exports = new Notes;