import { useStepsStore } from '@/features/steps';
import { SliderInput } from '@/components/slider-input';
import { useFormContext } from 'react-hook-form';
import { MAX_HEIGHT_CM, MIN_HEIGHT_CM, MAX_WEIGHT_KG, MIN_WEIGHT_KG } from '.';

export const WeightHeightSliderMetric = () => {
    const { register } = useFormContext();

    const selectedWeightKg = useStepsStore((state) => state.weight_kg);
    const selectedHeightCm = useStepsStore((state) => state.height_cm);

    const updateFormData = useStepsStore(state => state.updateFormData)

    const handleSelectWeightKg = (value: number) => {
        updateFormData('weight_kg', value)
    };

    const handleSelectHeightCm = (value: number) => {
        updateFormData('height_cm', value)
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col md:grid md:grid-cols-2 md:items-end gap-6">
                <SliderInput
                    {...register("height_cm")}
                    label="What is your height?"
                    max={MAX_HEIGHT_CM}
                    min={MIN_HEIGHT_CM}
                    tag="cm"
                    value={selectedHeightCm}
                    onAdd={() => handleSelectHeightCm(selectedHeightCm + 1)}
                    onSubtract={() => handleSelectHeightCm(selectedHeightCm - 1)}
                    onSlide={(v) => handleSelectHeightCm(v!)}

                />
                <SliderInput
                    {...register("weight_kg")}
                    label="What is your weight?"
                    max={MAX_WEIGHT_KG}
                    min={MIN_WEIGHT_KG}
                    tag="kg"
                    value={selectedWeightKg}
                    onAdd={() => handleSelectWeightKg(selectedWeightKg + 1)}
                    onSubtract={() => handleSelectWeightKg(selectedWeightKg - 1)}
                    onSlide={(v) => handleSelectWeightKg(v!)}
                />
            </div>
        </div>
    );
};
