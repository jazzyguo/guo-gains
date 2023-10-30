import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const tags = [
  "chest-mid",
  "chest-upper",
  "chest-lower",
  "glutes",
  "quads",
  "calves",
  "hamstrings",
  "biceps",
  "triceps",
  "deltoids-front",
  "deltoids-rear",
  "deltoids-side",
  "back-upper",
  "back-lower",
  "lats",
  "hips",
  "traps",
  "push",
  "pull",
];

export const seedBaseTags = async () => {
  try {
    for (const tag of tags) {
      await prisma.baseTag.create({
        data: {
          slug: tag,
        },
      });
    }
  } catch (error) {
    console.error("Error seeding tags:", error);
  }
};
