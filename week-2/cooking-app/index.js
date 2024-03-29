/**
 * Author: Leah Harris
 * Date: 03-28-24
 * File Name: index.js
 * Description: CLI program with imported functions
*/

// TODO: Import your module using require
const{createRecipe, setTimer, quit} = require("./recipes");

// TODO: Implement your CLI program here

function main(){
  //Creating array of ingredients
  const ingredients = ['ingredient1', 'ingredient2'];
  //Calling createRecipe function
  console.log(createRecipe(ingredients));
  //Calling setTimer function
  console.log(setTimer(15));
  //Calling the quit function
  quit();
}
//Calling the main function
main();

