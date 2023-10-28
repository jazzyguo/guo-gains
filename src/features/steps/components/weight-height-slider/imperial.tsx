import { useStepsStore } from '@/features/steps';
import { SliderInput } from '@/components/slider-input';
import { MAX_HEIGHT_FT, MAX_WEIGHT_LBS, MIN_HEIGHT_FT, MIN_WEIGHT_LBS } from '.';

export const WeightHeightSliderImperial = () => {
    const selectedWeightLbs = useStepsStore((state) => state.weight_lbs);
    const selectedHeightFt = useStepsStore((state) => state.height_ft);
    const selectedHeightInches = useStepsStore((state) => state.height_inches);

    const updateFormData = useStepsStore(state => state.updateFormData)

    const handleSelectWeightLbs = (value: number) => {
        updateFormData('weight_lbs', value)
    };

    const handleSelectHeightFt = (value: number) => {
        updateFormData('height_ft', value)
    };

    const handleSelectHeightInches = (value: number) => {
        updateFormData('height_inches', value)
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col xs:grid xs:grid-cols-2 xs:items-end xs:gap-4">
                <SliderInput
                    name="height_ft"
                    label="What is your height?"
                    max={MAX_HEIGHT_FT}
                    min={MIN_HEIGHT_FT}
                    tag="ft"
                    value={selectedHeightFt}
                    onChange={handleSelectHeightFt}
                    labelClassName='whitespace-nowrap'
                />
                <SliderInput
                    name="height_inches"
                    max={11}
                    min={0}
                    tag="inches"
                    value={selectedHeightInches}
                    onChange={handleSelectHeightInches}
                />
            </div>
            <SliderInput
                name="weight_lbs"
                label="What is your weight?"
                min={MIN_WEIGHT_LBS}
                max={MAX_WEIGHT_LBS}
                tag="lbs"
                value={selectedWeightLbs}
                onChange={handleSelectWeightLbs}
            />
        </div>
    );
};
