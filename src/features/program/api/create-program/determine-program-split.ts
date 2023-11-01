import { prisma } from "@/lib/prisma";
import { type WorkoutSplitWithAssociations } from "../../types";

export const determineProgramSplit = async (
  daysCount: number,
): Promise<WorkoutSplitWithAssociations | null> => {
  const workoutSplit = await prisma.workoutSplit.findFirst({
    where: {
      daysCount: daysCount,
    },
    include: {
      days: {
        include: {
          workoutDay: {
            include: {
              tags: true,
              requiredTags: true,
            },
          },
        },
      },
    },
  });

  return workoutSplit as WorkoutSplitWithAssociations;
};
