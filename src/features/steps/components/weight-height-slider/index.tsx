import { WeightHeightSliderImperial } from './imperial';
import { WeightHeightSliderMetric } from './metric';
import { useUnit } from '@/contexts/unit-context';
import { getImperialHeightFromMetric, convertWeight } from '@/lib/unitsConvert'

export const MAX_HEIGHT_CM = 240
export const MAX_WEIGHT_KG = 175
export const MIN_HEIGHT_CM = 120
export const MIN_WEIGHT_KG = 30

export const [MAX_HEIGHT_FT] = getImperialHeightFromMetric(MAX_HEIGHT_CM)
export const MAX_WEIGHT_LBS = convertWeight(MAX_WEIGHT_KG, 'metric')
export const [MIN_HEIGHT_FT] = getImperialHeightFromMetric(MIN_HEIGHT_CM)
export const MIN_WEIGHT_LBS = convertWeight(MIN_WEIGHT_KG, 'metric')

export const WeightHeightSlider = () => {
    const { unit, setUnit } = useUnit()

    return (
        <div className="pb-16">

            {unit === 'metric'
                ? <WeightHeightSliderMetric />
                : <WeightHeightSliderImperial />

            }

        </div>
    );
};
