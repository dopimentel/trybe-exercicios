const bmi = (weightInKg, heightInCm) => weightInKg / ((heightInCm/100) ** 2);
console.log(bmi(64, 173));
module.exports = bmi;
