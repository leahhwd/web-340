/**
 * Author: Leah Harris
 * Date: 03/21/2024
 * File Name: Weight Converter
 * Description: Script to convert pounds to kilograms
*/


"use strict";

//main function
function main() {
  //checking for an argument
  if (process.argv.length !=3){
    //error messsage
    console.error("stderr: 'Usage: node weight-converter.js<pounds>'");
    process.exit(1);
  }
  //checking the value of the argument
  if (isNaN(process.argv[2])){
    //error message for anything but a number
    console.error("stderr: 'Input must be a number'");
    process.exit(1);
  }
    //conversion from pounds to kilograms
    const pounds = process.argv[2];
    const result = pounds * 0.453592;
    //fixing to round to 2 decimal places
    const kilograms = result.toFixed(2);

    console.log(kilograms);

}
//call main function
main();
