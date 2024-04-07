//Leah Harris
//04-04-2024
//distance-calculator.spec.js
//3 unit tests for the calculateDistance function

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testJupiterToSaturn() {
  // TODO: Implement this function
  try {
    //testing the result of jupiter/saturn to equal 4.38
    assert.strictEqual(calculateDistance('jupiter', 'saturn'), 4.38);
    return true;
  } catch (error){
    //Error message if failed
    console.error('Failed testJupiterToSaturn: Result is incorrect');
    return false;
  }
}

function testNumeric() {
  // TODO: Implement this function
  try {
    //Testing if the result is a number
    const result = calculateDistance('mercury', 'uranus');
    assert.strictEqual(typeof result, 'number');
    return true;
  } catch (error){
    //Error message if failed
    console.error('Failed testNumeric: Result is not a number');
  }
}

function testGreaterThanZero() {
  // TODO: Implement this function
  try {
    //Testing if output is greater than zero
    const result = calculateDistance('mars', 'neptune');
    assert(result > 0);
    return true;
  } catch (error){
    //Error message if failed
    console.error('Failed testGreaterThanZero: Result must be positive');
  }
}

// Call your test functions here
testJupiterToSaturn();

testNumeric();

testGreaterThanZero();

console.log("All tests passed!");