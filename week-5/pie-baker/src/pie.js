/**
 * Author: Leah Harris
 * Date: 04/20/24
 * File Name: pie.js
 * Description: file containing bakePie function
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Your code here
  //creating array of essential ingredients
  let essentialIngredients = ["flour", "sugar", "butter"];
  //iterating through array
  for (let ingredient of essentialIngredients)
    //checking for essential ingredients within the ingredients array
    if (ingredients.includes(ingredient)) {
      //success message
      console.log(`${pieType} pie baking..`);
      return "Pie baked successfully";
    } else {
      //warning message
      console.log("missing essential ingredient");
      //exit with errors
      process.exit(1);
    }
}

module.exports = { bakePie };