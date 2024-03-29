"use client"

import { memo, type MouseEvent } from 'react';
import { useGetStartedStore } from '../../store';
import { Button } from '@/components/ui/button';
import { FormPath } from './form-path';
import { useFormState, } from "react-hook-form";

type Props = {
    currentStep: number;
    isLastStep: boolean;
    handlePrevious: (e: MouseEvent<HTMLButtonElement>) => void;
    submitError: string | undefined;
    isSubmitting: boolean;
}

/**
 * Footer to identify current step of the steps form 
 * as well as going to next/previous step
 */
const _FormNavFooter = ({ currentStep, isLastStep, handlePrevious, submitError, isSubmitting }: Props) => {
    const { errors } = useFormState()

    const latestStep = useGetStartedStore(state => state.latestStep);

    const canSubmit = !Object.keys(errors).length

    return (
        <div
            className="fixed bottom-0 left-0 w-full bg-neutral-100 border-t border-gray-200 w-full flex flex-col items-center py-4"
        >
            {(!canSubmit || submitError) &&
                <span className="text-sm text-red-500 pb-4">
                    {submitError ?? 'Please fix errors'}
                </span>
            }
            <div className="container mx-auto flex justify-between items-center relative">
                {(currentStep > 1 && !isSubmitting) && (
                    <Button
                        onClick={handlePrevious}
                        className="bg-neutral-500 text-white px-8 py-4 rounded-md md:text-xl"
                    >
                        Previous
                    </Button>
                )}
                <FormPath
                    className="hidden md:flex"
                    currentStep={currentStep}
                    latestStep={latestStep}
                    isSubmitting={isSubmitting}
                />
                <Button
                    type="submit"
                    className={`${canSubmit && 'bg-gradient-primary'} hover:bg-blue-600 text-white px-8 py-4 rounded-md md:text-xl ml-auto`}
                    disabled={!canSubmit || isSubmitting}
                >
                    {isLastStep ? 'Submit' : 'Next'}
                </Button>
            </div>
        </div >
    );
}

export const FormNavFooter = memo(_FormNavFooter)
