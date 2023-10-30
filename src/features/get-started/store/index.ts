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
  heightCm: z.number().default(BASE_HEIGHT_CM),
  heightFt: z.number().default(BASE_HEIGHT_FT),
  heightInches: z.number().default(BASE_HEIGHT_INCHES),
  weightKg: z.number().default(BASE_WEIGHT_KG),
  weightLbs: z.number().default(BASE_WEIGHT_LBS),
  fitnessGoal: z.string().nullable().default(null),
  daysCountGoal: z.number().default(3),
  currentActivityLevel: z.string().nullable().default(null),
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

type StoreState = StepsState & FormState & Actions;

export const useGetStartedStore = create<StoreState, Middleware>(
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
        skipHydration: true,
      },
    ),
  ),
);
