import { useCallback } from 'react';
import { WeightHeightSliderImperial } from './imperial';
import { WeightHeightSliderMetric } from './metric';
import { useUnit, type Unit } from '@/contexts/unit-context';
import { getImperialHeightFromMetric, convertWeight, getMetricHeightFromImperial } from '@/lib/unitsConvert'
import { UnitToggle } from '@/components/unit-toggle';
import { useStepsStore } from '@/features/steps';

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

    const selectedWeightLbs = useStepsStore((state) => state.weight_lbs);
    const selectedHeightFt = useStepsStore((state) => state.height_ft);
    const selectedHeightInches = useStepsStore((state) => state.height_inches);
    const selectedWeightKg = useStepsStore((state) => state.weight_kg);
    const selectedHeightCm = useStepsStore((state) => state.height_cm);

    const updateFormData = useStepsStore(state => state.updateFormData)

    // convert units as they are toggled
    const onToggle = useCallback((newUnit: Unit) => {
        if (newUnit === 'metric') {
            const height_cm = getMetricHeightFromImperial(selectedHeightFt, selectedHeightInches)
            const weight_kg = convertWeight(selectedWeightLbs, 'imperial')
            updateFormData('weight_kg', weight_kg)
            updateFormData('height_cm', height_cm)
        } else {
            const [height_ft, height_inches] = getImperialHeightFromMetric(selectedHeightCm)
            const weight_lbs = convertWeight(selectedWeightKg, 'metric')
            updateFormData('weight_lbs', weight_lbs)
            updateFormData('height_ft', height_ft)
            updateFormData('height_inches', height_inches)
        }
    }, [selectedHeightCm, selectedHeightFt, selectedHeightInches, selectedWeightKg, selectedWeightLbs, updateFormData])

    return (
        <div className="pb-10 md:pb-16">
            <UnitToggle onToggle={onToggle} />
            {unit === 'metric'
                ? <WeightHeightSliderMetric />
                : <WeightHeightSliderImperial />
            }
        </div>
    );
};
