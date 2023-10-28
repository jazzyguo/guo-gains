export const EXCERCISE_ORDER: string[] = [
  "compound",
  // push
  "chest",
  "deltoids",
  "triceps",

  // pull
  "back",
  "biceps",
  "traps",

  // legs
  "quads",
  "hamstring",
  "hips",
  "calves",

  "body-weight",
];

export const BARBELL_FLAT_BENCH_PRESS: Excercise = {
  id: "barbell-flat-bench-press",
  name: "Barbell Flat Bench Press",
  tags: ["chest-mid", "compound"],
  description: "This is a barbell bench ",
  alternatives: ["barbell-incline-bench-press"],
};
