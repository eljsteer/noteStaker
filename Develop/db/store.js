const fs = require("fs");
const util = require("util");
const notesData = require("./db.json");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


// Promise version of fs.readFile
const readFromFile = () => {
  return readFileAsync(notesData, 'utf8');
};

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => {
    if (err) {
      console.error(err)
    } else { console.info(`\nData written to ${destination}`)
  }});


const readAndAppend = (content, file) => {
  fs.readFile(notesData, 'utf8', (err, notes) => {
    
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(notes);
      parsedData.push(content);
      fs.writeFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };