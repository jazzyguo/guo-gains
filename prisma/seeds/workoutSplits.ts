import { type WorkoutSplit, PrismaClient } from "@prisma/client";
import { type workoutDays } from "./workoutDays";

const prisma = new PrismaClient();

type WorkoutDayStrings = (typeof workoutDays)[number]["slug"];

type SeededWorkoutSplit = Omit<WorkoutSplit, "id"> & {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  days: {
    slug: WorkoutDayStrings;
    hasMainExercise?: boolean;
    day: number;
  }[];
};

const workoutSplits: SeededWorkoutSplit[] = [
  {
    slug: "1-day-split",
    name: "1 Day Split",
    days: [
      {
        slug: "full-body-day",
        day: 1,
      },
    ],
    daysCount: 1,
  },
  {
    slug: "2-day-split",
    name: "2 Day Split",
    days: [
      { slug: "upper-body-day", day: 1 },
      { slug: "full-body-day", day: 4 },
    ],
    daysCount: 2,
  },
  {
    slug: "3-day-split",
    name: "3 Day Split",
    days: [
      { slug: "push-day-a", day: 1 },
      { slug: "pull-day-a", day: 3 },
      { slug: "leg-day", day: 5 },
    ],
    daysCount: 3,
  },
  {
    slug: "4-day-split",
    name: "4 Day Split",
    days: [
      { slug: "push-day-a", day: 1 },
      { slug: "pull-day-a", day: 2 },
      { slug: "leg-day", day: 4 },
      { slug: "upper-body-day", day: 6 },
    ],
    daysCount: 4,
  },
  {
    slug: "5-day-split",
    name: "5 Day Split",
    days: [
      { slug: "push-day-a", day: 1 },
      { slug: "pull-day-a", day: 2 },
      { slug: "leg-day", day: 3 },
      { slug: "push-day-b", day: 5 },
      { slug: "pull-day-b", day: 6, hasMainExercise: false },
    ],
    daysCount: 5,
  },
  {
    slug: "6-day-split",
    name: "6 Day Split",
    days: [
      { slug: "push-day-a", day: 1 },
      { slug: "pull-day-a", day: 2, hasMainExercise: false },
      { slug: "leg-day", day: 3 },
      { slug: "push-day-b", day: 4 },
      { slug: "pull-day-b", day: 5 },
      { slug: "leg-day", day: 6, hasMainExercise: false },
    ],
    daysCount: 6,
  },
  {
    slug: "7-day-split",
    name: "7 Day Split",
    days: [
      { slug: "push-day-a", day: 1 },
      { slug: "pull-day-a", day: 2, hasMainExercise: false },
      { slug: "leg-day", day: 3 },
      { slug: "push-day-b", day: 4 },
      { slug: "pull-day-b", day: 5 },
      { slug: "leg-day", day: 6, hasMainExercise: false },
      { slug: "full-body-day", day: 7 },
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
            create: workoutSplit.days.map(({ day, slug, hasMainExercise }) => ({
              day,
              hasMainExercise,
              workoutDay: {
                connect: {
                  id: (workoutDays || []).find((wd) => wd.slug === slug)?.id,
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
