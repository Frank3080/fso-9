import express = require("express");
const calculateBmi = require("./bmicalculator");
const calculateExcercises = require("./exerciseCalculator");

const app = express();
app.use(express.json);

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  const heightNumber = parseFloat(height as string);
  const weightNumber = parseFloat(weight as string);

  if (isNaN(heightNumber) || isNaN(weightNumber)) {
    res.status(400).json({ error: "malformatted parameters" });
  }

  const result = calculateBmi(heightNumber, weightNumber);

  res.send({
    weight: weight,
    height: height,
    bmi: result,
  });
});

app.get("/exercises", (req, res) => {
  const params = req.body;

  const exercises = params.dailyExercises;
  const target = params.target;

  if (!exercises || !target) {
    res.status(400).json({ error: "malformatted parameters" });
  }

  const targetType = typeof target === "number";

  if (!targetType) {
    res.status(400).json({ error: "malformatted parameters" });
  }

  const results = calculateExcercises(exercises, target);

  return res.send(results);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
