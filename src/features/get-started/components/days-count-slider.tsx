import { useCallback } from 'react';
import { useGetStartedStore } from '../store';
import { SliderInput } from '@/components/slider-input';

const formKey = 'daysCountGoal'

export const DaysCountSlider = () => {
    const selectedDaysCount = useGetStartedStore(state => state[formKey])
    const updateFormData = useGetStartedStore(state => state.updateFormData)

    const handleSelectDaysCount = useCallback((daysCount: number) => {
        updateFormData(formKey, daysCount)
    }, [updateFormData])

    return (
        <div className="flex flex-col space-y-3">
            <SliderInput
                name={formKey}
                label="How many days a week do you plan to workout?"
                max={7}
                min={1}
                tag="days"
                value={selectedDaysCount}
                onChange={handleSelectDaysCount}
            />
        </div>
    )
}
