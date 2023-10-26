import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { getImperialHeightFromMetric, convertWeight } from "@/lib/unitsConvert";
import { z } from "zod";

export const NUMBER_STEPS = 2;

const BASE_HEIGHT_CM = 175;
const BASE_WEIGHT_KG = 70;
export const [BASE_HEIGHT_FT, BASE_HEIGHT_INCHES] =
  getImperialHeightFromMetric(BASE_HEIGHT_CM);
export const BASE_WEIGHT_LBS = convertWeight(BASE_WEIGHT_KG, "metric");

// tracks flow of the steps form
// as well as the form data across steps
interface StepsState {
  latestStep: number;
}

const FormSchema = z.object({
  age: z.number().default(20),
  gender: z.enum(["male", "female"]).nullable().default(null),
  height_cm: z.number().default(BASE_HEIGHT_CM),
  height_ft: z.number().default(BASE_HEIGHT_FT),
  height_inches: z.number().default(BASE_HEIGHT_INCHES),
  weight_kg: z.number().default(BASE_WEIGHT_KG),
  weight_lbs: z.number().default(BASE_WEIGHT_LBS),
  body_fat_range: z.tuple([z.number(), z.number()]).nullable().default(null),
  fitness_goal: z.string().nullable().default(null),
  target_workout_days: z.number().default(3),
  current_activity_level: z.string().nullable().default(null),
});

export type FormState = z.infer<typeof FormSchema>;

type Actions = {
  setLatestStep: (step: number) => void;
  updateFormData: <K extends keyof FormState>(
    key: K,
    value: FormState[K],
  ) => void;
  reset: () => void;
};

const initialFormData: FormState = FormSchema.parse({});

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
