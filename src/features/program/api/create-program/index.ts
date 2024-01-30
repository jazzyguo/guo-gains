"use server"

import { prisma } from "@/lib/prisma";
import { type UserInformation } from "@prisma/client";

import { type CreateProgramSchemaType } from "../../lib/schema";
import { type GeneratedProgram } from "../../types";

import { determineProgramSplit } from "./determine-program-split";
import { determineProgramIntensity } from "./determine-program-intensity";
import { determineProgramDays } from "./determine-program-days";

/**
 * Depending on days count and also current intensity current goal, we bucket these into predetermined workout splits
 * Then following the users goal and current intensity levels - along with the suggested intensity of each predetermined set,
 *  we can derive how intense to make each workout day and how many exercises to add/remove
 *  ie. 6 days chosen -> PPL_SIX_DAY_SPLIT -> determined low intensity, descrease rep/set ranges and remove an accessory exercise from a base of 1 compound lift + 4 accessory lifts
 */
export const createProgram = async (
  formData: CreateProgramSchemaType,
): Promise<GeneratedProgram> => {
  const { daysCountGoal, fitnessGoal } = formData;

  // choose split based on day
  const programSplit = await determineProgramSplit(daysCountGoal);

  if (!programSplit) {
    throw new Error("Failed to get workout split");
  }

  const programIntensity = determineProgramIntensity(
    formData as UserInformation,
  );

  const programDays = await determineProgramDays(
    programSplit,
    programIntensity,
    fitnessGoal,
  );

  try {
    const program = await prisma.program.create({
      data: {
        user: {
          create: {
            info: {
              create: formData,
            },
          },
        },
        days: {
          create: programDays.map((programDay) => ({
            name: programDay.name,
            day: programDay.day,
            workouts: {
              create: programDay.workouts.map((programDayWorkout) => ({
                order: programDayWorkout.order!,
                reps: programDayWorkout.reps,
                sets: programDayWorkout.sets,
                minutes: programDayWorkout.minutes,
                exercise: {
                  connect: {
                    id: programDayWorkout.exercise.id,
                  },
                },
              })),
            },
          })),
        },
      },
    });

    return program as GeneratedProgram;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to create program");
  }
};
