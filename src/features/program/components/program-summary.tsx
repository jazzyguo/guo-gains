import { memo } from "react"
import { type GeneratedProgram, type DayNumber } from "../types/program"
import { DaySummary } from "./day-summary"

type Props = {
    program: GeneratedProgram;
    selectedDayNumber?: DayNumber;
}

const _ProgramSummary = ({ program, selectedDayNumber }: Props) => {
    const { user, days } = program

    const selectedDayData = selectedDayNumber && days[selectedDayNumber]

    console.log({ selectedDayData })

    return (
        <div>
            {selectedDayNumber &&
                <DaySummary day={selectedDayData} />
            }
        </div>
    )
}

export const ProgramSummary = memo(_ProgramSummary)
