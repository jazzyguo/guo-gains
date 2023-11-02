import { type WorkoutDay } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type SeededWorkoutDay = Omit<WorkoutDay, "id"> & {
  tags: string[];
  requiredTags: string[];
};

export const workoutDays: SeededWorkoutDay[] = [
  {
    slug: "push-day-a",
    name: "Push Day A",
    tags: [
      "chest-mid",
      "chest-upper",
      "chest-lower",
      "triceps",
      "deltoids-side",
    ],
    requiredTags: ["deltoids-front", "triceps"],
  },
  {
    slug: "push-day-b",
    name: "Push Day B",
    tags: [
      "chest-mid",
      "chest-upper",
      "chest-lower",
      "triceps",
      "deltoids-front",
      "deltoids-side",
    ],
    requiredTags: ["deltoids-side", "triceps"],
  },
  {
    slug: "pull-day-a",
    name: "Pull Day A",
    tags: ["back-upper", "back-lower", "biceps", "lats", "traps"],
    requiredTags: ["biceps", "traps", "lats", "deltoids-rear"],
  },
  {
    slug: "pull-day-b",
    name: "Pull Day B",
    tags: ["back-upper", "back-lower", "biceps", "lats", "traps"],
    requiredTags: ["biceps", "lats", "deltoids-rear"],
  },
  {
    slug: "leg-day",
    name: "Leg Day",
    tags: ["quads", "hamstrings", "calves", "hips"],
    requiredTags: ["hamstrings", "calves", "hips"],
  },
  {
    slug: "upper-body-day",
    name: "Upper Body Day",
    tags: [
      "chest-mid",
      "chest-upper",
      "back-upper",
      "lats",
      "biceps",
      "triceps",
    ],
    requiredTags: ["chest-mid", "lats", "biceps", "triceps"],
  },
  {
    slug: "full-body-day",
    name: "Full Body Day",
    tags: [
      "quads",
      "chest-mid",
      "chest-upper",
      "lats",
      "back-upper",
      "biceps",
      "triceps",
      "hamstrings",
    ],
    requiredTags: ["chest-mid", "quads", "lats", "biceps", "triceps"],
  },
  {
    slug: "cardio-day",
    name: "Cardio Day",
    tags: ["cardio"],
    requiredTags: [],
  },
];

export const seedWorkoutDays = async () => {
  try {
    for (const workoutDay of workoutDays) {
      const { tags, requiredTags, ...workoutDayData } = workoutDay;
      await prisma.workoutDay.create({
        data: {
          ...workoutDayData,
          tags: {
            create: tags.map((slug) => ({ slug })),
          },
          requiredTags: {
            create: requiredTags.map((slug) => ({ slug })),
          },
        },
      });
    }
  } catch (error) {
    console.error("Error seeding workout days:", error);
  }
};
