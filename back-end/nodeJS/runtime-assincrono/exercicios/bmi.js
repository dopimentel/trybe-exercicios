const readline = require('readline-sync');

const weightInKg = readline.questionFloat('What’s your weight?');
const heightInCm = readline.questionInt('What’s your height?');

const bmi = (weightInKg, heightInCm) => {
  const result = weightInKg / (heightInCm / 100) ** 2;
  console.log(`Your BMI is ${result}`);
};
bmi(weightInKg, heightInCm);
module.exports = bmi;
