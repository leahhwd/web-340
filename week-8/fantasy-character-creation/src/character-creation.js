"use strict";

const { writeFile } = require('fs');

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:
/*
const fs = require('fs');

function createCharacter(character, callback) {
  // TODO: Implement this function
}

function getCharacters(callback) {
  // TODO: Implement this function
}
*/

// For promises:

const fs = require('fs').promises;
const {readFile} = require("fs").promises;
const {join} = require("path");
const file = join(__dirname, "character-creation.js");

async function createCharacter(character) {
  // TODO: Implement this function
  try {
    const data = character.join("\n");
    await fs.writeFile(data);
  } catch (err) {
    throw err;
  }

}

async function getCharacters() {
  // TODO: Implement this function
  try {
    const data = await readFile(file, "utf-8");
    return(data);
  } catch (err){
    throw err;
  }
}


// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
 module.exports = { createCharacter, getCharacters }; // For promises