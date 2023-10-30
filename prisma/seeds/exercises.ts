import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type ExerciseSeed = {
  name: string;
  thumbnail: string;
  description: string;
  directions: string;
  alternatives?: string[];
  tags?: string[];
  video_urls?: string[];
  slug: string;
  category: "compound" | "accessory" | "body-weight";
};

const exercises: ExerciseSeed[] = [
  {
    name: "Barbell Flat Bench Press",
    thumbnail:
      "https://exrx.glorb.com/api/video/35d06c42c889f550e5bd3611373ba56b/10697",
    description:
      "Flat bench press using the barbell to target the chest muscles, primarily the mid section.",
    directions:
      "Lie flat on a bench rack and lower and push the bar upward until the arms are extended.",
    category: "compound",
    alternatives: ["incline-barbell-bench-press"],
    tags: ["chest-mid", "push"],
    slug: "barbell-flat-bench-press",
  },
  {
    name: "Incline Barbell Bench Press",
    thumbnail:
      "https://exrx.glorb.com/api/video/ca20635c5fe163afb4408b7bedf9b5b7/10801",
    description:
      "The incline bench press with a barbell focuses on the upper chest. Use an inclined bench to perform this exercise.",
    directions:
      "Lay on an inclined bench and lower the barbell to your upper chest, then push it back up until your arms are fully extended.",
    alternatives: ["barbell-flat-bench-press"],
    tags: ["chest-upper", "push"],
    category: "compound",
    slug: "incline-barbell-bench-press",
  },
  {
    name: "Flat Dumbbell Press",
    thumbnail:
      "https://exrx.glorb.com/api/video/26ab73a99f0acab11ec53ff4e88ab1d3/10723",
    description:
      "The flat dumbbell press is a great exercise for targeting the chest muscles. It is performed using dumbbells on a flat bench.",
    directions:
      "Lie flat on a bench, hold a dumbbell in each hand, and press them upwards until your arms are fully extended.",
    slug: "flat-dumbbell-press",
    tags: ["chest-mid", "push"],
    alternatives: ["incline-dumbbell-press"],
    category: "accessory",
  },
  {
    name: "Incline Dumbbell Press",
    thumbnail:
      "https://exrx.glorb.com/api/video/29d597389a59c063032c2c21055ebd46/10815",
    description:
      "Performing the incline dumbbell press on an inclined bench is a great way to work your upper chest muscles.",
    directions:
      "Lie on an inclined bench, hold a dumbbell in each hand, and press them upwards, targeting your upper chest.",
    slug: "incline-dumbbell-press",
    category: "accessory",
    alternatives: ["flat-dumbbell-press", "push"],
    tags: ["chest-upper", "accessory"],
  },
  {
    name: "Pec Dec",
    thumbnail:
      "https://exrx.glorb.com/api/video/adaa4bacbe79f8c4efe0a338b5e538e2/10750",
    description:
      "Pec-Decs, or pec deck flyes, target the chest muscles and are performed on a specialized machine.",
    directions:
      "Sit at the pec-dec machine, grasp the handles, and bring them together in front of your chest, squeezing your pectoral muscles.",
    slug: "pec-dec",
    category: "accessory",
    tags: ["chest-upper", "chest-mid", "push"],
    alternatives: [
      "cable-standing-fly",
      "cable-seated-fly",
      "dumbbell-incline-fly",
    ],
  },
  {
    name: "Cable Standing Fly",
    thumbnail:
      "https://exrx.glorb.com/api/video/d0db7c490da017e81fff712630771892/10717",
    description:
      "The cable standing fly is a chest exercise that helps develop chest muscles using a cable machine.",
    directions:
      "Stand in front of the cable machine, grab the handles, and bring them together, squeezing your chest muscles.",
    slug: "cable-standing-fly",
    tags: ["chest-mid", "push"],
    category: "accessory",
    alternatives: ["pec-dec", "cable-seated-fly", "dumbbell-incline-fly"],
  },
  {
    name: "Cable Seated Fly",
    thumbnail:
      "https://exrx.glorb.com/api/video/b31bfbf86b3be44013b1b8e20bd95b61/10713",
    description:
      "The cable seated fly is an effective chest exercise using a cable machine while seated.",
    directions:
      "Sit at the cable machine, grab the handles, and bring them together to work your chest muscles.",
    slug: "cable-seated-fly",
    alternatives: ["cable-standing-fly", "pec-dec", "dumbbell-incline-fly"],
    category: "accessory",
    tags: ["push", "chest-mid"],
  },
  {
    name: "Dumbbell Incline Fly",
    thumbnail:
      "https://exrx.glorb.com/api/video/110e3250e5ca3e657b55a977d94e2620/10816",
    description:
      "Perform the dumbbell incline fly on an inclined bench to target your chest muscles.",
    directions:
      "Lie on an inclined bench, hold a dumbbell in each hand, and perform a fly motion to work your chest.",
    slug: "dumbbell-incline-fly",
    alternatives: ["pec-dec", "cable-seated-fly", "cable-standing-fly"],
    category: "accessory",
    tags: ["push", "chest-upper"],
  },
  {
    name: "Front Delt Dumbbell Raise",
    thumbnail:
      "https://exrx.glorb.com/api/video/4ad25b732432c380f1bf9a60e059414d/9308",
    description:
      "The front delt dumbbell raise is an exercise for the front deltoid muscles. Hold a dumbbell in each hand and lift them forward.",
    directions:
      "Hold a dumbbell in each hand, stand upright, and lift the dumbbells forward until they reach shoulder height.",
    slug: "front-delt-dumbbell-raise",
    alternatives: [],
    category: "accessory",
    tags: ["push", "deltoids-front"],
  },
  {
    name: "Seated Lateral Delt Dumbbell Raise",
    thumbnail:
      "https://exrx.glorb.com/api/video/c31c9fa0e67e0ad9e12f12bbf108b9c5/11074",
    description:
      "The seated lateral delt dumbbell raise targets the lateral deltoid muscles while seated.",
    directions:
      "Sit on a bench, hold a dumbbell in each hand, and raise them to the sides until shoulder level to work the lateral delts.",
    slug: "seated-lateral-delt-dumbbell-raise",
    alternatives: ["standing-lateral-delt-dumbbell-raise"],
    category: "accessory",
    tags: ["push", "deltoids-side"],
  },
  {
    name: "Standing Lateral Delt Dumbbell Raise",
    thumbnail:
      "https://exrx.glorb.com/api/video/ec06b814c79ba060eaa05662d4ee9dbf/9354",
    description:
      "The standing lateral delt dumbbell raise is an effective exercise for the lateral deltoid muscles.",
    directions:
      "Stand upright, hold a dumbbell in each hand, and raise them to the sides until shoulder level to target the lateral delts.",
    slug: "standing-lateral-delt-dumbbell-raise",
    alternatives: ["seated-lateral-delt-dumbbell-raise"],
    category: "accessory",
    tags: ["push", "deltoids-side"],
  },
  {
    name: "Tricep Cable Extension Overhead",
    thumbnail:
      "https://exrx.glorb.com/api/video/8d6ce2c72764e0e193085144a1445fce/9519",
    description:
      "The tricep cable extension overhead targets the tricep muscles. Use a cable machine to perform this exercise.",
    directions:
      "Stand in front of a cable machine, hold the rope attachment, and extend your arms overhead to work the triceps.",
    slug: "tricep-cable-extension-overhead",
    alternatives: [
      "tricep-cable-extension-pull-down",
      "tricep-cable-extension-pull-down-one-arm",
      "tricep-dumbbell-kickback",
      "tricep-single-overhead-dumbbell-extension",
    ],
    tags: ["triceps", "push"],
    category: "accessory",
  },
  {
    name: "Tricep Cable Extension Pull Down",
    thumbnail:
      "https://exrx.glorb.com/api/video/5cc6234c7ca0e098f4a4ff6655644922/9530",
    description:
      "The tricep cable extension pull down is an effective exercise for the tricep muscles using a cable machine.",
    directions:
      "Sit at a cable machine, hold the bar attachment, and pull it down to work your triceps effectively.",
    slug: "tricep-cable-extension-pull-down",
    alternatives: [
      "tricep-cable-extension-overhead",
      "tricep-cable-extension-pull-down-one-arm",
      "tricep-dumbbell-kickback",
      "tricep-single-overhead-dumbbell-extension",
    ],
    tags: ["triceps", "push"],
    category: "accessory",
  },
  {
    name: "Tricep Cable Extension Pull Down One Arm",
    thumbnail:
      "https://exrx.glorb.com/api/video/2a81bb28bc214057c32187d277dd2fbf/9527",
    description:
      "The one-arm tricep cable extension pull down is a unilateral exercise targeting the triceps.",
    directions:
      "Sit at a cable machine, hold a single handle, and perform tricep extensions one arm at a time for balanced tricep development.",
    slug: "tricep-cable-extension-pull-down-one-arm",
    alternatives: [
      "tricep-cable-extension-overhead",
      "tricep-cable-extension-pull-down",
      "tricep-dumbbell-kickback",
      "tricep-single-overhead-dumbbell-extension",
    ],
    tags: ["triceps", "push"],
    category: "accessory",
  },
  {
    name: "Tricep Dumbbell Kickback",
    thumbnail:
      "https://exrx.glorb.com/api/video/0e8ad887f4ce24511e2f302c6eca0bc1/9543",
    description:
      "The tricep dumbbell kickback is a great isolation exercise for the triceps. Use a dumbbell in each hand for this exercise.",
    directions:
      "Hold a dumbbell in each hand, hinge at the hips, and extend your arms backward to work the triceps effectively.",
    slug: "tricep-dumbbell-kickback",
    alternatives: [
      "tricep-cable-extension-overhead",
      "tricep-cable-extension-pull-down",
      "tricep-cable-extension-pull-down-one-arm",
      "tricep-single-overhead-dumbbell-extension",
    ],
    tags: ["triceps", "push"],
    category: "accessory",
  },
  {
    name: "Tricep Single Overhead Dumbbell Extension",
    thumbnail:
      "https://exrx.glorb.com/api/video/76212f49465b27c1c0631ba253ec64a6/9545",
    description:
      "The single overhead dumbbell extension targets the triceps. Use a dumbbell in one hand for this exercise.",
    directions:
      "Hold a dumbbell in one hand, extend your arm overhead, and lower the dumbbell behind your head to work the triceps.",
    slug: "tricep-single-overhead-dumbbell-extension",
    alternatives: [
      "tricep-cable-extension-overhead",
      "tricep-cable-extension-pull-down",
      "tricep-cable-extension-pull-down-one-arm",
      "tricep-dumbbell-kickback",
    ],
    tags: ["triceps", "push"],
    category: "accessory",
  },
  {
    name: "Chest Dip",
    thumbnail:
      "https://exrx.glorb.com/api/video/65734118a27f8424f1d37e65854f8d64/10772",
    description:
      "The chest dip is an effective exercise for chest development. Perform it using parallel bars.",
    directions:
      "Use parallel bars, support your body between them, and lower your body until your upper arms are parallel to the ground.",
    slug: "chest-dip",
    alternatives: [],
    category: "body-weight",
    tags: ["push", "chest-lower"],
  },
  {
    name: "Deadlift",
    thumbnail:
      "https://exrx.glorb.com/api/video/6a44e8c3518a436899264707526cd62c/10458",
    description:
      "The deadlift is a compound exercise that targets multiple muscle groups, including the back, legs, and glutes.",
    directions:
      "Stand with a barbell on the floor, bend at the hips and knees, and lift the barbell by extending your hips and knees.",
    slug: "deadlift",
    category: "compound",
    tags: ["pull", "hamstrings", "back-upper", "back-lower"],
    alternatives: [],
  },
  {
    name: "Bent-Over Overhand Barbell Row",
    thumbnail:
      "https://exrx.glorb.com/api/video/c698b24484e2d987fede4c8a968137e0/9663",
    description:
      "The bent-over overhand barbell row is an effective exercise for the upper back and lats.",
    directions:
      "Bend at the hips, hold a barbell with an overhand grip, and pull the barbell towards your lower chest while keeping your back straight.",
    slug: "bentover-overhand-barbell-row",
    alternatives: ["bentover-underhand-barbell-row"],
    tags: ["pull", "lats", "back-upper"],
    category: "accessory",
  },
  {
    name: "Bent-Over Underhand Barbell Row",
    thumbnail:
      "https://exrx.glorb.com/api/video/3c1394259cbcf18709bbb822b14970a9/9665",
    description:
      "The bent-over underhand barbell row targets the upper back and lats with an underhand grip.",
    directions:
      "Bend at the hips, hold a barbell with an underhand grip, and pull the barbell towards your lower chest while maintaining a straight back.",
    slug: "bentover-underhand-barbell-row",
    alternatives: ["bentover-overhand-barbell-row"],
    tags: ["pull", "lats", "back-upper"],
    category: "accessory",
  },
  {
    name: "Lat Pulldown Machine",
    thumbnail:
      "https://exrx.glorb.com/api/video/0275568b24e4b5f55cc28ad18d1c7495/9769",
    description:
      "The lat pulldown machine is used to target the latissimus dorsi muscles in the back.",
    directions:
      "Sit at the lat pulldown machine, grasp the bar, and pull it down to your chest, engaging your lats.",
    slug: "lat-pulldown-machine",
    alternatives: ["closegrip-lat-pulldown", "cable-bentover-pullovers"],
    tags: ["pull", "lats", "back-upper", "back-lower"],
    category: "accessory",
  },
  {
    name: "Close-Grip Lat Pulldown",
    thumbnail:
      "https://exrx.glorb.com/api/video/881a689467c0169bac49e518ba96dd0c/9767",
    description:
      "The close-grip lat pulldown variation emphasizes the close-grip attachment to work the middle and upper back.",
    directions:
      "Use the close-grip attachment on the lat pulldown machine and pull the bar down to your chest to target the upper back muscles.",
    slug: "closegrip-lat-pulldown",
    alternatives: ["lat-pulldown-machine", "cable-bentover-pullovers"],
    tags: ["pull", "back-upper", "lats"],
    category: "accessory",
  },
  {
    name: "Cable Bent-Over Pullovers",
    thumbnail:
      "https://exrx.glorb.com/api/video/9fe96adbd229806d8bc65fb03dde8db8/9766",
    description:
      "Cable bent-over pullovers are effective for targeting the lats and chest muscles.",
    directions:
      "Stand in front of a cable machine, hold the bar attachment, and pull it downwards while bending over to engage the lats and chest.",
    slug: "cable-bentover-pullovers",
    alternatives: ["lat-pulldown-machine", "closegrip-lat-pulldown"],
    tags: ["pull", "lats", "back-lower"],
    category: "accessory",
  },
  {
    name: "Seated Row",
    thumbnail:
      "https://exrx.glorb.com/api/video/477c79dd928131d2fc9f75a31a756eb8/9705",
    description:
      "The seated row exercise works the upper back and mid-back muscles using a cable machine.",
    directions:
      "Sit at the cable machine, hold the handles, and pull them towards your torso, squeezing your back muscles.",
    slug: "seated-row",
    alternatives: ["chest-supported-dumbbell-incline-row"],
    tags: ["pull", "lats", "back-upper"],
    category: "accessory",
  },
  {
    name: "Chest Supported Dumbbell Incline Row",
    thumbnail:
      "https://exrx.glorb.com/api/video/f849288a07f2968aec4e0b49d879392e/11534",
    description:
      "The chest-supported dumbbell incline row is an effective exercise to target the upper back and rear deltoid muscles. It is performed on an incline bench with dumbbells.",
    directions:
      "Lie face down on an incline bench, grasp a dumbbell in each hand, and row them toward your hips while squeezing your shoulder blades together.",
    slug: "chest-supported-dumbbell-incline-row",
    alternatives: ["seated-row"],
    tags: ["pull", "lats", "back-upper"],
    category: "accessory",
  },
  {
    name: "Dumbbell Rear Lateral Raise",
    thumbnail:
      "https://exrx.glorb.com/api/video/3c51f340d3ef6e27d4936a3ee4843097/9445",
    description:
      "The dumbbel rear lateral raises are an effective exercise to target your rear delts. It is performed standing up and bent over.",
    directions:
      "Grasp dumbbells to each side. Bend knees and bend over through hips with back flat, close to horizontal. Position elbows with slight bend and palms facing together.",
    slug: "dumbbell-rear-lateral-raise",
    alternatives: ["seated-reverse-fly-machine"],
    category: "accessory",
    tags: ["pull", "deltoids-rear"],
  },
  {
    name: "Seated Reverse Fly Machine",
    thumbnail:
      "https://exrx.glorb.com/api/video/fb20594f953306c97447ce07e9f6b10e/9517",
    description:
      "Uses the pec dec machine to establish a setup for range of motion targeting your rear delts.",
    directions:
      "Sit on machine with chest against pad. Grasp horizontal handles with overhand grip at shoulder height. Internally rotate shoulders so elbows are also at height of shoulders.",
    slug: "seated-reverse-fly-machine",
    alternatives: ["dumbbell-rear-lateral-raise"],
    category: "accessory",
    tags: ["pull", "deltoids-rear"],
  },
  {
    name: "Chin Up",
    thumbnail:
      "https://exrx.glorb.com/api/video/22dfd0671692d06df01627f86edcdde8/9763",
    description:
      "Chin-ups are a classic bodyweight exercise that primarily targets the biceps and back muscles. Use a pull-up bar to perform this exercise.",
    directions:
      "Hang from a pull-up bar with your palms facing you, and pull your body upward until your chin is above the bar, then lower yourself back down.",
    slug: "chin-up",
    alternatives: ["pull-up"],
    tags: ["pull", "lats", "back-upper", "biceps"],
    category: "body-weight",
  },
  {
    name: "Pull Up",
    thumbnail:
      "https://exrx.glorb.com/api/video/7bba28e6c50cf51998959c00979628eb/9760",
    description:
      "Pull-ups are another effective bodyweight exercise that works the back and biceps. Similar to chin-ups but with a wider grip.",
    directions:
      "Hang from a pull-up bar with your palms facing away from you, and pull your body upward until your chin is above the bar, then lower yourself back down.",
    slug: "pull-up",
    alternatives: ["chin-up"],
    tags: ["pull", "lats", "back-upper"],
    category: "body-weight",
  },
  {
    name: "Standing Barbell Curl",
    thumbnail:
      "https://exrx.glorb.com/api/video/ea4b01f3f6b40c3d81e079549bd0b13f/9617",
    description:
      "The standing barbell curl is a classic bicep exercise that isolates the biceps. Use a barbell to perform this exercise.",
    directions:
      "Stand with a straight back, hold a barbell with an underhand grip, and curl the barbell upward while keeping your elbows close to your body.",
    slug: "standing-barbell-curl",
    alternatives: ["seated-incline-dumbbell-curl", "barbell-preacher-curl"],
    tags: ["biceps", "pull"],
    category: "accessory",
  },
  {
    name: "Seated Incline Dumbbell Curl",
    thumbnail:
      "https://exrx.glorb.com/api/video/9f989fe72ee5b6aa2ecd55ec0f8d0dc4/9627",
    description:
      "Seated incline dumbbell curls are a great exercise to target the biceps. Perform them on an incline bench with dumbbells.",
    directions:
      "Sit on an incline bench, hold a dumbbell in each hand, and curl the dumbbells upward while keeping your upper arms stationary.",
    slug: "seated-incline-dumbbell-curl",
    alternatives: ["standing-barbell-curl", "barbell-preacher-curl"],
    tags: ["biceps", "pull"],
    category: "accessory",
  },
  {
    name: "Barbell Preacher Curl",
    thumbnail:
      "https://exrx.glorb.com/api/video/d1dde513dcf888cf8d4407ee03037fba/9630",
    description:
      "The barbell preacher curl isolates the biceps and is performed using a preacher bench and a barbell.",
    directions:
      "Sit at a preacher bench, place your upper arms on the pad, and curl the barbell upward while keeping your upper arms stationary.",
    slug: "barbell-preacher-curl",
    alternatives: ["standing-barbell-curl", "seated-incline-dumbbell-curl"],
    tags: ["biceps", "pull"],
    category: "accessory",
  },
  {
    name: "Dumbbell Shrugs",
    thumbnail:
      "https://exrx.glorb.com/api/video/aff64bfce390d2dbaf87041b275865cd/9755",
    description:
      "Dumbbell shrugs target the trapezius muscles. Hold a dumbbell in each hand and perform shrugging motions.",
    directions:
      "Stand with a dumbbell in each hand, and shrug your shoulders upward while keeping your arms straight and your back straight.",
    slug: "dumbbell-shrugs",
    alternatives: [],
    tags: ["pull", "traps"],
    category: "accessory",
  },
  {
    name: "Barbell Squat",
    thumbnail:
      "https://exrx.glorb.com/api/video/2a51f21165d41318596ff1910e8de10e/10080",
    description:
      "The barbell squat is a compound lower-body exercise that targets the quadriceps, hamstrings, and glutes. Use a barbell to perform this exercise.",
    directions:
      "Place a barbell on your upper back, squat down by bending your knees, and then stand back up while keeping your back straight.",
    slug: "barbell-squat",
    category: "compound",
    tags: ["glutes", "quads"],
    alternatives: [],
  },
  {
    name: "Romanian Deadlift",
    thumbnail:
      "https://exrx.glorb.com/api/video/730c1af6cabf961f2f2073723ce4e581/10871",
    description:
      "The Romanian deadlift is a great exercise for the hamstrings and lower back. It is performed with a barbell.",
    directions:
      "Hold a barbell with an overhand grip, bend at your hips, and lower the barbell while keeping your back straight, then return to the upright position.",
    slug: "romanian-deadlift",
    category: "accessory",
    alternatives: [],
    tags: ["hamstrings"],
  },
  {
    name: "Leg Press Machine",
    thumbnail:
      "https://exrx.glorb.com/api/video/92d2df652efc20243d4bd2afd6f0da8d/10305",
    description:
      "The leg press machine is a compound exercise that targets the quadriceps and hamstrings. It is performed using a leg press machine.",
    directions:
      "Sit on the leg press machine, push the weight upward with your feet, and then return the weight to the starting position by bending your knees.",
    slug: "leg-press-machine",
    alternatives: [],
    tags: ["quads", "glutes"],
    category: "accessory",
  },
  {
    name: "Leg Extension",
    thumbnail:
      "https://exrx.glorb.com/api/video/cfcc03f987512debc7b72271ed9b22fd/10177",
    description:
      "The leg extension exercise isolates the quadriceps and is performed on a leg extension machine.",
    directions:
      "Sit on the leg extension machine, extend your legs forward to lift the weight, and then return to the starting position by bending your knees.",
    slug: "leg-extension",
    alternatives: [],
    tags: ["quads"],
    category: "accessory",
  },
  {
    name: "Leg Curl",
    thumbnail:
      "https://exrx.glorb.com/api/video/417ad6d59720afb04672c7ef95407b0d/10076",
    description:
      "Leg curls target the hamstrings and are performed using a leg curl machine.",
    directions:
      "Lie face down on the leg curl machine, curl your legs upward to lift the weight, and then return to the starting position.",
    slug: "leg-curl",
    alternatives: [],
    tags: ["hamstrings"],
    category: "accessory",
  },
  {
    name: "Hip Adduction",
    thumbnail:
      "https://exrx.glorb.com/api/video/89a4e761b41da49c752d3aeca71b2e88/9845",
    description:
      "Hip adduction exercises target the inner thigh muscles and are performed on a hip adduction machine.",
    directions:
      "Sit on the hip adduction machine, press your legs inward against the resistance, and then return your legs to the starting position.",
    slug: "hip-adduction",
    alternatives: ["hip-abduction"],
    tags: ["hips"],
    category: "accessory",
  },
  {
    name: "Hip Abduction",
    thumbnail:
      "https://exrx.glorb.com/api/video/0ba8f34a542812d6f7e814d062f7823d/9837",
    description:
      "Hip abduction exercises target the outer thigh muscles and are performed on a hip abduction machine.",
    directions:
      "Sit on the hip abduction machine, press your legs outward against the resistance, and then return your legs to the starting position.",
    slug: "hip-abduction",
    alternatives: ["hip-adduction"],
    tags: ["hips"],
    category: "accessory",
  },
  {
    name: "Seated Calf Press",
    thumbnail:
      "https://exrx.glorb.com/api/video/3a39fc9b7a3731a9e97a016c4afd9218/9962",
    description:
      "Seated calf presses target the calf muscles and are performed on a seated calf press machine.",
    directions:
      "Sit on the seated calf press machine, press the weight upward with your calf muscles, and then return to the starting position.",
    slug: "seated-calf-press",
    alternatives: [],
    tags: ["calves"],
    category: "accessory",
  },
];

export const SeedExercises = async () => {
  try {
    for (const {
      name,
      slug,
      category,
      thumbnail,
      description,
      directions,
      tags: tagSlugs,
    } of exercises) {
      // find tags
      const tags = await prisma.baseTag.findMany({
        where: { slug: { in: tagSlugs } },
      });

      // create exercises with tags
      await prisma.exercise.create({
        data: {
          name,
          slug,
          category,
          thumbnail,
          description,
          directions,
          tags: {
            create: tags.map((t) => ({ slug: t.slug })),
          },
        },
      });
    }

    // add exercise self relation alternatives
    for (const { slug, alternatives } of exercises) {
      const exercise = await prisma.exercise.findFirst({
        where: { slug },
      });

      if (exercise) {
        // find the IDs of the alternative exercises using their slugs
        const alternativeExercises = await prisma.exercise.findMany({
          where: {
            slug: { in: alternatives },
          },
        });

        const alternativeIds = alternativeExercises.map((alt) => ({
          id: alt.id,
        }));

        if (alternativeExercises.length) {
          //Update the exercise in the database with its alternatives
          await prisma.exercise.update({
            where: { id: exercise.id },
            data: {
              alternatives: {
                connect: alternativeIds,
              },
            },
          });
        }
      }
    }
  } catch (error) {
    console.error("Error seeding exercises:", error);
  }
};
