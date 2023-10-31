import { type ProgramDay, type WorkoutDay } from "@/features/program/types";
import { REST_DAY } from "./consts";

export const getDayData = (days: WorkoutDay[], dayNumber: number): ProgramDay =>
  days.find(({ day }) => day === dayNumber) ?? REST_DAY;
