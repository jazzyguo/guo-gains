import { type RestDay, type ProgramIntensity } from "@/features/program/types";

export const EXERCISE_ORDER: string[] = [
  "compound",

  // push
  "chest",
  "deltoids",
  "triceps",

  // pull
  "back-upper",
  "back-lower",
  "lats",
  "biceps",
  "traps",

  // legs
  "quads",
  "hamstring",
  "hips",
  "calves",

  "body-weight",
];

export const REST_DAY: RestDay = {
  name: "Rest",
};

const BASE_NUMBER_EXERCISES = 4;

export const NUMBER_EXERCISES_BY_INTENSITY: Record<ProgramIntensity, number> = {
  low: BASE_NUMBER_EXERCISES,
  moderate: BASE_NUMBER_EXERCISES + 1,
  high: BASE_NUMBER_EXERCISES + 2,
};
