"use client"

import { useEffect, type MouseEvent, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { type FormSchemaType } from '../../lib/schema';
import { useForm, FormProvider } from 'react-hook-form';
import { useGetStartedStore } from '../../store';
import { NUMBER_STEPS, BASE_URL } from '../../lib/consts';

import { Loading } from '@/components/ui/loading';
import { FormMobileHeader } from './form-mobile-header';
import { FormNavFooter } from './form-nav-footer';
import { GetStartedFormWizardHydrator } from './hydrator';

type Props = {
    currentStep: number;
}

/**
 * Renders the appropriate step in the current form
 * A user can only access steps they have completed up to if they manipulate the url
 * All form data is stored and cached so if a user refreshes on step 2, the form data persists
 * 
 * react-hook-form handles form validation/errors
 */
const GetStartedFormWizard = ({ currentStep }: Props) => {
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [submitError, setSubmitError] = useState<string | undefined>(undefined)

    const methods = useForm<FormSchemaType>({})

    const latestStep = useGetStartedStore(state => state.latestStep);
    const setLatestStep = useGetStartedStore(state => state.setLatestStep)
    const submitForm = useGetStartedStore(state => state.submitForm)

    const isLastStep = currentStep === NUMBER_STEPS

    // prevent users from inputting steps in the url greater than their latest step
    useEffect(() => {
        if (currentStep > latestStep) {
            router.push(`${BASE_URL}/${latestStep}`)
        }
    }, [router, latestStep, currentStep])


    const handlePrevious = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        // latestStep remains the same
        if (currentStep > 1) {
            router.push(`${BASE_URL}/${currentStep - 1}`, { scroll: true })
        }
    }, [currentStep, router]);

    const handleNext = useCallback(() => {
        // we set the latest step to the max of currentStep + 1 or the current latest step
        // so if the user is on step 3 and goes back to step 1 and clicks next again,
        // it will take the max of 1+1 or 3
        const stepToGo = Math.max(latestStep, currentStep + 1)
        setLatestStep(stepToGo)
        router.push(`${BASE_URL}/${stepToGo}`, { scroll: true })
    }, [latestStep, currentStep, router, setLatestStep])

    const onSubmit = useCallback(async () => {
        // only pass in the units provided for the relevant selected unit
        // ie. weight_lbs with unit === imperial
        if (isLastStep) {
            setIsSubmitting(true)
            const { programId, error } = await submitForm()
            if (programId) {
                router.push(`/program/${programId}`)
            } else {
                setIsSubmitting(false)
                setSubmitError(error)
            }
        } else {
            handleNext()
        }
    }, [isLastStep, handleNext, submitForm, router])

    // Load the appropriate step component
    const StepComponent = dynamic(() =>
        import(`@/features/get-started/pages/step-${currentStep}`).then(mod =>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
            mod[`Step${currentStep}Page`]
        ).catch(_ => {
            router.push(`${BASE_URL}/${latestStep}`)
            // eslint-disable-next-line react/display-name
            return () => <></>;
        }), {
        loading: () => <Loading />,
    });


    return (
        <FormProvider {...methods}>
            <form
                // pb to account for sticky bottom nav
                className="w-full max-w-screen-md mx-auto pb-36"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                {/* StepsPath is rendered on top for mobile, and inside the nav footer on desktop */}
                <FormMobileHeader
                    currentStep={currentStep}
                    latestStep={latestStep}
                    isSubmitting={isSubmitting}
                />
                <div className="container pt-6 md:pt-8" >
                    {isSubmitting
                        ? <Loading label="Generating the ideal workout..." />
                        : <StepComponent />
                    }
                </div>
                <FormNavFooter
                    currentStep={currentStep}
                    handlePrevious={handlePrevious}
                    isLastStep={isLastStep}
                    submitError={submitError}
                    isSubmitting={isSubmitting}
                />
            </form>
        </FormProvider>
    )
}

export const HydratedGetStartedFormWizard = (props: {
    currentStep: number
}) => (
    <GetStartedFormWizardHydrator>
        <GetStartedFormWizard {...props} />
    </GetStartedFormWizardHydrator>
) 
