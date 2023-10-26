import { AgeSlider } from '@/features/steps/components/age-slider';
import { GenderSelect } from '@/features/steps/components/gender-select';
import { WeightHeightSlider } from '../components/weight-height-slider';

export const Step1Page = () => (
    <div className="flex flex-col gap-10">
        <AgeSlider />
        <GenderSelect />
        <WeightHeightSlider />
    </div>
)
