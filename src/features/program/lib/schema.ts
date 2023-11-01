import { z } from "zod";

export const CreateProgramSchema = z.object({
  age: z.number({ required_error: "Age is required" }),
  gender: z.enum(["male", "female"]),
  heightCm: z.number({ required_error: "Height is required" }),
  heightFt: z.number({ required_error: "Height is required" }),
  heightInches: z.number({ required_error: "Height is required" }),
  weightKg: z.number({ required_error: "Weight is required" }),
  weightLbs: z.number({ required_error: "Weight is required" }),
  fitnessGoal: z.string({ required_error: "Fitness goal is required" }),
  daysCountGoal: z.number({ required_error: "Days count is required" }),
  currentActivityLevel: z.string({
    required_error: "Activity level is required",
  }),
});

export type CreateProgramSchemaType = z.infer<typeof CreateProgramSchema>;
