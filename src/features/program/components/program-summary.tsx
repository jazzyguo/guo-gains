import { memo } from "react"
import { type GeneratedProgram, type ProgramDay } from "../types"
import { DaySummary } from "./day-summary"

type Props = {
    program: GeneratedProgram;
    selectedDay?: ProgramDay;
}

const _ProgramSummary = ({ program, selectedDay }: Props) => (
    <div>
        {selectedDay &&
            <DaySummary day={selectedDay} />
        }
    </div>
)

export const ProgramSummary = memo(_ProgramSummary)
