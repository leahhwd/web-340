/**
 * Author: Leah Harris
 * Date: 03/21/2024
 * File Name: Weight Converter
 * Description: Script to convert pounds to kilograms
*/


"use strict";


function main() {
  if (process.argv.length !=3){
    console.error("stderr: 'Usage: node weight-converter.js<pounds>'");
    process.exit(1);
  }
  if (isNaN(process.argv[2])){
    console.error("stderr: 'Input must be a number'");
    process.exit(1);
  }

    const pounds = process.argv[2];
    const result = pounds * 0.453592;

    const kilograms = result.toFixed(2);

    console.log(kilograms);

}

main();
