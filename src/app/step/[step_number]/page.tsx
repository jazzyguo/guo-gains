"use client"

import { type NextPage } from "next";
import { StepFormWizard } from '@/features/steps/components/step-form-wizard';


interface PageParams {
    step_number: string;
}

const StepPage: NextPage<{ params: PageParams }> = ({ params }) => {
    const { step_number } = params;

    const currentStep = parseInt(step_number, 10);

    return (
        <StepFormWizard currentStep={currentStep} />
    )
};

export default StepPage;
