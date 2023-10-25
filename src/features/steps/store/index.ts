import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// tracks flow of the steps form
// as well as the form data across steps
interface StepsState {
  currentStep: number;
  units: "metric" | "imperial";
}

interface FormState {
  age: number;
  gender: "male" | "female" | null;
  height: number | null;
  height_ft: number | null;
  height_inches: number | null;
  weight: number | null;
  body_fat_range: [number, number] | null;
  fitness_goal: string | null;
  target_workout_days: number;
  current_activity_level: string | null;
}

type Actions = {
  setCurrentStep: (step: number) => void;
  updateFormData: <K extends keyof FormState>(
    key: K,
    value: FormState[K],
  ) => void;
  reset: () => void;
};

const initialFormData: FormState = {
  age: 20,
  gender: null,
  height: 175,
  height_ft: null,
  height_inches: null,
  weight: 70,
  body_fat_range: null,
  fitness_goal: null,
  target_workout_days: 3,
  current_activity_level: null,
};

const initialState: StepsState & FormState = {
  currentStep: 1,
  units: "metric",
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
        currentStep: 1,
        setCurrentStep: (step) => set({ currentStep: step }),
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
