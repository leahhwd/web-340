/**
 * Author: Leah Harris
 * Date: 04/13/2024
 * File Name: superhero.js
 * Description: Methods for the SuperheroEmitter class
 */

const EventEmitter = require("events");

// TODO: Create a SuperheroEmitter class that extends EventEmitter and implements the following methods: performAction, encounterDanger, and helpSomeone
class SuperheroEmitter extends EventEmitter {

  performAction(action) {
     this.emit("action", action);
  }

  encounterDanger(danger) {
    this.emit("danger", danger);
  }

  helpSomeone(person) {
    this.emit("help", person);
  }
}
//export module
module.exports = SuperheroEmitter;