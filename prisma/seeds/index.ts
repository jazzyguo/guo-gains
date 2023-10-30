import { PrismaClient } from "@prisma/client";
import { seedBaseTags } from "./baseTags";
import { SeedExercises } from "./exercises";
import { seedWorkoutDays } from "./workoutDays";
import { seedWorkoutSplits } from "./workoutSplits";

const prisma = new PrismaClient();

const main = async () => {
  try {
    await seedBaseTags();
    await SeedExercises();
    await seedWorkoutDays();
    await seedWorkoutSplits();
  } catch (error) {
    console.error("Error seeding", error);
  } finally {
    await prisma.$disconnect();
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
