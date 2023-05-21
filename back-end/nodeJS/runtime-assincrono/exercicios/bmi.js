const readline = require('readline-sync');

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100,
  },
};

const handleBMI = (weightInKg, heightInCm) => weightInKg / (heightInCm / 100) ** 2;

const categoryBMI = (bmi) => {
  const categories = Object.keys(BMI_MAX_AND_MIN);
  const categoryFinded = categories.find((category) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[category]; 
    return bmi >= minBMI && bmi <= maxBMI
  })
  return categoryFinded
}

const main = () => {
  const weightInKg = readline.questionFloat('What’s your weight?');
  const heightInCm = readline.questionInt('What’s your height?');
  const bmi = handleBMI(weightInKg, heightInCm);
  const category = categoryBMI(bmi);
  console.log(`Your BMI is ${bmi}. You are in ${category} category`);
}
main();

