-- CreateTable
CREATE TABLE "BaseTag" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "BaseTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "programId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInformation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT,
    "heightCm" INTEGER NOT NULL,
    "heightFt" INTEGER NOT NULL,
    "heightInches" INTEGER NOT NULL,
    "weightKg" DOUBLE PRECISION NOT NULL,
    "weightLbs" DOUBLE PRECISION NOT NULL,
    "fitnessGoal" TEXT,
    "daysCountGoal" INTEGER NOT NULL,
    "currentActivityLevel" TEXT,

    CONSTRAINT "UserInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "directions" TEXT NOT NULL,
    "thumbnail" TEXT,
    "videoUrls" TEXT[],
    "alternativeExerciseId" TEXT,
    "category" TEXT NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciseTag" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "exerciseId" TEXT,

    CONSTRAINT "ExerciseTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkoutDay" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workoutSplitId" TEXT,

    CONSTRAINT "WorkoutDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkoutDayTag" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "workoutDayTagId" TEXT,
    "workoutDayReqTagId" TEXT,

    CONSTRAINT "WorkoutDayTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkoutSplit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "WorkoutSplit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Program" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgramDay" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "day" INTEGER NOT NULL,

    CONSTRAINT "ProgramDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgramDayWorkout" (
    "id" TEXT NOT NULL,
    "programDayId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "reps" INTEGER NOT NULL,
    "sets" INTEGER NOT NULL,

    CONSTRAINT "ProgramDayWorkout_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_programId_key" ON "User"("programId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutDay_name_key" ON "WorkoutDay"("name");

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutSplit_name_key" ON "WorkoutSplit"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInformation" ADD CONSTRAINT "UserInformation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_alternativeExerciseId_fkey" FOREIGN KEY ("alternativeExerciseId") REFERENCES "Exercise"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseTag" ADD CONSTRAINT "ExerciseTag_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutDay" ADD CONSTRAINT "WorkoutDay_workoutSplitId_fkey" FOREIGN KEY ("workoutSplitId") REFERENCES "WorkoutSplit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutDayTag" ADD CONSTRAINT "WorkoutDayTag_workoutDayTagId_fkey" FOREIGN KEY ("workoutDayTagId") REFERENCES "WorkoutDay"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutDayTag" ADD CONSTRAINT "WorkoutDayTag_workoutDayReqTagId_fkey" FOREIGN KEY ("workoutDayReqTagId") REFERENCES "WorkoutDay"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramDay" ADD CONSTRAINT "ProgramDay_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramDayWorkout" ADD CONSTRAINT "ProgramDayWorkout_programDayId_fkey" FOREIGN KEY ("programDayId") REFERENCES "ProgramDay"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramDayWorkout" ADD CONSTRAINT "ProgramDayWorkout_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;
