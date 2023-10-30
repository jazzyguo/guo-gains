import { mockProgram } from "@/mocks/program"
import { ProgramSummary, WorkoutDayNav } from "@/features/program"
import { type NextPage } from "next";
import { redirect } from 'next/navigation'
import { type DayNumber } from "@/features/program/types/program";

interface PageParams {
    id: string;
    day_number: string;
}

const ProgramPage: NextPage<{ params: PageParams }> = ({ params }) => {
    const { day_number: dayNumber, id } = params

    const program = mockProgram

    const dayNumberInt = Number(dayNumber)

    if ((dayNumberInt < 1 || dayNumberInt > 7) || isNaN(dayNumberInt)) {
        redirect(`/program/${id}/1`)
    }

    return (
        <div className="w-full flex flex-col gap-8 items-center pb-8">
            <WorkoutDayNav
                programId={id}
                days={program.days}
                selectedDayNumber={dayNumber as DayNumber}
            />
            <div className="container text-lg flex flex-col items-center mx-auto max-w-screen-lg">
                <ProgramSummary
                    program={program}
                    selectedDayNumber={dayNumber as DayNumber}
                />
            </div>
        </div>
    )
}

export default ProgramPage