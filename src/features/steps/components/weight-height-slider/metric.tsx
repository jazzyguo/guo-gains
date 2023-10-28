import { useStepsStore } from '@/features/steps';
import { SliderInput } from '@/components/slider-input';
import { MAX_HEIGHT_CM, MIN_HEIGHT_CM, MAX_WEIGHT_KG, MIN_WEIGHT_KG } from '.';

export const WeightHeightSliderMetric = () => {
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
                    name="height_cm"
                    label="What is your height?"
                    max={MAX_HEIGHT_CM}
                    min={MIN_HEIGHT_CM}
                    tag="cm"
                    value={selectedHeightCm}
                    onChange={handleSelectHeightCm}
                />
                <SliderInput
                    name="weight_kg"
                    label="What is your weight?"
                    max={MAX_WEIGHT_KG}
                    min={MIN_WEIGHT_KG}
                    tag="kg"
                    value={selectedWeightKg}
                    onChange={handleSelectWeightKg}
                />
            </div>
        </div>
    );
};
