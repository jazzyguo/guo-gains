import { useGetStartedStore } from '../../store';
import { SliderInput } from '@/components/slider-input';
import { MAX_HEIGHT_CM, MIN_HEIGHT_CM, MAX_WEIGHT_KG, MIN_WEIGHT_KG } from '.';

export const WeightHeightSliderMetric = () => {
    const selectedWeightKg = useGetStartedStore((state) => state.weightKg);
    const selectedHeightCm = useGetStartedStore((state) => state.heightCm);

    const updateFormData = useGetStartedStore(state => state.updateFormData)

    const handleSelectWeightKg = (value: number) => {
        updateFormData('weightKg', value)
    };

    const handleSelectHeightCm = (value: number) => {
        updateFormData('heightCm', value)
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col md:grid md:grid-cols-2 md:items-end gap-6">
                <SliderInput
                    name="heightCm"
                    label="What is your height?"
                    max={MAX_HEIGHT_CM}
                    min={MIN_HEIGHT_CM}
                    tag="cm"
                    value={selectedHeightCm}
                    onChange={handleSelectHeightCm}
                />
                <SliderInput
                    name="weightKg"
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
