import { useStepsStore } from '@/features/steps';
import { SliderInput } from '@/components/slider-input';
import { useFormContext } from 'react-hook-form';
import { MAX_HEIGHT_FT, MAX_WEIGHT_LBS, MIN_HEIGHT_FT, MIN_WEIGHT_LBS } from '.';

export const WeightHeightSliderImperial = () => {
    const { register } = useFormContext();

    const selectedWeightLbs = useStepsStore((state) => state.weight_lbs);
    const selectedHeightFt = useStepsStore((state) => state.height_ft);
    const selectedHeightInches = useStepsStore((state) => state.height_inches);

    const updateFormData = useStepsStore(state => state.updateFormData)

    const handleSelectWeight = (value: number) => {
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
            <div className="flex flex-col xs:grid xs:grid-cols-2 xs:items-end xs:gap-6">
                <SliderInput
                    {...register("height_ft")}
                    label="What is your height?"
                    max={MAX_HEIGHT_FT}
                    min={MIN_HEIGHT_FT}
                    tag="ft"
                    value={selectedHeightFt}
                    onAdd={() => handleSelectHeightFt(selectedHeightFt + 1)}
                    onSubtract={() => handleSelectHeightFt(selectedHeightFt - 1)}
                    onSlide={(v) => handleSelectHeightFt(v!)}
                />
                <SliderInput
                    {...register("height_inches")}
                    max={11}
                    min={0}
                    tag="inches"
                    value={selectedHeightInches}
                    onAdd={() => handleSelectHeightInches(selectedHeightInches + 1)}
                    onSubtract={() => handleSelectHeightInches(selectedHeightInches - 1)}
                    onSlide={(v) => handleSelectHeightInches(v!)}
                />
            </div>
            <SliderInput
                {...register("weight_lbs")}
                label="What is your weight?"
                min={MIN_WEIGHT_LBS}
                max={MAX_WEIGHT_LBS}
                tag="lbs"
                value={selectedWeightLbs}
                onAdd={() => handleSelectWeight(selectedWeightLbs + 1)}
                onSubtract={() => handleSelectWeight(selectedWeightLbs - 1)}
                onSlide={(v) => handleSelectWeight(v!)}
            />
        </div>
    );
};
