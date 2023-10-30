import { PrismaClient } from "@prisma/client";
import { seedBaseTags } from "./baseTags";
import { SeedExercises } from "./exercises";

const prisma = new PrismaClient();

const main = async () => {
  try {
    await seedBaseTags();
    await SeedExercises();
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
