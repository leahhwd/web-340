"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

//For promises:
const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    // TODO: Set up your mocks here
    jest.spyOn(fs, 'readFile').mockImplementation(() => Promise.resolve(["warrior", "male", "fast"]));
    jest.spyOn(fs, 'writeFile').mockImplementation(() => Promise.resolve());
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  test("writes data to a file", async ()=> {
    await expect(createCharacter(["mage", "female", "scary"])).resolves.toBeUndefined();
  });

  // 2. Test that getCharacters reads characters from the file
  test("data can be read from a file", async() => {
    const character = await getCharacters();
    expect(character).toEqual(["warrior", "male", "fast"]);
  });
  // 3. Test that createCharacter handles errors when writing to the file
  test("handles errors when reading from the file", async ()=> {
    fs.readFile.mockImplementationOnce(() => Promise.reject(new Error("File not found")));
    await expect(getCharacters()). rejects.toThrow("File not found");
  });
});