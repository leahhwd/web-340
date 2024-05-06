const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this.queue = [];

  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    const character = chunk.toString().trim();
    if(!character) {
      callback(new Error("Invalid data"));
      return;
    }
    const [characterClass, gender, funfact] = character.split(",");
    this.queue.push(`class: ${characterClass}\n gender: ${gender}\n funfact: ${funfact}`);
    callback();
  }

  _read(size) {
    // TODO: Implement your _read method here
  if(this.queue.length) {
    this.push(this.queue.shift());
  } else{
    this.push(null);
  }
  }
}

module.exports = CharacterCreator;