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
  minutes?: number;
  order: number;
  reps?: number;
  sets?: number;
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

export type UserWithInformation = User & {
  info: UserInformation;
};

export type GeneratedProgram = Program & {
  id?: string;
  user: UserWithInformation;
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
