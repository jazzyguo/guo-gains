import { type RestDay, type ProgramIntensity } from "@/features/program/types";

export const EXERCISE_ORDER: string[] = [
  // push
  "chest-mid",
  "chest-upper",
  "chest-lower",
  "deltoids-side",
  "deltoids-front",
  "triceps",

  // pull
  "back-upper",
  "back-lower",
  "lats",
  "deltoids-rear",
  "biceps",
  "traps",

  // legs
  "glutes",
  "quads",
  "hamstring",
  "hips",
  "calves",
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
