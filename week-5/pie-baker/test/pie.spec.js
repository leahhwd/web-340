/**
 * Author: Leah Harris
 * Date: 04-20-24
 * File Name: pie.spec.js
 * Description: TDD testing file using jest
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here

test("successful message with essential ingredients", () => {
  //Set actual parameters of test
  let ingredients = ["flour", "sugar", "butter"];
  let pie = "blueberry";
  //compare results to expected
  expect(bakePie(pie, ingredients)).toBe("Pie baked successfully");
})

test("successful message with essential and non-essential ingredients", () =>{
  //Set actual parameters of test
  let ingredients = ["flour", "sugar", "butter", "milk", "eggs", "pumpkin"];
  let pie = "pumpkin";
  //compare results to expected
  expect(bakePie(pie, ingredients)).toBe("Pie baked successfully");
})

test("process exit missing essential ingredients", () => {
  //set actual parameters of test
  let ingredients = ["suger", "butter", "eggs", "lemon"];
  let pie = "lemon";
  //track process.exit method
  let mockExit = jest.spyOn(process, 'exit').mockImplementation(() =>{});
  //call function
  bakePie(pie, ingredients);
  //check for parameter
  expect(mockExit).toHaveBeenCalledWith(1);
  //restore original implementation with mockRestore
  mockExit.mockRestore();

})