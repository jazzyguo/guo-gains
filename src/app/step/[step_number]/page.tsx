/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client"
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { type NextPage } from "next";
import { useStepsStore } from '@/features/steps';
import { useEffect } from 'react';

interface PageParams {
    step_number: string;
}

const StepPage: NextPage<{ params: PageParams }> = ({ params }) => {
    const { step_number } = params;

    const router = useRouter();

    const currentStep = useStepsStore(state => state.currentStep);

    const requestedStep = parseInt(step_number, 10);

    console.log({ store: useStepsStore() })
    
    // prevent users from inputting steps in the url greater than their current step
    useEffect(() => {
        if (requestedStep > currentStep) {
            router.push(`/step/${currentStep}`)
        }
    }, [router, currentStep, requestedStep])

    // Load the appropriate step component
    const StepComponent = dynamic(() =>
        import(`@/features/steps/pages/step-${requestedStep}`).then(mod =>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            mod[`Step${requestedStep}Page`]
        ).catch(_ => {
            // eslint-disable-next-line react/display-name
            return () => <></>;
        })
    );

    return <StepComponent />;
};

export default StepPage;
