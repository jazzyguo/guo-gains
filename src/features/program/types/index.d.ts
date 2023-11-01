/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import type {
  User,
  Exercise,
  UserInformation,
  Program,
  WorkoutSplitDay,
  WorkoutDay,
  WorkoutSplit,
  BaseTag,
} from "@prisma/client";

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

export type ProgramWorkoutDay = {
  day: number;
  name: string;
  workouts: Workout[];
};

export type ProgramDay = ProgramWorkoutDay | RestDay;

export type GeneratedProgram = Program & {
  user: Omit<User, "programId"> & Omit<UserInformation, "userId">;
  days: ProgramWorkoutDay[];
};

export type ProgramIntensity = "high" | "low" | "moderate";

export type WorkoutDayWithTags = WorkoutDay & {
  tags: BaseTag[];
  requiredTags: BaseTag[];
};

export type WorkoutSplitDayWithAssociations = WorkoutSplitDay & {
  workoutDay: WorkoutDayWithTags;
};

export type WorkoutSplitWithAssociations = WorkoutSplit & {
  days: WorkoutSplitDayWithAssociations[];
};
