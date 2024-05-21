//The Body Mass Index (BMI) is a measure that uses a person's weight and height to gauge whether they have a healthy body weight for a given height. The formula for calculating BMI is:
//BMI = weight/(Height * Height);
// //BMI Categories:
// Underweight: BMI less than 18.5
// Normal weight: BMI between 18.5 and 24.9
// Overweight: BMI between 25 and 29.9
// Obesity: BMI 30 or greater

//From above details keep in mind, developing a BMI Calculator.

console.log(chalk.bgYellow.blueBright(`   BMI CALCULATOR  `));

import inquirer from "inquirer";
import chalk from "chalk";

let ans = await inquirer.prompt([
  {
    name: "weight",
    type: "input",
    message: "Enter Your Weight In Kg !",
  },
  {
    name: "Height",
    type: "input",
    message: "Enter Your Height In Metre !",
  },
]);

let BMI = ans.weight / (ans.Height * ans.Height);

console.log(chalk.bgGreen.magentaBright(`Your BMI is ${BMI.toFixed(2)}`)); //call a function

if (BMI < 18.5) {
  //Underweight: BMI less than 18.5
  console.log(
    chalk.bgGreen.magentaBright(
      `your BMI Is ${BMI.toFixed(2)} and you are Underweight.`
    )
  );
} else if (BMI >= 18.5 && BMI <= 24.9) {
  // Normal weight: BMI between 18.5 and 24.9
  console.log(
    chalk.bgGreen.magentaBright(
      `your BMI Is ${BMI.toFixed(2)} and you are Normal.`
    )
  );
} else if (BMI >= 25 && BMI <= 29.9) {
  //Overweight: BMI between 25 and 29.9
  console.log(
    chalk.bgGreen.magentaBright(
      `your BMI Is ${BMI.toFixed(2)} and you are Overweight.`
    )
  );
} else {
  console.log(
    chalk.bgGreen.magentaBright(
      `your BMI Is ${BMI.toFixed(2)} and you have Obesity.`
    )
  );
}
//For Output:
//Assume values for check BMI Scenerios as:

// Normal weight:
// Weight: 70 kg
// Height: 1.75 meters

// Underweight:
// Weight: 50 kg
// Height: 1.8 meters

// Overweight:
// Weight: 85 kg
// Height: 1.7 meters

// Obesity:
// Weight: 100 kg
// Height: 1.65 meters

//Author-Huma MOhsin
