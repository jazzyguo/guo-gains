import { memo, type MouseEvent } from 'react';
import { useStepsStore, type FormState } from '@/features/steps';
import { Button } from '@/components/ui/button';
import { StepsPath } from './steps-path';
import { useFormState, } from "react-hook-form";

type Props = {
    currentStep: number;
    isLastStep: boolean;
    handlePrevious: (e: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Footer to identify current step of the steps form 
 * as well as going to next/previous step
 */
const _StepsNavFooter = ({ currentStep, isLastStep, handlePrevious }: Props) => {
    const { errors } = useFormState()

    const latestStep = useStepsStore(state => state.latestStep);

    const canSubmit = !Object.keys(errors).length

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
                    type="submit"
                    className={`${canSubmit && 'bg-gradient-primary'} hover:bg-blue-600 text-white px-8 py-4 rounded-md md:text-xl ml-auto`}
                    disabled={!canSubmit}
                >
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </div>
        </div>
    );
}

export const StepsNavFooter = memo(_StepsNavFooter)
