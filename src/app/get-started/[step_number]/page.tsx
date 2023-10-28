"use client"

import { type NextPage } from "next";
import { GetStartedFormWizard } from '@/features/get-started';
import { UnitProvider } from "@/contexts/unit-context";

interface PageParams {
    step_number: string;
}

const StepPage: NextPage<{ params: PageParams }> = ({ params }) => {
    const { step_number } = params;

    const currentStep = parseInt(step_number, 10);

    return (
        <UnitProvider>
            <GetStartedFormWizard currentStep={currentStep} />
        </UnitProvider>
    )
};

export default StepPage;
