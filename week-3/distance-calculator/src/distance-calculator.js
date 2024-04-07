//Leah Harris
//04-04-2024
//distance-calculator.js
//Function to calculate the distances between planets in AU

function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
  const planetDistances = {
    sun: 0.0,
    mercury: 0.39,
    venus: 0.72,
    earth: 1.0,
    mars: 1.52,
    jupiter: 5.2,
    saturn: 9.58,
    uranus: 19.22,
    neptune: 30.05
  }
  //finding the difference between 2 planets
  let finalDistance = (planetDistances[planet1] - planetDistances[planet2]);
  //showing positive absolute value
  const result = Math.abs(finalDistance);

  return result;
}


module.exports = calculateDistance;