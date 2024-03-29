/**
 * Author: Leah Harris
 * Date: 03-29-24
 * File Name: recipes.js
 * Description: file containing createRecipe, setTimer and quit functions
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // TODO: Implement this function
  const newIngredients = ingredients.join(', ');
  return `Recipe created with ingredients: ${newIngredients}`;
}



// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  const timeLeft = minutes;
  return `Timer set for ${timeLeft} minutes`;
}

// Define the quit function
function quit() {
  // TODO: Implement this function
  return "Program exited";
}

// TODO: Export the functions

module.exports = {
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit: quit
};