import { WorkoutSplit, PrismaClient } from "@prisma/client";
import { workoutDays } from "./workoutDays";

const prisma = new PrismaClient();

type WorkoutDayStrings = (typeof workoutDays)[number]["slug"];

type SeededWorkoutSplit = Omit<WorkoutSplit, "id"> & {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  days: (WorkoutDayStrings | null)[];
};

const workoutSplits: SeededWorkoutSplit[] = [
  {
    slug: "1-day-split",
    name: "1 Day Split",
    days: ["full-body-day", null, null, null, null, null, null],
    daysCount: 1,
  },
  {
    slug: "2-day-split",
    name: "2 Day Split",
    days: ["upper-body-day", null, null, "full-body-day", null, null, null],
    daysCount: 2,
  },
  {
    slug: "3-day-split",
    name: "3 Day Split",
    days: ["push-day-a", null, "pull-day-a", null, "leg-day", null, null],
    daysCount: 3,
  },
  {
    slug: "4-day-split",
    name: "4 Day Split",
    days: [
      "push-day-a",
      "pull-day-a",
      null,
      "leg-day",
      null,
      "upper-body-day",
      null,
    ],
    daysCount: 4,
  },
  {
    slug: "5-day-split",
    name: "5 Day Split",
    days: [
      "push-day-a",
      "pull-day-a",
      "leg-day",
      null,
      "push-day-b",
      "pull-day-b",
      null,
    ],
    daysCount: 5,
  },
  {
    slug: "6-day-split",
    name: "6 Day Split",
    days: [
      "push-day-a",
      "pull-day-a",
      "leg-day",
      "push-day-b",
      "pull-day-b",
      "leg-day",
      null,
    ],
    daysCount: 6,
  },
  {
    slug: "7-day-split",
    name: "7 Day Split",
    days: [
      "push-day-a",
      "pull-day-a",
      "leg-day",
      "push-day-b",
      "pull-day-b",
      "leg-day",
      "full-body-day",
    ],
    daysCount: 7,
  },
];

export const seedWorkoutSplits = async () => {
  try {
    const workoutDays = await prisma.workoutDay.findMany();

    for (const workoutSplit of workoutSplits) {
      await prisma.workoutSplit.create({
        data: {
          ...workoutSplit,
          days: {
            create: workoutSplit.days
              .filter((day) => !!day)
              .map((day, index) => ({
                day: index + 1,
                workoutDay: {
                  connect: {
                    id: (workoutDays || []).find((wd) => wd.slug === day)?.id,
                  },
                },
              })),
          },
        },
      });
    }
  } catch (error) {
    console.error("Error seeding workout splits:", error);
  }
};
