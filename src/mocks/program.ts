import { type GeneratedProgram } from "@/features/program/types";

export const mockProgram: GeneratedProgram = {
  id: "test-program",
  user: {
    id: "user",
    age: 20,
    gender: "female",
    heightFt: 9,
    heightInches: 9,
    heightCm: 175,
    weightKg: 70,
    weightLbs: 154,
    currentActivityLevel: "light",
    daysCountGoal: 3,
    fitnessGoal: "maintain",
  },
  days: {
    1: null,
    2: null,
    3: {
      name: "Push A",
      workouts: [
        {
          order: 1,
          reps: 12,
          sets: 4,
          exercise: {
            id: "asdfads",
            name: "Barbell Flat Bench Press",
            poster:
              "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-bench-press-front_q2q0T12.png",
            gifUrl:
              "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1",

            description:
              "Flat bench press using the barbell to target the chest muscles, primarily the mid section.",
            directions:
              "Lie flat on a bench rack and lower and push the bar upward until the arms are extended.",
            category: "compound",
            alternatives: [
              {
                id: "blabla",
                name: "Incline Barbell Bench Press",
                poster:
                  "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-bench-press-front_q2q0T12.png",
                gifUrl:
                  "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1",
                description:
                  "The incline bench press with a barbell focuses on the upper chest. Use an inclined bench to perform this exercise.",
                directions:
                  "Lay on an inclined bench and lower the barbell to your upper chest, then push it back up until your arms are fully extended.",
                category: "compound",
                slug: "incline-barbell-bench-press",
                videoUrls: [],
              },
            ],
            slug: "barbell-flat-bench-press",
            videoUrls: [
              "https://www.youtube.com/watch?v=BYKScL2sgCs&ab_channel=AlanThrall",
            ],
          },
        },
        {
          order: 2,
          reps: 12,
          sets: 4,
          exercise: {
            id: "sdasd",
            name: "Barbell Flat Bench Press",
            poster:
              "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-bench-press-front_q2q0T12.png",
            gifUrl:
              "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1",
            description:
              "Flat bench press using the barbell to target the chest muscles, primarily the mid section.",
            directions:
              "Lie flat on a bench rack and lower and push the bar upward until the arms are extended.",
            category: "compound",
            alternatives: [
              {
                id: "blabla",
                name: "Incline Barbell Bench Press",
                poster:
                  "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-bench-press-front_q2q0T12.png",
                gifUrl:
                  "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1",
                description:
                  "The incline bench press with a barbell focuses on the upper chest. Use an inclined bench to perform this exercise.",
                directions:
                  "Lay on an inclined bench and lower the barbell to your upper chest, then push it back up until your arms are fully extended.",
                category: "compound",
                slug: "incline-barbell-bench-press",
                videoUrls: [],
              },
            ],
            slug: "barbell-flat-bench-press",
            videoUrls: [
              "https://www.youtube.com/watch?v=BYKScL2sgCs&ab_channel=AlanThrall",
            ],
          },
        },
        {
          order: 3,
          reps: 12,
          sets: 4,
          exercise: {
            id: "sda2sd",
            name: "Barbell Flat Bench Press",
            poster:
              "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-bench-press-front_q2q0T12.png",
            gifUrl:
              "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1",
            description:
              "Flat bench press using the barbell to target the chest muscles, primarily the mid section.",
            directions:
              "Lie flat on a bench rack and lower and push the bar upward until the arms are extended.",
            category: "compound",
            alternatives: [
              {
                id: "blabla",
                name: "Incline Barbell Bench Press",
                poster:
                  "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-bench-press-front_q2q0T12.png",
                gifUrl:
                  "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1",
                description:
                  "The incline bench press with a barbell focuses on the upper chest. Use an inclined bench to perform this exercise.",
                directions:
                  "Lay on an inclined bench and lower the barbell to your upper chest, then push it back up until your arms are fully extended.",
                category: "compound",
                slug: "incline-barbell-bench-press",
                videoUrls: [],
              },
            ],
            slug: "barbell-flat-bench-press",
            videoUrls: [
              "https://www.youtube.com/watch?v=BYKScL2sgCs&ab_channel=AlanThrall",
            ],
          },
        },
      ],
    },
    4: null,
    5: {
      name: "Upper Body",
      workouts: [
        {
          order: 1,
          reps: 12,
          sets: 4,
          exercise: {
            id: "4432",
            name: "Barbell Flat Bench Press",
            poster:
              "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-bench-press-front_q2q0T12.png",
            gifUrl:
              "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1",
            description:
              "Flat bench press using the barbell to target the chest muscles, primarily the mid section.",
            directions:
              "Lie flat on a bench rack and lower and push the bar upward until the arms are extended.",
            category: "compound",
            alternatives: [
              {
                id: "blabla",
                name: "Incline Barbell Bench Press",
                poster:
                  "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-bench-press-front_q2q0T12.png",
                gifUrl:
                  "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1",
                description:
                  "The incline bench press with a barbell focuses on the upper chest. Use an inclined bench to perform this exercise.",
                directions:
                  "Lay on an inclined bench and lower the barbell to your upper chest, then push it back up until your arms are fully extended.",
                category: "compound",
                slug: "incline-barbell-bench-press",
                videoUrls: [],
              },
            ],
            slug: "barbell-flat-bench-press",
            videoUrls: [
              "https://www.youtube.com/watch?v=BYKScL2sgCs&ab_channel=AlanThrall",
            ],
          },
        },
        {
          order: 2,
          reps: 12,
          sets: 4,
          exercise: {
            id: "sdasd55",
            name: "Barbell Flat Bench Press",
            poster:
              "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-bench-press-front_q2q0T12.png",
            gifUrl:
              "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1",
            description:
              "Flat bench press using the barbell to target the chest muscles, primarily the mid section.",
            directions:
              "Lie flat on a bench rack and lower and push the bar upward until the arms are extended.",
            category: "compound",
            alternatives: [
              {
                id: "blabla",
                name: "Incline Barbell Bench Press",
                poster:
                  "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-bench-press-front_q2q0T12.png",
                gifUrl:
                  "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1",
                description:
                  "The incline bench press with a barbell focuses on the upper chest. Use an inclined bench to perform this exercise.",
                directions:
                  "Lay on an inclined bench and lower the barbell to your upper chest, then push it back up until your arms are fully extended.",
                category: "compound",
                slug: "incline-barbell-bench-press",
                videoUrls: [],
              },
            ],
            slug: "barbell-flat-bench-press",
            videoUrls: [
              "https://www.youtube.com/watch?v=BYKScL2sgCs&ab_channel=AlanThrall",
            ],
          },
        },
        {
          order: 3,
          reps: 12,
          sets: 4,
          exercise: {
            id: "sdas89879d",
            name: "Barbell Flat Bench Press",
            poster:
              "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-bench-press-front_q2q0T12.png",
            gifUrl:
              "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1",
            description:
              "Flat bench press using the barbell to target the chest muscles, primarily the mid section.",
            directions:
              "Lie flat on a bench rack and lower and push the bar upward until the arms are extended.",
            category: "compound",
            alternatives: [
              {
                id: "blabla",
                name: "Incline Barbell Bench Press",
                poster:
                  "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-bench-press-front_q2q0T12.png",
                gifUrl:
                  "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1",
                description:
                  "The incline bench press with a barbell focuses on the upper chest. Use an inclined bench to perform this exercise.",
                directions:
                  "Lay on an inclined bench and lower the barbell to your upper chest, then push it back up until your arms are fully extended.",
                category: "compound",
                slug: "incline-barbell-bench-press",
                videoUrls: [],
              },
            ],
            slug: "barbell-flat-bench-press",
            videoUrls: [
              "https://www.youtube.com/watch?v=BYKScL2sgCs&ab_channel=AlanThrall",
            ],
          },
        },
      ],
    },
    6: null,
    7: null,
  },
};
