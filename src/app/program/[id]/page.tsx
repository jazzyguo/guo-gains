import { redirect } from 'next/navigation'
import { type NextPage } from "next";

interface PageParams {
    id: string;
}

const ProgramPage: NextPage<{ params: PageParams }> = ({ params }) => {
    const { id } = params
    return redirect(`/program/${id}/1`)
}

export default ProgramPage