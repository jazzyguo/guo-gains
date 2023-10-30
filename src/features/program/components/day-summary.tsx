import { memo } from "react";
import { type Day, type Workout } from "../types/program";
import { ExerciseVideo } from "./exercise-video";

type Props = {
    day: Day;
};

const _DaySummary = ({ day }: Props) => (
    <div>
        {day ? (
            <div>
                {day.workouts.map((workout: Workout) => {
                    const { order, reps, sets, exercise } = workout

                    if (!exercise) {
                        return null
                    }

                    const { name, description, directions } = exercise

                    return (
                        <div key={order}>
                            <h3>Workout {order}</h3>
                            <p>Reps: {reps - 4} - {reps}</p>
                            <p>Sets: {sets}</p>
                            <p>Exercise Name: {name}</p>
                            <p>Description: {description}</p>
                            <p>Directions: {directions}</p>
                            <ExerciseVideo exercise={exercise} />
                        </div>
                    )
                })}
            </div>
        ) : (
            <div>REST</div>
        )}
    </div>
);

export const DaySummary = memo(_DaySummary);
