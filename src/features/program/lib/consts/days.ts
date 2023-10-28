export const PUSH_DAY_A: WORKOUT_DAY = {
  id: "push-day-a",
  name: "Push Day A",
  main_excercise: "barbell-flat-bench-press",
  tags: [
    "push",
    "chest-mid",
    "chest-upper",
    "chest-lower",
    "accessory",
    "triceps",
    "deltoids-side",
    "body-weight",
  ],
  required: ["deltoids", "triceps"],
};

export const PUSH_DAY_B: WORKOUT_DAY = {
  id: "push-day-b",
  name: "Push Day B",
  main_excercise: "incline-incline-bench-press",
  tags: [
    "push",
    "chest-mid",
    "chest-upper",
    "chest-lower",
    "accessory",
    "triceps",
    "deltoids",
    "body-weight",
  ],
  required: ["deltoids", "triceps"],
};

export const PULL_DAY_A: WORKOUT_DAY = {
  id: "pull-day-a",
  name: "Pull Day A",
  main_excercise: "barbell-rows",
  tags: [
    "pull",
    "back-upper",
    "back-lower",
    "biceps",
    "lats",
    "traps",
    "accessory",
    "body-weight",
  ],
  required: ["biceps", "traps"],
};

export const PULL_DAY_B: WORKOUT_DAY = {
  id: "pull-day-b",
  name: "Pull Day B",
  main_excercise: "deadlift",
  tags: [
    "pull",
    "back-upper",
    "back-lower",
    "biceps",
    "lats",
    "traps",
    "accessory",
    "body-weight",
  ],
  required: ["biceps", "traps"],
};

export const LEG_DAY: WORKOUT_DAY = {
  id: "leg-day",
  name: "Leg Day",
  main_excercise: "squat",
  tags: ["legs", "quads", "hamstrings", "calves", "hips"],
  required: ["hamstrings", "calves", "hips"],
};


// upper body day

// full body day

export const REST_DAY: WORKOUT_DAY = {
  id: "rest-day",
  name: "Rest Day",
};
