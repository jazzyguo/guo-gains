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
  exercise: Exercise;
};

type CreatedProgramDay = {
  name: string;
  day: number;
  workouts: CreatedExercise[];
};

const sortAndOrderExercises = (
  exercises: CreatedExercise[],
): CreatedExercise[] => {
  const sortedExercises = exercises.sort(
    (a, b) =>
      EXERCISE_ORDER.indexOf(a.exercise.slug) -
      EXERCISE_ORDER.indexOf(b.exercise.slug),
  );
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
  const randomExercises = [];
  const reqTagSlugs = requiredTags.map((tag) => tag.slug);

  // set up count and skip for choosing a random exercise for each req tag
  const requiredExercisesCount = await prisma.exercise.count({
    where: {
      slug: {
        in: reqTagSlugs,
      },
    },
  });

  // add exercises based on required tags
  for (const requiredTag of [...requiredTags, { slug: "body-weight" }]) {
    const randomReqExerciseSkip = Math.floor(
      Math.random() * requiredExercisesCount,
    );

    // Find exercises with required tags and add them to the program
    const exercisesByRequiredTag = await prisma.exercise.findMany({
      take: 1,
      skip: randomReqExerciseSkip,
      where: {
        tags: {
          some: {
            slug: requiredTag.slug,
          },
        },
      },
    });

    if (!!exercisesByRequiredTag.length) {
      randomExercises.push({
        reps: 8,
        sets: 4,
        exercise: exercisesByRequiredTag[0]!,
      });
    }
  }
  return randomExercises;
};

const getAdditionalExercises = async (
  tagSlugs: string[],
  numberNeeded: number,
  exercisesCount: number,
  currentExercises: CreatedExercise[],
): Promise<CreatedExercise[]> => {
  const additionalExercises: CreatedExercise[] = [];

  // fetch additional exercises based on tag slugs and numberNeeded
  // through a random iteration of tagSlugs
  for (let i = 0; i < numberNeeded; i++) {
    const randomIndex = Math.floor(Math.random() * tagSlugs.length);
    const randomTagSlug = tagSlugs[randomIndex];

    const randomExerciseSkip = Math.floor(Math.random() * exercisesCount);

    const exercises = await prisma.exercise.findMany({
      where: {
        id: {
          notIn: currentExercises.map(({ exercise: { id } }) => id),
        },
        tags: {
          some: {
            slug: randomTagSlug,
          },
        },
        category: "accessory",
      },
      take: 1,
      skip: randomExerciseSkip,
    });

    if (exercises.length) {
      additionalExercises.push({
        reps: 8,
        sets: 4,
        exercise: exercises[0]!,
      });
    }
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

      createdDays.push(createdProgramDay);
    }
  }

  return createdDays;
};
