function calcBmi(weight: number, height: number): void {
  if (weight <= 0) {
    console.log("Weight can not be zero");
    return;
  }
  if (height <= 0) {
    console.log("Height can not be zero");
    return;
  }
  let bmi = weight / (height * height);
  let roundedBmi = Math.round(bmi * 100) / 100;
  console.log(roundedBmi);
  if (roundedBmi <= 18.4) {
    console.log("Under weight");
  } else if (roundedBmi > 18.5 && roundedBmi <= 24.9) {
    console.log("healthy");
  } else if (roundedBmi >= 25 && roundedBmi < 30) {
    console.log("Over weight");
  } else console.log("Obese");
}
calcBmi(55, 1.51);
