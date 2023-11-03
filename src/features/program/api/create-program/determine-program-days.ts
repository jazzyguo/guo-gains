import { type BaseTag, type Exercise } from "@prisma/client";
import {
  type WorkoutSplitWithAssociations,
  type ProgramIntensity,
  type WorkoutSplitDayWithAssociations,
} from "../../types";
import { prisma } from "@/lib/prisma";
import {
  NUMBER_EXERCISES_BY_INTENSITY,
  EXERCISE_ORDER,
} from "../../lib/consts";
import sampleSize from "lodash/sampleSize";
import sample from "lodash/sample";

type ExerciseWithTags = Exercise & { tags?: BaseTag[] };

type CreatedExercise = {
  order?: number;
  reps?: number;
  sets?: number;
  minutes?: number;
  exercise: ExerciseWithTags;
};

type CreatedProgramDay = {
  name: string;
  day: number;
  workouts: CreatedExercise[];
};

const filterExercisesByCategory = (
  exercises: CreatedExercise[],
  category: string,
): CreatedExercise[] => {
  const filtered = exercises.filter(
    ({ exercise }) => exercise.category === category,
  );
  return filtered;
};

const sortAndOrderExercises = (
  exercises: CreatedExercise[],
): CreatedExercise[] => {
  const accessoryExercises = filterExercisesByCategory(exercises, "accessory");

  // iterate through order and add unique instances of exercise
  const sortedAccessoryExercises = EXERCISE_ORDER.reduce(
    (acc: CreatedExercise[], order: string) => {
      const foundExercises = accessoryExercises.filter(
        ({ exercise: { tags } }) =>
          tags?.map(({ slug }) => slug).includes(order),
      );

      for (const foundExercise of foundExercises) {
        const exists = acc.find(
          ({ exercise: { id } }) => id === foundExercise.exercise.id,
        );

        if (!exists) {
          acc.push(foundExercise);
        }
      }

      return acc;
    },
    [],
  );

  // add compound in beggining and body-weight categories at end
  const compoundExercises = filterExercisesByCategory(exercises, "compound");
  const bodyWeightExercises = filterExercisesByCategory(
    exercises,
    "body-weight",
  );

  const orderedExercises = [
    ...compoundExercises,
    ...sortedAccessoryExercises,
    ...bodyWeightExercises,
  ];

  const mappedExercises = orderedExercises.map((exercise, index) => ({
    ...exercise,
    order: index + 1,
  }));

  return mappedExercises;
};

const getMainCompoundExercise = async (
  tagSlugs: string[],
): Promise<CreatedExercise | undefined> => {
  let result;

  // add a random compound lift
  const compoundExercises = await prisma.exercise.findMany({
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

  const randomCompoundExercse =
    compoundExercises[Math.floor(Math.random() * compoundExercises.length)];

  if (randomCompoundExercse) {
    result = {
      order: 1,
      reps: 6,
      sets: 5,
      exercise: randomCompoundExercse,
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

    const randomReqExercise = sample(exercisesByRequiredTag);

    if (randomReqExercise) {
      requiredExercises.push({
        reps: 8,
        sets: 4,
        exercise: randomReqExercise,
      });
    }
  }

  return requiredExercises;
};

//!!todo, when i render alternatives, i need to update
// this function and the cardio function
// to not include alternative exercises
// i can do that by looping # of exercises times that i need to add
// and reduce the current array of exercises/additional exercises alternatives 
// into a single array to filter the query on with slug notIn. ill have to change to a findFirst,
// using a random skip value so i dont query all exercises on each iteration.
const getAdditionalExercises = async (
  tagSlugs: string[],
  numberNeeded: number,
  currentExercises: CreatedExercise[],
): Promise<CreatedExercise[]> => {
  const additionalExercises: CreatedExercise[] = [];

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

// add cardio days instead of a normal program split day if weight loss is wanted
// based on 25% of the users picked # of days to workout
const addCardioDays = async (
  days: WorkoutSplitDayWithAssociations[],
): Promise<WorkoutSplitDayWithAssociations[]> => {
  const updatedDays = [...days];

  const cardioDay = await prisma.workoutDay.findFirst({
    include: {
      tags: true,
      requiredTags: true,
    },
    where: {
      tags: {
        some: {
          slug: {
            in: ["cardio"],
          },
        },
      },
    },
  });

  if (cardioDay) {
    const cardioSplitDay = {
      id: "cardio-day",
      name: "Cardio Day",
      hasMainExercise: false,
      workoutSplitId: "",
      workoutDayId: cardioDay.id,
      workoutDay: cardioDay,
    };

    // we just replace days 1 & 5 with cardio
    const daysOfCardio = Math.min(Math.ceil(days.length * 0.25), 2);

    for (let i = 0; i < daysOfCardio; i++) {
      const dayToReplace = i === 0 ? 1 : 5;
      const dayToReplaceIndex = days.findIndex(
        ({ day }) => day === dayToReplace,
      );
      updatedDays[dayToReplaceIndex] = {
        ...cardioSplitDay,
        day: dayToReplace,
      };
    }
  }

  return updatedDays;
};

const getCardioDayExercises = async (): Promise<CreatedExercise[]> => {
  const hiitExercise = await prisma.exercise.findFirst({
    include: {
      tags: true,
    },
    where: {
      slug: "hiit",
    },
  });

  const cardioExercises = await prisma.exercise.findMany({
    include: {
      tags: true,
    },
    where: {
      category: "cardio",
      slug: {
        not: "hiit",
      },
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const randomCardioExercises = sampleSize(cardioExercises, 2) as Exercise[];

  const hiitExerciseToAdd = {
    order: 1,
    minutes: 10,
    exercise: hiitExercise,
  };

  const cardioExercisesToAdd = randomCardioExercises.map(
    (cardioExercise, index) => ({
      order: index + 2,
      minutes: 20,
      exercise: cardioExercise,
    }),
  );

  return [hiitExerciseToAdd as CreatedExercise, ...cardioExercisesToAdd];
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
  fitnessGoal: string,
): Promise<CreatedProgramDay[]> => {
  const createdDays = [];
  const { days }: { days: WorkoutSplitDayWithAssociations[] } = programSplit;

  const shouldIncludeCardio = fitnessGoal === "lose-weight";

  let programDays = [...days];

  if (shouldIncludeCardio) {
    programDays = await addCardioDays(days);
  }

  // iterate through the days in the workout split
  for (const day of programDays) {
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

      if (!tagSlugs.includes("cardio")) {
        const requiredExercisesToAdd =
          await getRandomRequiredExercises(requiredTags);

        exercisesToAdd.push(...requiredExercisesToAdd);

        // now we add exercises depending on program intensity
        // making sure to not hit dupes
        const numberOfExercisesNeeded =
          NUMBER_EXERCISES_BY_INTENSITY[programIntensity];

        if (exercisesToAdd.length < numberOfExercisesNeeded) {
          const numberToFetch = numberOfExercisesNeeded - exercisesToAdd.length;
          const additionalExercises = await getAdditionalExercises(
            tagSlugs,
            numberToFetch,
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
      } else {
        const cardioExercises = await getCardioDayExercises();
        createdDays.push({
          name,
          day: dayNumber,
          workouts: cardioExercises,
        });
      }
    }
  }

  return createdDays;
};
