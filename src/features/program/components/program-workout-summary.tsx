import { memo } from "react";
import { type ProgramDay, type Workout, type ProgramWorkoutDay } from "../types";
import { ExerciseVideo } from "./exercise-video";
import { RestDay } from "./rest-day";
import { REST_DAY } from "../lib/consts";

type Props = {
    day: ProgramDay;
};

const _ProgramWorkoutSummary = ({ day }: Props) => {
    return (
        <div className="max-w-screen-sm flex flex-col gap-8">
            {day.name !== REST_DAY.name ? (
                (day as ProgramWorkoutDay).workouts.map((workout: Workout) => {
                    const { order, reps, sets, exercise, minutes } = workout

                    if (!exercise) {
                        return null
                    }

                    const { name, description, directions } = exercise

                    return (
                        <div key={order} className="text-base">
                            <div className="text-lg mb-2 md:flex md:items-center font-bold">
                                <span className="md:mr-2 text-primary-accent">
                                    Workout {order}
                                </span>
                                <span className="md:hidden">
                                    <br />
                                </span>
                                <span className="hidden md:inline-block mr-1">-</span>
                                <span>
                                    {name}
                                </span>
                            </div>
                            <ExerciseVideo exercise={exercise} />
                            <div className="flex w-full justify-between">
                                {reps && sets ? (
                                    <>
                                        <p>
                                            <span className="font-bold">Sets: </span>
                                            <span className="text-neutral-500">{sets}</span>
                                        </p>
                                        <p>
                                            <span className="font-bold">Reps: </span>
                                            <span className="text-neutral-500">{reps} - {reps + 4}</span>
                                        </p>
                                    </>
                                )
                                    : (
                                        <p>
                                            <span className="font-bold">Minutes: </span>
                                            <span className="text-neutral-500">{minutes}</span>
                                        </p>
                                    )}
                            </div>
                            <p className="font-bold">Description:</p>
                            <p className="text-neutral-500">{description}</p>
                            <p className="font-bold">Directions:</p>
                            <p className="text-neutral-500">{directions}</p>
                        </div>
                    )
                })
            ) : <RestDay />}
        </div>
    )
}

export const ProgramWorkoutSummary = memo(_ProgramWorkoutSummary);
