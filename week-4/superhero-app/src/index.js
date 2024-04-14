/**
 * Author: Leah Harris
 * Date: 04/13/24
 * File Name: index.js
 * Description: CLI program for the superhero class
 */

"use strict";

const readline = require("readline");
const SuperheroEmitter = require("./superhero");

const superhero = new SuperheroEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the superhero object
 superhero.on("action", (action)=>{
    console.log(`Superhero performs action: ${action}`);
  })

  superhero.on("danger", (danger)=> {
    console.log(`Superhero encounters: ${danger}`);
  })

  superhero.on("help", (person)=> {
    console.log(`Superhero helps: ${person}`);
  })

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
  if (command == "action"){
    //join() method to return a string from args
    const action = args.join(" ");
    superhero.performAction(action);
  } else if (command == "danger") {
    const danger = args.join(" ");
    superhero.encounterDanger(danger);
  } else if (command == "help") {
    const person = args.join(" ");
    superhero.helpSomeone(person);
  } else {
    //message for input other than "action", "danger", and "help"
    console.log("Invalid input");
  }
  //Close the readline object
  rl.close();

});

console.log(`Enter a command: "action", "danger", or "help", followed by a space and the argument.`);