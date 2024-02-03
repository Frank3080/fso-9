interface ResultProps {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExcercises = (
  exerciseHours: number[],
  targetHours: number
): ResultProps => {
  const days = exerciseHours.length;
  const trainedDays = exerciseHours.filter((x) => x > 0).length;
  const avgTime =
    exerciseHours.reduce((sum, current) => sum + current, 0) / days;
  const success = avgTime >= targetHours;

  const targetOneToThree = targetHours / 3;
  let rating = 0;
  if (avgTime < targetOneToThree) {
    rating = 1;
  }
  if (avgTime > targetOneToThree && avgTime < targetOneToThree * 3) {
    rating = 2;
  }
  if (avgTime >= targetOneToThree * 3) {
    rating = 3;
  }

  let ratingDescription = "";
  if ((rating = 1)) {
    ratingDescription = "Bad, keep working";
  }
  if ((rating = 2)) {
    ratingDescription = "Good, but could be better";
  }
  if ((rating = 3)) {
    ratingDescription = "Perfect, keep going like this";
  }
  return {
    periodLength: days,
    trainingDays: trainedDays,
    success: success,
    rating: rating,
    ratingDescription: ratingDescription,
    target: targetHours,
    average: avgTime,
  };
};

module.exports = calculateExcercises;
