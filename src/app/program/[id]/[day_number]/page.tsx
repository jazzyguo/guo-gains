import { ProgramWorkoutSummary, WorkoutDayNav } from "@/features/program"
import { type NextPage } from "next";
import { redirect } from 'next/navigation'
import { type ProgramDay } from "@/features/program/types";
import { getDayData } from '@/features/program/lib/utils';
import { getProgram } from '@/features/program/api/get-program';

interface PageParams {
    id: string;
    day_number: string;
}

const ProgramPage: NextPage<{ params: PageParams }> = async ({ params }) => {
    const { day_number: dayNumber, id } = params

    const program = await getProgram(id)

    if (!program) {
        throw new Error('Program not found')
    }

    const { days } = program

    const dayNumberInt = Number(dayNumber)

    if ((dayNumberInt < 1 || dayNumberInt > 7) || isNaN(dayNumberInt)) {
        redirect(`/program/${id}/1`)
    }

    const selectedDay: ProgramDay = getDayData(days, dayNumberInt)

    return (
        <div className="w-full flex flex-col gap-8 items-center pb-8">
            <WorkoutDayNav
                programId={id}
                days={program.days}
                selectedDay={selectedDay}
                dayNumberInt={dayNumberInt}
            />
            <div className="container text-lg flex flex-col items-center mx-auto max-w-screen-lg">
                <ProgramWorkoutSummary
                    day={selectedDay}
                />
            </div>
        </div>
    )
}

export default ProgramPage