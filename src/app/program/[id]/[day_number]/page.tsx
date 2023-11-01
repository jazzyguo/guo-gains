import { useMemo } from 'react'
import { mockProgram } from "@/mocks/program"
import { ProgramSummary, WorkoutDayNav } from "@/features/program"
import { type NextPage } from "next";
import { redirect } from 'next/navigation'
import { type ProgramDay } from "@/features/program/types";
import { getDayData } from '@/features/program/lib/utils';

interface PageParams {
    id: string;
    day_number: string;
}

const ProgramPage: NextPage<{ params: PageParams }> = ({ params }) => {
    const { day_number: dayNumber, id } = params

    const program = mockProgram

    const { days } = program

    const dayNumberInt = Number(dayNumber)

    if ((dayNumberInt < 1 || dayNumberInt > 7) || isNaN(dayNumberInt)) {
        redirect(`/program/${id}/1`)
    }

    const selectedDay: ProgramDay = useMemo(() =>
        getDayData(days, dayNumberInt)
        , [days, dayNumberInt]
    )

    return (
        <div className="w-full flex flex-col gap-8 items-center pb-8">
            <WorkoutDayNav
                programId={id}
                days={program.days}
                selectedDay={selectedDay}
                dayNumberInt={dayNumberInt}
            />
            <div className="container text-lg flex flex-col items-center mx-auto max-w-screen-lg">
                <ProgramSummary
                    program={program}
                    selectedDay={selectedDay}
                />
            </div>
        </div>
    )
}

export default ProgramPage