"use client"

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { type NextPage } from "next";
import { useStepsStore } from '@/features/steps';
import { useCallback } from 'react';

interface PageParams {
    step_number: string;
}


const StepPage: NextPage<{ params: PageParams }> = ({ params }) => {
    const { step_number } = params

    const router = useRouter()

    const currentStep = useStepsStore(state => state.currentStep)

    const goToCurrentStepUrl = useCallback(() =>
        router.push(`/step/${currentStep}`), [router, currentStep]
    )

    // if the current step in store doesnt match the step we are trying to access, 
    // or the step doesnt exist
    //we push the user to their appropriate step
    if (currentStep !== parseInt(step_number)) {
        goToCurrentStepUrl()
    }

    const StepComponent = dynamic(() =>
        import(`@/features/steps/pages/step-${step_number}`).then(mod =>
            mod[`Step${step_number}Page`]
        ).catch(_ => {
            goToCurrentStepUrl()
            // eslint-disable-next-line react/display-name
            return () => <></>
        })
    );

    return <StepComponent />;
};


export default StepPage;
