import { useCallback } from 'react';
import { useStepsStore } from '@/features/steps';
import { Label } from '@/components/ui/label';
import { SliderInput } from '@/components/slider-input';

export const AgeSlider = () => {
    const currentAge = useStepsStore(state => state.age)
    const updateFormData = useStepsStore(state => state.updateFormData)

    const setAge = useCallback((age: number) => {
        updateFormData('age', age)
    }, [updateFormData])

    return (
        <div className="flex flex-col space-y-3">
            <Label htmlFor="age">
                How old are you?
            </Label>
            <SliderInput
                max={99}
                min={16}
                tag="years old"
                value={currentAge}
                onAdd={() => setAge(currentAge + 1)}
                onSubtract={() => setAge(currentAge - 1)}
                onSlide={(e) => Number.isNaN(e) ? undefined : setAge(e)}
            />
        </div>
    )
}
