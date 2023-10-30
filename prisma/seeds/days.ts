export const PUSH_DAY_A: WORKOUT_DAY = {
  id: "push-day-a",
  name: "Push Day A",
  main_exercise: "barbell-flat-bench-press",
  tags: [
    "chest-mid",
    "chest-upper",
    "chest-lower",
    "accessory",
    "triceps",
    "deltoids-side",
    "body-weight",
  ],
  required: ["deltoids-front", "deltoids-side", "triceps"],
};

export const PUSH_DAY_B: WORKOUT_DAY = {
  id: "push-day-b",
  name: "Push Day B",
  main_exercise: "incline-incline-bench-press",
  tags: [
    "chest-mid",
    "chest-upper",
    "chest-lower",
    "accessory",
    "triceps",
    "deltoids",
  ],
  required: ["deltoids", "triceps"],
};

export const PULL_DAY_A: WORKOUT_DAY = {
  id: "pull-day-a",
  name: "Pull Day A",
  main_exercise: "barbell-rows",
  tags: ["back-upper", "back-lower", "biceps", "lats", "traps"],
  required: ["biceps", "traps", "lats", "deltoids-rear"],
};

export const PULL_DAY_B: WORKOUT_DAY = {
  id: "pull-day-b",
  name: "Pull Day B",
  main_exercise: "deadlift",
  tags: ["back-upper", "back-lower", "biceps", "lats", "traps"],
  required: ["biceps", "lats", "deltoids-rear"],
};

export const LEG_DAY: WORKOUT_DAY = {
  id: "leg-day",
  name: "Leg Day",
  main_exercise: "squat",
  tags: ["quads", "hamstrings", "calves", "hips"],
  required: ["hamstrings", "calves", "hips"],
};

export const UPPER_BODY_DAY: WORKOUT_DAY = {
  id: "upper-body-day",
  name: "Upper Body Day",
  main_exercise: "overhead-barbell-press",
  tags: ["chest-mid", "chest-upper", "back-upper", "lats", "biceps", "triceps"],
  required: ["chest-mid", "lats", "biceps", "triceps"],
};

export const FULL_BODY_DAY: WORKOUT_DAY = {
  id: "full-body-day",
  name: "Full Body Day",
  main_exercise: "deadlift",
  tags: [
    "quads",
    "chest-mid",
    "chest-upper",
    "lats",
    "back-upper",
    "biceps",
    "triceps",
    "hamstrings",
  ],
  required: ["chest-mid", "quads", "lats", "biceps", "triceps"],
};

export const REST_DAY: WORKOUT_DAY = {
  id: "rest-day",
  name: "Rest Day",
};
