import { useCallback } from 'react';
import { useStepsStore } from '@/features/steps';
import { SliderInput } from '@/components/slider-input';
import { useFormContext } from 'react-hook-form'

export const DaysCountSlider = () => {
    const { register } = useFormContext()

    const selectedDaysCount = useStepsStore(state => state.days_count_goal)
    const updateFormData = useStepsStore(state => state.updateFormData)

    const handleSelectDaysCount = useCallback((daysCount: number) => {
        updateFormData('days_count_goal', daysCount)
    }, [updateFormData])

    return (
        <div className="flex flex-col space-y-3">
            <SliderInput
                {...register("days_count_goal")}
                label="How many days a week do you plan to workout?"
                max={7}
                min={1}
                tag="days"
                value={selectedDaysCount}
                onAdd={() => handleSelectDaysCount(selectedDaysCount + 1)}
                onSubtract={() => handleSelectDaysCount(selectedDaysCount - 1)}
                onSlide={(v) => handleSelectDaysCount(v!)}
            />
        </div>
    )
}
