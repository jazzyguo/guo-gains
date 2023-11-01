import { type UserInformation } from "@prisma/client";
import { type ProgramIntensity } from "../../types";

export const determineProgramIntensity = (
  userInformation: UserInformation,
): ProgramIntensity => {
  const { age, gender, fitnessGoal, currentActivityLevel } = userInformation;

  // Define weight factors for each parameter
  const ageWeight = 0.2;
  const genderWeight = 0.3;
  const fitnessGoalWeight = 0.2;
  const activityLevelWeight = 0.3;

  // Calculate weighted scores for each parameter
  const ageScore = age / 100; // Normalize age to a scale of 0 to 1
  const genderScore = gender === "male" ? 1 : 0; // 1 for male, 0 for female
  const fitnessGoalScore =
    fitnessGoal === "build-muscle"
      ? 1
      : fitnessGoal === "lose-weight"
      ? 0
      : 0.5; // Varies between 0 and 1
  const activityLevelScore =
    currentActivityLevel === "heavy"
      ? 1
      : currentActivityLevel === "moderate"
      ? 0.7
      : currentActivityLevel === "light"
      ? 0.3
      : 0; // Varies between 0 and 1

  // Calculate overall intensity score
  const intensityScore =
    ageScore * ageWeight +
    genderScore * genderWeight +
    fitnessGoalScore * fitnessGoalWeight +
    activityLevelScore * activityLevelWeight;

  // Define intensity levels
  const intensityLevels: Record<string, number> = {
    low: 0.3,
    moderate: 0.6,
    high: 0.9,
  };

  // Determine intensity based on the calculated score
  let intensity = "low";

  for (const level in intensityLevels) {
    if (intensityScore >= intensityLevels[level]!) {
      intensity = level;
    }
  }

  return intensity as ProgramIntensity;
};
