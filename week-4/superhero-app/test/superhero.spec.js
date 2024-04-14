/**
 * Author: Leah Harris
 * Date: 04/13/2024
 * File Name: superhero.spec.js
 * Description: test functions for Superhero class
 */
"use strict";

const assert = require("assert");
const SuperheroEmitter = require("../src/superhero");

const superhero = new SuperheroEmitter();

// TODO: Write tests for the SuperheroEmitter using TDD principles
function testPerformAction() {
  try{
    //Event listener for action command
    superhero.on("action", (action) => {
     assert.strictEqual(action, "fly");
    })
    //Call performAction method
    superhero.performAction("fly");
    console.log("Passed testPerformAction");
    return true;

  } catch(err) {
    //Error message
    console.error(`Failed testPerformAction: ${err}`);
    return false;
  }
}

function testEncounterDanger() {
  try{
    //Event listener for danger command
    superhero.on("danger", (danger)=>{
      assert.strictEqual(danger, "fire");
    })
    //Call encounterDanger method
    superhero.encounterDanger("fire");
    console.log("Passed testEncounterDanger");
    return true;

  } catch(err) {
    //Error message
    console.error(`Failed testEncounterDanger: ${err}`);
    return false;
  }
}

function testHelpSomeone() {
  try{
    //Event listener for help command
    superhero.on("help", (person)=>{
      assert.strictEqual(person, "Mary Jane");
    })
    //Call helpSomeone method
    superhero.helpSomeone("Mary Jane");
    console.log("Passed testHelpSomeone");
    return true;

  } catch(err) {
    //error message
    console.error(`Failed testHelpSomeone: ${err}`);
    return false;
  }
}
//Calling test functions
testPerformAction();

testEncounterDanger();

testHelpSomeone();