import { type ProgramDay, type ProgramWorkoutDay } from "@/features/program/types";
import { REST_DAY } from "../consts";

export const getDayData = (days: ProgramWorkoutDay[], dayNumber: number): ProgramDay =>
  days.find(({ day }) => day === dayNumber) ?? REST_DAY;
