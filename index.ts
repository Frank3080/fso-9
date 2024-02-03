import express = require("express");
const app = express();
const calculateBmi = require("./bmicalculator");

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  const heightNumber: number = parseFloat(height as string);
  const weightNumber: number = parseFloat(weight as string);

  const result = calculateBmi(heightNumber, weightNumber);

  res.send({
    weight: weight,
    height: height,
    bmi: result,
  });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
