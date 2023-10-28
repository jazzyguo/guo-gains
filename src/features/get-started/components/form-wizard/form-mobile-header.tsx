import { FormPath } from './form-path';

type Props = {
    currentStep: number;
    latestStep: number;
}

// StepsPath is rendered on top for mobile, and inside the nav footer on desktop
export const FormMobileHeader = ({ currentStep, latestStep }: Props) => (
    <div
        className="sticky top-0 md:hidden w-full bg-neutral-100 border-t border-gray-200 z-[60] py-4 h-[80px]"
    >
        <FormPath
            currentStep={currentStep}
            latestStep={latestStep}
        />
    </div>

)