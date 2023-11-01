import { memo } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from "@/lib/utils"
import { BASE_URL } from '.';

type Props = {
    currentStep: number;
    latestStep: number;
    className?: string;
    isSubmitting: boolean;
}

const stepIcons: string[] = ['🚶', '🏃',]

const stepClasses = 'w-12 h-12 rounded-full flex items-center justify-center border-2 cursor-pointer'
const defaultColorClasses = 'border-gray-400 bg-gray-400/70'
const activeColorClasses = 'border-gray-300 bg-white'
const completeColorClasses = 'border-primary-accent/70 bg-primary-accent/50'

const BarPath = ({ active = false, className }: { active?: boolean, className?: string }) => (
    <div
        className={cn(`absolute w-10 h-1 ${active ? 'bg-primary-accent/70' : 'bg-gray-400'} top-0 bottom-0 my-auto z-[-1] rounded-full`, className)}
    />
)

/**
 * Visual representation of the current step and the steps in total
 * Clicking can navigate to steps as long as the user doesn't try to access an uncomplete step
 * active, complete, and uncomplete steps all have different color schemes
 */
const _FormPath = ({ currentStep, latestStep, className, isSubmitting }: Props) => {
    const router = useRouter();

    // only allows navigation to completed step - stepTo < latestStep
    const handleClickStep = (step: number) => {
        if (step <= latestStep) {
            router.push(`${BASE_URL}/${step}`, { scroll: true })
        }
    }

    return (
        <div
            className={cn("flex items-center text-3xl w-[270px] gap-8 mx-auto absolute left-0 right-0", className)}
        >
            <div className="relative">🧍</div>
            {stepIcons.map((stepIcon, idx) => {
                const isActiveStep = idx + 1 === currentStep
                const isCompleteStep = latestStep > idx + 1

                return (
                    <div
                        key={`${stepIcon}-${idx}`}
                        onClick={() => handleClickStep(idx + 1)}
                        className="relative bg-neutral-100"
                    >
                        {idx === 0 &&
                            // line coming into the first step
                            <BarPath className={`right-[40px]`} active={latestStep > 1} />
                        }
                        <div
                            onClick={() => handleClickStep(idx + 1)}
                            className={cn(
                                `
                                    ${stepClasses}
                                    ${isCompleteStep
                                    ? completeColorClasses
                                    : isActiveStep
                                        ? activeColorClasses
                                        : defaultColorClasses}
                                `,
                                isSubmitting && completeColorClasses, !
                                isSubmitting && isActiveStep && 'animate-pulsing',

                            )}
                        >
                            {stepIcon}
                        </div>
                        {/* line connecting the steps to represent completion */}
                        <BarPath active={isCompleteStep} className={`left-[40px]`} />
                    </div>
                )
            })}
            <div className={cn('relative', isSubmitting && 'animate-pulsing')}>🏋️</div>
        </div>
    );
}

export const FormPath = memo(_FormPath)
