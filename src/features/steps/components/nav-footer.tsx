import { useStepsStore } from '@/features/steps';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

import { NUMBER_STEPS } from '@/features/steps';

type Props = {
    currentStep: number
}

/**
 * Footer to identify current step of the steps form 
 * as well as going to next/previous step
 */
export const StepsNavFooter = ({ currentStep }: Props) => {
    const router = useRouter();

    const latestStep = useStepsStore(state => state.latestStep);
    const setLatestStep = useStepsStore(state => state.setLatestStep)

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
            className="fixed bottom-0 left-0 w-full bg-neutral-100 border-t border-gray-200 p-4 flex justify-between w-full"
        >
            {currentStep > 1 && (
                <Button
                    onClick={handlePrevious}
                    className="bg-neutral-500 text-white px-8 py-4 rounded-md md:text-xl"
                >
                    Previous
                </Button>
            )}
            <Button
                onClick={isLastStep ? handleSubmit : handleNext}
                className="bg-gradient-primary hover:bg-blue-600 text-white px-8 py-4 rounded-md md:text-xl ml-auto"
            >
                {isLastStep ? 'Submit' : 'Next'}
            </Button>
        </div>
    );
}
