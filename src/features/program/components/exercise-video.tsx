import { memo } from "react";
import { type Exercise } from "@prisma/client"

export const _ExerciseVideo = ({ exercise }: { exercise: Exercise }) => (
    <div>
        <video muted playsInline autoPlay loop poster={exercise.poster!}>
            <source src={exercise.gifUrl!} />
        </video>
        <div>
            <a
                href="https://musclewiki.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400"
            >
                Source
            </a>
        </div>
    </div>
)

export const ExerciseVideo = memo(_ExerciseVideo)
