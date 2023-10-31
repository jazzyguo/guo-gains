import { useGetStartedStore } from '../../store';
import { SliderInput } from '@/components/slider-input';
import { MAX_HEIGHT_FT, MAX_WEIGHT_LBS, MIN_HEIGHT_FT, MIN_WEIGHT_LBS } from '.';
import { convertWeight, getMetricHeightFromImperial } from '@/lib/unitsConvert'
import { useCallback } from 'react';

export const WeightHeightSliderImperial = () => {
    const selectedWeightLbs = useGetStartedStore((state) => state.weightLbs);
    const selectedHeightFt = useGetStartedStore((state) => state.heightFt);
    const selectedHeightInches = useGetStartedStore((state) => state.heightInches);

    const updateFormData = useGetStartedStore(state => state.updateFormData)

    const updateHeightMetric = useCallback((feet: number, inches: number) => {
        const heightCm = getMetricHeightFromImperial(feet, inches)
        updateFormData('heightCm', heightCm)
    }, [updateFormData])

    const updateWeightMetric = useCallback((value: number) => {
        const weightKg = convertWeight(value, 'imperial')
        updateFormData('weightKg', weightKg)
    }, [updateFormData])

    const handleSelectWeightLbs = useCallback((value: number) => {
        updateFormData('weightLbs', value)
        updateWeightMetric(value)
    }, [updateFormData, updateWeightMetric])

    const handleSelectHeightFt = useCallback((value: number) => {
        updateFormData('heightFt', value)
        updateHeightMetric(value, selectedHeightInches)
    }, [updateFormData, updateHeightMetric, selectedHeightInches]);

    const handleSelectHeightInches = useCallback((value: number) => {
        updateFormData('heightInches', value)
        updateHeightMetric(selectedHeightFt, value)
    }, [updateFormData, updateHeightMetric, selectedHeightFt])

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col xs:grid xs:grid-cols-2 xs:items-end xs:gap-4">
                <SliderInput
                    name="heightFt"
                    label="What is your height?"
                    max={MAX_HEIGHT_FT}
                    min={MIN_HEIGHT_FT}
                    tag="ft"
                    value={selectedHeightFt}
                    onChange={handleSelectHeightFt}
                    labelClassName='whitespace-nowrap'
                />
                <SliderInput
                    name="heightInches"
                    max={11}
                    min={0}
                    tag="inches"
                    value={selectedHeightInches}
                    onChange={handleSelectHeightInches}
                />
            </div>
            <SliderInput
                name="weightLbs"
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
