import { type BaseTag, type Exercise } from "@prisma/client";
import {
  type ProgramIntensity,
  type WorkoutSplitWithAssociations,
} from "../../types";
import { prisma } from "@/lib/prisma";
import {
  NUMBER_EXERCISES_BY_INTENSITY,
  EXERCISE_ORDER,
} from "../../lib/consts";

type CreatedExercise = {
  order?: number;
  reps: number;
  sets: number;
  exercise: Exercise & { tags?: BaseTag[] };
};

type CreatedProgramDay = {
  name: string;
  day: number;
  workouts: CreatedExercise[];
};

const sortAndOrderExercises = (
  exercises: CreatedExercise[],
): CreatedExercise[] => {
  const sortedExercises = [...exercises];
  // const uniqueExercises = new Set();

  // for (const order of EXERCISE_ORDER) {
  //   for (const exercise of exercises) {
  //     if (
  //       (exercise.exercise.category === order ||
  //         (exercise.exercise.category === "accessory" &&
  //           exercise.exercise.tags!.some((tag) => tag.slug === order))) &&
  //       !uniqueExercises.has(exercise.exercise.id)
  //     ) {
  //       sortedExercises.push(exercise);
  //       uniqueExercises.add(exercise.exercise.id);
  //     }
  //   }
  // }

  const mappedExercises = sortedExercises.map((exercise, index) => ({
    ...exercise,
    order: index + 1,
  }));

  return mappedExercises;
};

const getMainCompoundExercise = async (
  tagSlugs: string[],
): Promise<CreatedExercise | undefined> => {
  let result;
  // check if there is a main exercise to add
  const compoundExercise = await prisma.exercise.findFirst({
    where: {
      tags: {
        some: {
          slug: {
            in: tagSlugs,
          },
        },
      },
      category: "compound",
    },
    include: {
      tags: true,
    },
  });

  if (compoundExercise) {
    result = {
      reps: 6,
      sets: 5,
      exercise: compoundExercise,
    };
  }
  return result;
};

const getRandomRequiredExercises = async (
  requiredTags: BaseTag[],
): Promise<CreatedExercise[]> => {
  const requiredExercises = [];

  // add exercises based on required tags
  for (const requiredTag of [...requiredTags, { slug: "body-weight" }]) {
    // Find exercises with required tags and add them to the program
    const exercisesByRequiredTag = await prisma.exercise.findMany({
      include: {
        tags: true,
      },
      where: {
        category: "accessory",
        tags: {
          some: {
            slug: requiredTag.slug,
          },
        },
      },
    });

    const randomReqExercise =
      exercisesByRequiredTag[
        Math.floor(Math.random() * exercisesByRequiredTag.length)
      ];

    if (randomReqExercise) {
      requiredExercises.push({
        reps: 8,
        sets: 4,
        exercise: randomReqExercise,
      });
    }
  }
  console.log({ requiredExercises });
  return requiredExercises;
};

const getAdditionalExercises = async (
  tagSlugs: string[],
  numberNeeded: number,
  exercisesCount: number,
  currentExercises: CreatedExercise[],
): Promise<CreatedExercise[]> => {
  const additionalExercises: CreatedExercise[] = [];

  // // fetch additional exercises based on tag slugs and numberNeeded
  // // through a random iteration of tagSlugs
  // const randomExerciseSkip = Math.floor(Math.random() * exercisesCount);

  const exercises = await prisma.exercise.findMany({
    where: {
      id: {
        notIn: currentExercises.map(({ exercise: { id } }) => id),
      },
      tags: {
        some: {
          slug: {
            in: tagSlugs,
          },
        },
      },
      category: "accessory",
    },
    include: {
      tags: true,
    },
    take: numberNeeded,
    //  skip: randomExerciseSkip,
  });

  for (const exercise of exercises) {
    additionalExercises.push({
      reps: 8,
      sets: 4,
      exercise,
    });
  }

  return additionalExercises;
};

/**
 * The goal is iterate through each day and add exercises
 * we add a main exercise if needed,
 * then we add required exercises based on required tags
 * then we fill up the workout day with the number of exercises needed to match the intensity
 */
export const determineProgramDays = async (
  programSplit: WorkoutSplitWithAssociations,
  programIntensity: ProgramIntensity,
): Promise<CreatedProgramDay[]> => {
  const createdDays = [];
  const { days } = programSplit;

  // iterate through the days in the workout split
  for (const day of days) {
    if (day) {
      // get information about each day and get tags
      const { hasMainExercise, workoutDay, day: dayNumber } = day;

      const { tags, requiredTags, name } = workoutDay;

      const tagSlugs = tags.map((tag) => tag.slug);

      const exercisesToAdd: CreatedExercise[] = [];

      if (hasMainExercise) {
        const mainExercise = await getMainCompoundExercise(tagSlugs);

        if (mainExercise) {
          exercisesToAdd.push(mainExercise);
        }
      }

      const requiredExercisesToAdd =
        await getRandomRequiredExercises(requiredTags);

      exercisesToAdd.push(...requiredExercisesToAdd);

      // now we add exercises depending on program intensity
      // making sure to not hit dupes
      const numberOfExercisesNeeded =
        NUMBER_EXERCISES_BY_INTENSITY[programIntensity];

      const exercisesCount = await prisma.exercise.count({
        where: {
          slug: {
            in: tagSlugs,
          },
        },
      });

      if (exercisesToAdd.length < numberOfExercisesNeeded) {
        const numberToFetch = numberOfExercisesNeeded - exercisesToAdd.length;
        const additionalExercises = await getAdditionalExercises(
          tagSlugs,
          numberToFetch,
          exercisesCount,
          exercisesToAdd,
        );

        exercisesToAdd.push(...additionalExercises);
      }

      // with all appended exercises, we must now order them based on EXERCISE_ORDER
      const orderedExercises = sortAndOrderExercises(exercisesToAdd);

      const createdProgramDay = {
        name,
        day: dayNumber,
        workouts: orderedExercises,
      };

      console.log({
        createdProgramDay,
        exercisesToAdd,
        requiredExercisesToAdd,
      });

      createdDays.push(createdProgramDay);
    }
  }

  return createdDays;
};
