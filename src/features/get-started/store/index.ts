import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { FormSchema, type FormSchemaType } from "../lib/schema";

// tracks flow of the steps form
// as well as the form data across steps
interface StepsState {
  latestStep: number;
}

type Actions = {
  setLatestStep: (step: number) => void;
  updateFormData: <K extends keyof FormSchemaType>(
    key: K,
    value: FormSchemaType[K],
  ) => void;
  submitForm: () => Promise<{
    programId?: string | undefined;
    error?: string | undefined;
  }>;
  reset: () => void;
};

const initialFormData: FormSchemaType = FormSchema.parse({});

const initialState: StepsState & FormSchemaType = {
  latestStep: 1,
  ...initialFormData,
};

type Middleware = [
  ["zustand/devtools", never],
  ["zustand/persist", StepsState],
  ["zustand/immer", never],
];

type StoreState = StepsState & FormSchemaType & Actions;

export const useGetStartedStore = create<StoreState, Middleware>(
  devtools(
    persist(
      immer((set, get) => ({
        ...initialState,
        latestStep: 1,
        setLatestStep: (step: number) => set({ latestStep: step }),
        updateFormData: <K extends keyof FormSchemaType>(
          key: K,
          value: FormSchemaType[K],
        ) => {
          set((state: FormSchemaType) => {
            if (state.hasOwnProperty(key)) {
              state[key] = value;
            }
          });
        },
        submitForm: async () => {
          const state = get();

          const formData = FormSchema.parse(state);

          const response = await fetch("/api/get-started", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (response.status === 200) {
            const data = await response.json();
            const programId = data.program.id;
            return { programId };
          }
          return { error: "Failed to submit." };
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
