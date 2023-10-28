import {
  PUSH_DAY_A,
  PUSH_DAY_B,
  LEG_DAY,
  PULL_DAY_B,
  REST_DAY,
  PULL_DAY_A,
} from "./days";

const PPL_SIX_DAY_SPLIT: WORKOUT_SPLIT = {
  id: "ppl-six-day-split",
  name: "PPL Six Day Split",
  days: [
    PUSH_DAY_A,
    PULL_DAY_A,
    LEG_DAY,
    REST_DAY,
    PUSH_DAY_B,
    PULL_DAY_B,
    LEG_DAY,
  ],
};

export const WORKOUT_SPLITS_BY_DAY_COUNT: Record<number, WORKOUT_SPLIT> = {
  1: PPL_SIX_DAY_SPLIT,
  2: PPL_SIX_DAY_SPLIT,
  3: PPL_SIX_DAY_SPLIT,
  4: PPL_SIX_DAY_SPLIT,
  5: PPL_SIX_DAY_SPLIT,
  6: PPL_SIX_DAY_SPLIT,
  7: PPL_SIX_DAY_SPLIT,
};
