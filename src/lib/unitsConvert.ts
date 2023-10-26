// helper functions to convert between metric and imperial for weight/height units

// returns [feet,inches]
export const getImperialHeightFromMetric = (cm: number): [number, number] => {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.ceil(totalInches % 12);
  return [feet, inches];
};

// returns cm
export const getMetricHeightFromImperial = (
  feet: number,
  inches: number,
): number => {
  const totalInches = feet * 12 + inches;
  const cm = Math.round(totalInches * 2.54);
  return cm;
};

// converts the number value into either metric or imperial
// depending on the original unit passed in
export const convertWeight = (
  value: number,
  unit: "metric" | "imperial",
): number => {
  let result = value;
  if (unit === "metric") {
    result *= 2.20462;
  } else if (unit === "imperial") {
    result *= 0.453592;
  }
  return Math.round(result);
};
