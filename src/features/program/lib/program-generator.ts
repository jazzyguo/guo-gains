import { FormState } from "@/features/get-started";
import { type GeneratedProgram } from "../types";

/**
 * Depending on days count and also current intensity current goal, we bucket these into predetermined workout splits
 * Then following the users goal and current intensity levels - along with the suggested intensity of each predetermined set,
 *  we can derive how intense to make each workout day and how many exercises to add/remove
 *  ie. 6 days chosen -> PPL_SIX_DAY_SPLIT -> determined low intensity, descrease rep/set ranges and remove an accessory exercise from a base of 1 compound lift + 4 accessory lifts
 */
const programGenerator = (formData: FormState): GeneratedProgram => {
  // choose split based on day
  // get intensity
  // for each day in split
  //   add main exercise
  //   add random lifts that are required
  //   if light
  //       - add 1 bodyweight
  //   if moderate
  //       - add 1 body weight and 1 extra accessory
  //   if heavy
  //       - add 1 body weight and 2 extra accessory
  //   order workouts based on EXERCISE_ORDER
};
