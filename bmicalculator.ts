const calculateBmi = (height: number, weight: number) => {
  const meters: number = height / 100;
  const bmi: number = weight / Math.pow(meters, 2);
  if (bmi < 18.5) {
    return "Underweight";
  }

  if (bmi > 24.9) {
    return "Overweight";
  }

  if (bmi < 24.9 && bmi > 18.5) {
    return "Normal (healthy weight)";
  }
};

const bmiArr = process.argv.slice(2);
const height = parseFloat(bmiArr[0]);
const weight = parseFloat(bmiArr[1]);

console.log(calculateBmi(height, weight));
