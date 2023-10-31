/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
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

export type RestDay = {
  name: "Rest";
};

export type WorkoutDay = {
  day: number;
  name: string;
  workouts: Workout[];
};

export type ProgramDay = WorkoutDay | RestDay;

export type GeneratedProgram = Program & {
  user: Omit<User, "programId"> & Omit<UserInformation, "userId">;
  days: Day[];
};
