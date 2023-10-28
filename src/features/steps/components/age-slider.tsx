import { useCallback } from 'react';
import { useStepsStore } from '@/features/steps';
import { SliderInput } from '@/components/slider-input';
import { useFormContext } from 'react-hook-form'

export const AgeSlider = () => {
    const { register, setError, clearErrors } = useFormContext()

    const selectedAge = useStepsStore(state => state.age)
    const updateFormData = useStepsStore(state => state.updateFormData)

    const handleSelectAge = useCallback((age: number) => {
        updateFormData('age', age)

        if (age >= 80) {
            setError('age', {
                type: 'manual',
                message: "We don't recommend you working out at your current age for safety concerns."
            })
        } else {
            clearErrors('age')
        }
    }, [updateFormData, setError, clearErrors])

    return (
        <div className="flex flex-col space-y-3">
            <SliderInput
                {...register("age")}
                label="How old are you? 🎂"
                max={99}
                min={16}
                tag="years old"
                value={selectedAge}
                onAdd={() => handleSelectAge(selectedAge + 1)}
                onSubtract={() => handleSelectAge(selectedAge - 1)}
                onSlide={(v) => handleSelectAge(v!)}
            />
        </div>
    )
}
