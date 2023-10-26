import { memo } from 'react';
import { useRouter } from 'next/navigation';
import { NUMBER_STEPS } from '@/features/steps';
import { BarPath } from '@/components/bar-path';

type Props = {
    currentStep: number;
    latestStep: number;
}

const stepIcons: string[] = ['🚶', '🏃',]

const stepClasses = 'rounded-full flex items-center justify-center border-2 cursor-pointer'
const defaultColorClasses = 'border-gray-400 bg-gray-400/70'
const activeColorClasses = 'border-gray-300 bg-white'
const completeColorClasses = 'border-violet-400 bg-violet-400/70'

/**
 * Visual representation of the current step and the steps in total
 * Clicking can navigate to steps as long as the user doesn't try to access an uncomplete step
 * active, complete, and uncomplete steps all have different color schemes
 */
const _StepsPath = ({ currentStep, latestStep }: Props) => {
    const router = useRouter();

    // only allows navigation to completed step - stepTo < latestStep
    const handleClickStep = (step: number) => {
        if (step <= latestStep) {
            router.push(`/step/${step}`)
        }
    }

    return (
        <div
            className="flex items-center text-3xl absolute left-0 right-0 bottom-[72px] md:bottom-auto w-max gap-8 mx-auto"
        >
            <div>🧍</div>
            <BarPath className="left-[40px]" active={latestStep > 1} />
            {stepIcons.map((stepIcon, idx) => {
                const isActiveStep = idx + 1 === currentStep
                const isCompleteStep = latestStep > idx + 1
                return (
                    <>
                        <div
                            key={`${stepIcon}-${idx}`}
                            onClick={() => handleClickStep(idx + 1)}
                            className="relative bg-neutral-100"
                        >
                            <div
                                onClick={() => handleClickStep(idx + 1)}
                                className={`
                                ${stepClasses} 
                                ${isActiveStep ? 'w-12 h-12 animate-pulsing' : 'w-11 h-11'}
                                ${isCompleteStep
                                        ? completeColorClasses
                                        : isActiveStep
                                            ? activeColorClasses
                                            : defaultColorClasses
                                    }`}
                            >
                                {stepIcon}

                            </div>
                            {idx + 1 !== NUMBER_STEPS &&
                                // line connecting the steps to represent completion
                                <BarPath active={isCompleteStep} className={"left-[40px]"} />
                            }
                        </div>
                    </>

                )
            })}
            <BarPath className="right-[40px]" />
            <div>🏋️</div>
        </div>
    );
}

export const StepsPath = memo(_StepsPath)
