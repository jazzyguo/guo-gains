import { useEffect, type MouseEvent, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useGetStartedStore, NUMBER_STEPS } from '@/features/get-started';
import { FormSchemaType } from '../../lib/schema';
import { useForm, FormProvider } from 'react-hook-form';
import { Loading } from '@/components/ui/loading';
import { FormMobileHeader } from './form-mobile-header';
import { FormNavFooter } from './form-nav-footer';

type Props = {
    currentStep: number;
}

export const BASE_URL = '/get-started'

/**
 * Renders the appropriate step in the current form
 * A user can only access steps they have completed up to if they manipulate the url
 * All form data is stored and cached so if a user refreshes on step 2, the form data persists
 * 
 * react-hook-form handles form validation/errors
 */
export const GetStartedFormWizard = ({ currentStep }: Props) => {
    const router = useRouter();

    const methods = useForm<FormSchemaType>()

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
            const { programId, error } = await submitForm()
            if (programId) {
                router.push(`/program/${programId}`)
            } else {
                // set error
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
        loading: Loading,
        ssr: false,
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
                />
                <div className="container pt-6 md:pt-8" >
                    <StepComponent />
                </div>
                <FormNavFooter
                    currentStep={currentStep}
                    handlePrevious={handlePrevious}
                    isLastStep={isLastStep}
                />
            </form>
        </FormProvider>
    )
}
