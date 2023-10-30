import type { User, Exercise, UserInformation, Program } from "@prisma/client";

type ExerciseWithAlternatives = Exercise & {
  alternatives: Exercise[];
};

export type Workout = {
  order: number;
  reps: number;
  sets: number;
  exercise: ExerciseWithAlternatives;
};

export type Day =
  | {
      name: string;
      workouts: Workout[];
    }
  | null
  | undefined;

export type DayNumber = "1" | "2" | "3" | "4" | "5" | "6" | "7";

export type ProgramDays = Record<DayNumber, Day | null>;

export type GeneratedProgram = Program & {
  user: Omit<User, "programId"> & Omit<UserInformation, "userId">;
  days: ProgramDays;
};
