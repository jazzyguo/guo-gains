import { type RestDay } from "@/features/program/types";

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
