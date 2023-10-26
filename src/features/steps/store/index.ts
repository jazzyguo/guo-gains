import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { getImperialHeightFromMetric, convertWeight } from "@/lib/unitsConvert";

export const NUMBER_STEPS = 2;

// tracks flow of the steps form
// as well as the form data across steps
interface StepsState {
  latestStep: number;
}

export interface FormState {
  age: number;
  gender: "male" | "female" | null;
  height_cm: number;
  height_ft: number;
  height_inches: number;
  weight_kg: number;
  weight_lbs: number;
  body_fat_range: [number, number] | null;
  fitness_goal: string | null;
  target_workout_days: number;
  current_activity_level: string | null;
}

type Actions = {
  setLatestStep: (step: number) => void;
  updateFormData: <K extends keyof FormState>(
    key: K,
    value: FormState[K],
  ) => void;
  reset: () => void;
};

const BASE_HEIGHT_CM = 175;
const BASE_WEIGHT_KG = 70;
export const [BASE_HEIGHT_FT, BASE_HEIGHT_INCHES] =
  getImperialHeightFromMetric(BASE_HEIGHT_CM);
export const BASE_WEIGHT_LBS = convertWeight(BASE_WEIGHT_KG, "metric");

const initialFormData: FormState = {
  age: 20,
  gender: null,
  height_cm: BASE_HEIGHT_CM,
  height_ft: BASE_HEIGHT_FT,
  height_inches: BASE_HEIGHT_INCHES,
  weight_kg: BASE_WEIGHT_KG,
  weight_lbs: BASE_WEIGHT_LBS,
  body_fat_range: null,
  fitness_goal: null,
  target_workout_days: 3,
  current_activity_level: null,
};

const initialState: StepsState & FormState = {
  latestStep: 1,
  ...initialFormData,
};

type Middleware = [
  ["zustand/devtools", never],
  ["zustand/persist", StepsState],
  ["zustand/immer", never],
];

export const useStepsStore = create<
  StepsState & FormState & Actions,
  Middleware
>(
  devtools(
    persist(
      immer((set) => ({
        ...initialState,
        latestStep: 1,
        setLatestStep: (step) => set({ latestStep: step }),
        updateFormData: (key, value) => {
          set((state: FormState) => {
            if (state.hasOwnProperty(key)) {
              state[key] = value;
            }
          });
        },
        reset: () => set(() => ({ ...initialState })),
      })),
      {
        name: "steps-store",
      },
    ),
  ),
);
