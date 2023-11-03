import { PrismaClient, type Exercise } from "@prisma/client";
const prisma = new PrismaClient();

type ExerciseSeed = Omit<Exercise, "id" | "videoUrls"> & {
  alternatives?: string[];
  tags?: string[];
  videoUrls?: string[];
  category: "compound" | "accessory" | "body-weight" | "cardio";
};

const exercises: ExerciseSeed[] = [
  {
    name: "Barbell Flat Bench Press",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-barbell-bench-press-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-front.mp4#t=0.1",
    description:
      "Flat bench press using the barbell to target the chest muscles, primarily the mid section.",
    directions:
      "Lie flat on a bench rack and lower and push the bar upward until the arms are extended.",
    category: "compound",
    alternatives: ["incline-barbell-bench-press"],
    tags: ["chest-mid", "push"],
    slug: "barbell-flat-bench-press",
    videoUrls: [
      "https://www.youtube.com/watch?v=BYKScL2sgCs&ab_channel=AlanThrall",
    ],
  },
  {
    name: "Incline Barbell Bench Press",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Barbell-barbell-incline-bench-press-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-incline-bench-press-side.mp4#t=0.1",
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
    name: "Barbell Overhead Press",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-barbell-overhead-press-front_wHKQjdY.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-front_wHKQjdY.mp4#t=0.1",
    description:
      "The barbell overhead press with a barbell focuses on the shoulders.",
    directions:
      "Stand upright with a barbell to your upper chest, ideally placed on a power rack, then push it up until your arms are fully extended and back down.",
    alternatives: [],
    tags: ["push", "deltoids-front", "deltoids-side"],
    category: "compound",
    slug: "barbell-overhead-press",
  },
  {
    name: "Flat Dumbbell Press",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-dumbbell-bench-press-side_rqe1iTe.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-bench-press-side_rqe1iTe.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-bench-press-front_q2q0T12.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-cable-pec-fly-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-cable-pec-fly-front.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-cable-pec-fly-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-cable-pec-fly-front.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Cables-cable-incline-chest-fly-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-incline-chest-fly-side.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-chest-flys-side_em1D4Db.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-chest-flys-side_em1D4Db.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Dumbbells-dumbbell-front-raise-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-front-raise-side.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Dumbbells-seated-lateral-raise-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-seated-lateral-raise-front.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Dumbbells-dumbbell-lateral-raise-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-lateral-raise-front.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Cables-cable-overhead-tricep-extension-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-overhead-tricep-extension-front.mp4#t=0.1",
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
      "tricep-double-overhead-dumbbell-extension",
    ],
    tags: ["triceps", "push"],
    category: "accessory",
  },
  {
    name: "Tricep Cable Extension Pull Down",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Cables-cable-push-down-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-push-down-front.mp4#t=0.1",
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
      "tricep-double-overhead-dumbbell-extension",
    ],
    tags: ["triceps", "push"],
    category: "accessory",
  },
  {
    name: "Tricep Cable Extension Pull Down One Arm",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Cables-cable-tricep-kickback-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-tricep-kickback-side.mp4#t=0.1",
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
      "tricep-double-overhead-dumbbell-extension",
    ],
    tags: ["triceps", "push"],
    category: "accessory",
  },
  {
    name: "Tricep Dumbbell Kickback",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-dumbbell-tricep-kickback-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-tricep-kickback-side.mp4#t=0.1",
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
      "tricep-double-overhead-dumbbell-extension",
    ],
    tags: ["triceps", "push"],
    category: "accessory",
  },
  {
    name: "Tricep Single Overhead Dumbbell Extension",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-dumbbell-single-arm-overhead-tricep-extension-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-single-arm-overhead-tricep-extension-front.mp4#t=0.1",
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
      "tricep-double-overhead-dumbbell-extension",
    ],
    tags: ["triceps", "push"],
    category: "accessory",
  },
  {
    name: "Tricep Double Overhead Dumbbell Extension",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-dumbbell-overhead-tricep-extension-front_XDCPLIr.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-overhead-tricep-extension-front_XDCPLIr.mp4#t=0.1",
    description:
      "The double overhead dumbbell extension targets the triceps. Use a dumbbell with both hands for this exercise.",
    directions:
      "Hold a dumbbell with both hands, extend your arm overhead, and lower the dumbbell behind your head to work the triceps.",
    slug: "tricep-double-overhead-dumbbell-extension",
    alternatives: [
      "tricep-cable-extension-overhead",
      "tricep-cable-extension-pull-down",
      "tricep-cable-extension-pull-down-one-arm",
      "tricep-dumbbell-kickback",
      "tricep-single-overhead-dumbbell-extension",
    ],
    tags: ["triceps", "push"],
    category: "accessory",
  },
  {
    name: "Chest Dip",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-bodyweight-dips-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-dips-side.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Barbell-barbell-deadlift-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-deadlift-front.mp4#t=0.1",
    description:
      "The deadlift is a compound exercise that targets multiple muscle groups, including the back, legs, and glutes.",
    directions:
      "Stand with a barbell on the floor, bend at the hips and knees, and lift the barbell by extending your hips and knees.",
    slug: "deadlift",
    category: "compound",
    tags: ["pull", "back-upper", "back-lower"],
    alternatives: [],
    videoUrls: [
      "https://www.youtube.com/watch?v=wYREQkVtvEc&ab_channel=AlanThrall",
    ],
  },
  {
    name: "Bent-Over Overhand Barbell Row",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-barbell-pronated-row-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-pronated-row-front.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-barbell-bent-over-row-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bent-over-row-front.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-machine-pulldown-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-machine-pulldown-front.mp4#t=0.1",
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
    name: "Cable Bent-Over Pullovers",
    description:
      "Cable bent-over pullovers are effective for targeting the lats and chest muscles.",
    directions:
      "Stand in front of a cable machine, hold the bar attachment, and pull it downwards while bending over to engage the lats.",
    slug: "cable-bentover-pullovers",
    alternatives: ["lat-pulldown-machine", "closegrip-lat-pulldown"],
    tags: ["pull", "lats", "back-lower"],
    category: "accessory",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Cables-cable-lat-prayer-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-lat-prayer-side.mp4#t=0.1",
  },
  {
    name: "Seated Row",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-machine-seated-cable-row-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-machine-seated-cable-row-side.mp4#t=0.1",
    description:
      "The seated row exercise works the upper back and mid-back muscles using a cable machine.",
    directions:
      "Sit at the cable machine, hold the handles, and pull them towards your torso, squeezing your back muscles.",
    slug: "seated-row",
    alternatives: [
      "chest-supported-dumbbell-incline-row",
      "single-arm-dumbbell-row",
    ],
    tags: ["pull", "lats", "back-upper"],
    category: "accessory",
  },
  {
    name: "Chest Supported Dumbbell Incline Row",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-dumbbell-laying-incline-row-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-laying-incline-row-side.mp4#t=0.1",
    description:
      "The chest-supported dumbbell incline row is an effective exercise to target the upper back and rear deltoid muscles. It is performed on an incline bench with dumbbells.",
    directions:
      "Lie face down on an incline bench, grasp a dumbbell in each hand, and row them toward your hips while squeezing your shoulder blades together.",
    slug: "chest-supported-dumbbell-incline-row",
    alternatives: ["seated-row", "single-arm-dumbbell-row"],
    tags: ["pull", "lats", "back-upper"],
    category: "accessory",
  },
  {
    name: "Single Arm Dumbbell Row",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Dumbbells-dumbbell-single-arm-row-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-single-arm-row-side.mp4#t=0.1",
    description:
      "The single arm dumbbell incline row is an effective exercise to target the upper back and lats. It is performed on a bench with dumbbells.",
    directions:
      "Start by laying one hand on a bench, grasp a dumbbell in one hand, and row it toward your hips while squeezing your shoulder blades together.",
    slug: "single-arm-dumbbell-row",
    alternatives: ["seated-row", "chest-supported-dumbbell-incline-row"],
    tags: ["pull", "lats", "back-upper"],
    category: "accessory",
  },

  {
    name: "Dumbbell Rear Lateral Raise",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Dumbbells-dumbbell-rear-delt-fly-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-rear-delt-fly-side.mp4#t=0.1",
    description:
      "The dumbbel rear lateral raises are an effective exercise to target your rear delts. It is performed standing up and bent over.",
    directions:
      "Grasp dumbbells to each side. Bend knees and bend over through hips with back flat, close to horizontal. Position elbows with slight bend and palms facing together.",
    slug: "dumbbell-rear-lateral-raise",
    alternatives: ["cable-face-pull"],
    category: "accessory",
    tags: ["pull", "deltoids-rear"],
  },
  {
    name: "Cable Face Pull",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Machine-machine-face-pulls-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Machine-machine-face-pulls-front.mp4#t=0.1",
    description:
      "Face pulls are an effective exercise to burn out and target your rear delts.",
    directions:
      "Facing the pulley, pull the weight towards you while keeping your arms parallel to the ground. Pull your hands back slowly to the sides of your head and return weight to the starting position.",
    slug: "cable-face-pull",
    alternatives: ["dumbbell-rear-lateral-raise"],
    category: "accessory",
    tags: ["pull", "deltoids-rear"],
  },
  {
    name: "Push Up",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-bodyweight-pushup-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pushup-side.mp4#t=0.1",
    description:
      "Push ups are a classic bodyweight exercise that primarily target your chest muscles. You can use the floor for these.",
    directions:
      "Place your hands firmly on the ground and lower yourself down slowly as you keep your elbows tucked in tightly. Exhale as you push back to the starting position",
    slug: "push-up",
    alternatives: [],
    tags: ["push", "chest-mid"],
    category: "body-weight",
  },
  {
    name: "Chin Up",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-bodyweight-chinup-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-chinup-front.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-bodyweight-pullup-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-front.mp4#t=0.1",
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
    name: "Standing Dumbbell Curl",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Dumbbells-dumbbell-curl-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-curl-front.mp4#t=0.1",
    description:
      "The standing dumbbell curl is a classic bicep exercise that isolates the biceps. Use a pair of dumbbells to perform this exercise.",
    directions:
      "Stand with a straight back, hold a dumbbells with an underhand grip, and curl them upward while keeping your elbows close to your body.",
    slug: "standing-dumbbell-curl",
    alternatives: [
      "seated-incline-dumbbell-curl",
      "dumbbell-preacher-curl",
      "standing-barbell-curl",
    ],
    tags: ["biceps", "pull"],
    category: "accessory",
  },
  {
    name: "Standing Barbell Curl",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Barbell-barbell-curl-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-curl-side.mp4#t=0.1",
    description:
      "The standing barbell curl is a classic bicep exercise that isolates the biceps. Use a barbell to perform this exercise.",
    directions:
      "Stand with a straight back, hold a barbell with an underhand grip, and curl the barbell upward while keeping your elbows close to your body.",
    slug: "standing-barbell-curl",
    alternatives: [
      "seated-incline-dumbbell-curl",
      "dumbbell-preacher-curl",
      "standing-dumbbell-cu",
    ],
    tags: ["biceps", "pull"],
    category: "accessory",
  },
  {
    name: "Seated Incline Dumbbell Curl",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-dumbbell-incline-zottman-curl-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-zottman-curl-front.mp4#t=0.1",
    description:
      "Seated incline dumbbell curls are a great exercise to target the biceps. Perform them on an incline bench with dumbbells.",
    directions:
      "Sit on an incline bench, hold a dumbbell in each hand, and curl the dumbbells upward while keeping your upper arms stationary.",
    slug: "seated-incline-dumbbell-curl",
    alternatives: [
      "standing-dumbbell-cu",
      "standing-barbell-curl",
      "dumbbell-preacher-curl",
    ],
    tags: ["biceps", "pull"],
    category: "accessory",
  },
  {
    name: "Dumbbell Preacher Curl",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-dumbbell-single-arm-preacher-curl-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-single-arm-preacher-curl-front.mp4#t=0.1",
    description:
      "The dumbbell preacher curl isolates the biceps and is performed using a bench and a single dumbbell.",
    directions:
      "Sit at a preacher bench, place your upper arms on the pad, and curl the dumbbell upward while keeping your upper arm stationary.",
    slug: "dumbbell-preacher-curl",
    alternatives: ["standing-barbell-curl", "seated-incline-dumbbell-curl"],
    tags: ["biceps", "pull"],
    category: "accessory",
  },
  {
    name: "Dumbbell Shrug",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-dumbbell-shrug-front_8g0TOxX.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-shrug-front_8g0TOxX.mp4#t=0.1",
    description:
      "Dumbbell shrugs target the trapezius muscles. Hold a dumbbell in each hand and perform shrugging motions.",
    directions:
      "Stand with a dumbbell in each hand, and shrug your shoulders upward while keeping your arms straight and your back straight.",
    slug: "dumbbell-shrug",
    alternatives: ["seated-dumbbell-shrug"],
    tags: ["pull", "traps"],
    category: "accessory",
  },
  {
    name: "Seated Dumbbell Shrug",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-dumbbell-seated-shrug-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-shrug-front.mp4#t=0.1",
    description:
      "Dumbbell shrugs target the trapezius muscles. Hold a dumbbell in each hand and perform shrugging motions sitting on a bench.",
    directions:
      "Sit on a bench with a dumbbell in each hand, and shrug your shoulders upward while keeping your arms straight and your back straight.",
    slug: "seated-dumbbell-shrug",
    alternatives: ["dumbbell-shrug"],
    tags: ["pull", "traps"],
    category: "accessory",
  },
  {
    name: "Barbell Squat",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Barbell-barbell-squat-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-squat-front.mp4#t=0.1",
    description:
      "The barbell squat is a compound lower-body exercise that targets the quadriceps, hamstrings, and glutes. Use a barbell to perform this exercise.",
    directions:
      "Place a barbell on your upper back, squat down by bending your knees, and then stand back up while keeping your back straight.",
    slug: "barbell-squat",
    category: "compound",
    tags: ["glutes", "quads"],
    alternatives: [],
    videoUrls: [
      "https://www.youtube.com/watch?v=UFs6E3Ti1jg&ab_channel=AlanThrall",
    ],
  },
  {
    name: "Romanian Deadlift",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Barbell-barbell-romanian-deadlift-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-romanian-deadlift-side.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-machine-leg-press-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/og-male-machine-leg-press-front.png",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-machine-leg-extension-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-machine-leg-extension-front.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-machine-hamstring-curl-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-machine-hamstring-curl-side.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Cables-cable-standing-hip-adduction-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-standing-hip-adduction-front.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Cables-cable-hip-abduction-front.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-hip-abduction-front.mp4#t=0.1",
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
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-machine-seated-calf-raise-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-machine-seated-calf-raise-side.mp4#t=0.1",
    description:
      "Seated calf presses target the calf muscles and are performed on a seated calf press machine.",
    directions:
      "Sit on the seated calf press machine, press the weight upward with your calf muscles, and then return to the starting position.",
    slug: "seated-calf-press",
    alternatives: [],
    tags: ["calves"],
    category: "accessory",
  },
  {
    name: "High-Intensity Interval Training (HIIT)",
    poster: "",
    gifUrl: "",
    description:
      "HIIT is a high-intensity cardio workout that alternates short bursts of intense exercise with brief periods of rest or lower-intensity activity.",
    directions:
      "Perform intense exercises for a short duration (e.g., 30 seconds) followed by a brief rest (e.g., 10 seconds) and repeat.",
    slug: "hiit",
    alternatives: [],
    tags: [],
    category: "cardio",
  },
  {
    name: "Treadmill Running",
    poster: "",
    gifUrl: "",
    description:
      "Treadmill running is a classic cardio exercise that involves running on a motorized treadmill.",
    directions:
      "Set your desired speed and run on the treadmill. Adjust the incline for added intensity.",
    slug: "treadmill-running",
    alternatives: ["stair-master"],
    tags: [],
    category: "cardio",
  },
  {
    name: "Stair Master",
    poster: "",
    gifUrl: "",
    description:
      "The Stair Master is a cardio exercise that involves using a specialized exercise machine with moving stairs to simulate stair climbing.",
    directions:
      "Step onto the Stair Master machine, set your desired intensity level, and start climbing the moving stairs.",
    slug: "stair-master",
    alternatives: ["treadmill-running"],
    tags: [],
    category: "cardio",
  },
  {
    name: "Rowing",
    poster: "",
    gifUrl: "",
    description:
      "Rowing is a full-body cardio workout that involves using a rowing machine with cables to simulate rowing on water.",
    directions:
      "Sit on the rowing machine, grab the handles, and perform a rowing motion with your legs and arms.",
    slug: "rowing",
    alternatives: ["assault-bike"],
    tags: [],
    category: "cardio",
  },
  {
    name: "Assault Bike",
    poster:
      "https://media.musclewiki.com/media/uploads/og-male-Cardio-cardio-assault-bike-side.png",
    gifUrl:
      "https://media.musclewiki.com/media/uploads/videos/branded/male-Cardio-cardio-assault-bike-side.mp4#t=0.1",
    description:
      "The Assault Bike is a cardio exercise that involves using a stationary bike with handles for both upper and lower body workouts. It provides a full-body, high-intensity workout.",
    directions:
      "Sit on the Assault Bike, grip the handles, and pedal with your legs while pushing and pulling the handles to engage your upper body.",
    slug: "assault-bike",
    alternatives: ["rowing"],
    tags: [],
    category: "cardio",
  },
];

export const SeedExercises = async () => {
  try {
    for (const {
      name,
      slug,
      category,
      poster,
      gifUrl,
      description,
      directions,
      videoUrls,
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
          poster,
          gifUrl,
          description,
          directions,
          videoUrls,
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
