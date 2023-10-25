/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { type NextPage } from "next";
import { useStepsStore } from '@/features/steps';

import { StepsNavFooter } from '@/features/steps';

interface PageParams {
    step_number: string;
}

/**
 * Renders the appropriate step in the current form
 * A user can only access steps they have completed up to if they manipulate the url
 * All form data is stored and cached so if a user refreshes on step 2, the form data persists
 */
const StepPage: NextPage<{ params: PageParams }> = ({ params }) => {
    const { step_number } = params;

    const router = useRouter();

    const latestStep = useStepsStore(state => state.latestStep);

    const currentStep = parseInt(step_number, 10);

    console.log({ store: useStepsStore() })

    // prevent users from inputting steps in the url greater than their latest step
    useEffect(() => {
        if (currentStep > latestStep) {
            router.push(`/step/${latestStep}`)
        }
    }, [router, latestStep, currentStep])

    // Load the appropriate step component
    const StepComponent = dynamic(() =>
        import(`@/features/steps/pages/step-${currentStep}`).then(mod =>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            mod[`Step${currentStep}Page`]
        ).catch(_ => {
            router.push(`/step/${latestStep}`)
            // eslint-disable-next-line react/display-name
            return () => <></>;
        })
    );

    return (
        <>
            <StepComponent />
            <StepsNavFooter currentStep={currentStep} />
        </>
    )

};

export default StepPage;
