import { FormPath } from './form-path';

type Props = {
    currentStep: number;
    latestStep: number;
    isSubmitting: boolean;
}

// StepsPath is rendered on top for mobile, and inside the nav footer on desktop
export const FormMobileHeader = ({ currentStep, latestStep, isSubmitting }: Props) => (
    <div
        className="sticky top-0 md:hidden w-full bg-neutral-100 border-t border-gray-200 z-[60] py-4 h-[80px]"
    >
        <FormPath
            currentStep={currentStep}
            latestStep={latestStep}
            isSubmitting={isSubmitting}
        />
    </div>
)