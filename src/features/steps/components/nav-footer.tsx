import { useStepsStore } from '@/features/steps';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { StepsPath } from './steps-path';
import { useFormState } from "react-hook-form";

import { NUMBER_STEPS } from '@/features/steps';

type Props = {
    currentStep: number
}

/**
 * Footer to identify current step of the steps form 
 * as well as going to next/previous step
 */
export const StepsNavFooter = ({ currentStep }: Props) => {
    const { errors } = useFormState()

    const router = useRouter();

    const latestStep = useStepsStore(state => state.latestStep);
    const setLatestStep = useStepsStore(state => state.setLatestStep)

    const canSubmit = !Object.keys(errors).length

    const isLastStep = currentStep === NUMBER_STEPS

    const handlePrevious = () => {
        // latestStep remains the same
        if (currentStep > 1) {
            router.push(`/step/${currentStep - 1}`)
        }
    };

    const handleNext = () => {
        // we set the latest step to the max of currentStep + 1 or the current latest step
        // so if the user is on step 3 and goes back to step 1 and clicks next again,
        // it will take the max of 1+1 or 3
        const stepToGo = Math.max(latestStep, currentStep + 1)
        setLatestStep(stepToGo)
        router.push(`/step/${stepToGo}`)
    };

    const handleSubmit = () => {
        console.log('submitting')
    }

    return (
        <div
            className="pt-16 md:pt-0 fixed bottom-0 left-0 w-full bg-neutral-100 border-t border-gray-200 w-full"
        >
            <div className="container py-4 mx-auto flex justify-between items-center relative">
                {currentStep > 1 && (
                    <Button
                        onClick={handlePrevious}
                        className="bg-neutral-500 text-white px-8 py-4 rounded-md md:text-xl"
                    >
                        Previous
                    </Button>
                )}
                <StepsPath currentStep={currentStep} latestStep={latestStep} />
                <Button
                    onClick={isLastStep ? handleSubmit : handleNext}
                    className={`${canSubmit && 'bg-gradient-primary'} hover:bg-blue-600 text-white px-8 py-4 rounded-md md:text-xl ml-auto`}
                    disabled={!canSubmit}
                >
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </div>
        </div>
    );
}
