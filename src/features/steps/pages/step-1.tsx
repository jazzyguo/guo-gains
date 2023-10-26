import { AgeSlider } from '@/features/steps/components/age-slider';
import { GenderSelect } from '../components/gender-select';

export const Step1Page = () => {
    return (
        <div className="flex flex-col gap-10">
            <AgeSlider />
            <GenderSelect />
        </div>
    )
}
