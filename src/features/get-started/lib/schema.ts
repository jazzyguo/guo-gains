import { z } from "zod";
import {
  BASE_HEIGHT_CM,
  BASE_HEIGHT_FT,
  BASE_HEIGHT_INCHES,
  BASE_WEIGHT_KG,
  BASE_WEIGHT_LBS,
} from "./consts";

export const FormSchema = z.object({
  age: z.number().default(20),
  gender: z.enum(["male", "female"]).nullable().default(null),
  heightCm: z.number().default(BASE_HEIGHT_CM),
  heightFt: z.number().default(BASE_HEIGHT_FT),
  heightInches: z.number().default(BASE_HEIGHT_INCHES),
  weightKg: z.number().default(BASE_WEIGHT_KG),
  weightLbs: z.number().default(BASE_WEIGHT_LBS),
  fitnessGoal: z
    .enum(["lose-weight", "maintain", "build-muscle"])
    .nullable()
    .default(null),
  daysCountGoal: z.number().default(3),
  currentActivityLevel: z
    .enum(["none", "light", "moderate", "heavy"])
    .nullable()
    .default(null),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
