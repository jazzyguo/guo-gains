type ExcerciseType =
  | "chest-mid"
  | "chest-upper"
  | "chest-lower"
  | "quads"
  | "calves"
  | "hamstrings"
  | "biceps"
  | "triceps"
  | "deltoids"
  | "deltoids-rear"
  | "deltoids-side"
  | "back-upper"
  | "back-lower"
  | "lats"
  | "hips"
  | "traps";

type ExcerciseCategory =
  | "compound"
  | "accessory"
  | "body-weight"
  | "push"
  | "pull"
  | "legs";

type Tag = ExcerciseType | ExcerciseCategory;

type Excercise = {
  id: string;
  name: string;
  tags: Tag[];
  description: string;
  alternatives: string[];
};

type GeneratedProgram = {
  original_info: FormState;
  excercises: Excercise & { repetitions: number; sets: number }[];
};

type WORKOUT_DAY = {
  id: string;
  name: string;
  main_excercise?: string;
  tags?: Tag[];
  required?: Tag[];
};

type WORKOUT_SPLIT = {
  id: string;
  name: string;
  days: WORKOUT_DAY[];
};
