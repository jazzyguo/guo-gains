import { useCallback } from 'react';
import { WeightHeightSliderImperial } from './imperial';
import { WeightHeightSliderMetric } from './metric';
import { useUnit, type Unit } from '@/contexts/unit-context';
import { getImperialHeightFromMetric, convertWeight, getMetricHeightFromImperial } from '@/lib/unitsConvert'
import { UnitToggle } from '@/components/unit-toggle';
import { useGetStartedStore } from '../../store';

export const MAX_HEIGHT_CM = 240
export const MAX_WEIGHT_KG = 175
export const MIN_HEIGHT_CM = 120
export const MIN_WEIGHT_KG = 30

export const [MAX_HEIGHT_FT] = getImperialHeightFromMetric(MAX_HEIGHT_CM)
export const MAX_WEIGHT_LBS = convertWeight(MAX_WEIGHT_KG, 'metric')
export const [MIN_HEIGHT_FT] = getImperialHeightFromMetric(MIN_HEIGHT_CM)
export const MIN_WEIGHT_LBS = convertWeight(MIN_WEIGHT_KG, 'metric')

export const WeightHeightSlider = () => {
    const { unit } = useUnit()

    const selectedWeightLbs = useGetStartedStore((state) => state.weightLbs);
    const selectedHeightFt = useGetStartedStore((state) => state.heightFt);
    const selectedHeightInches = useGetStartedStore((state) => state.heightInches);
    const selectedWeightKg = useGetStartedStore((state) => state.weightKg);
    const selectedHeightCm = useGetStartedStore((state) => state.heightCm);

    const updateFormData = useGetStartedStore(state => state.updateFormData)

    // convert units as they are toggled
    const onToggle = useCallback((newUnit: Unit) => {
        if (newUnit === 'metric') {
            const height_cm = getMetricHeightFromImperial(selectedHeightFt, selectedHeightInches)
            const weight_kg = convertWeight(selectedWeightLbs, 'imperial')
            updateFormData('weightKg', weight_kg)
            updateFormData('heightCm', height_cm)
        } else {
            const [height_ft, height_inches] = getImperialHeightFromMetric(selectedHeightCm)
            const weight_lbs = convertWeight(selectedWeightKg, 'metric')
            updateFormData('weightLbs', weight_lbs)
            updateFormData('heightFt', height_ft)
            updateFormData('heightInches', height_inches)
        }
    }, [selectedHeightCm, selectedHeightFt, selectedHeightInches, selectedWeightKg, selectedWeightLbs, updateFormData])

    return (
        <div>
            <UnitToggle className="mb-8" onToggle={onToggle} />
            {unit === 'metric'
                ? <WeightHeightSliderMetric />
                : <WeightHeightSliderImperial />
            }
        </div>
    );
};
