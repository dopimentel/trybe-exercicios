const readline = require('readline-sync');

const handleBMI = (weightInKg, heightInCm) => weightInKg / (heightInCm / 100) ** 2;

const main = () => {
  const weightInKg = readline.questionFloat('What’s your weight?');
  const heightInCm = readline.questionInt('What’s your height?');
  const bmi = handleBMI(weightInKg, heightInCm);
  console.log(`Your BMI is ${bmi}`);
}
main();

