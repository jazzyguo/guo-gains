import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form'
import { useGetStartedStore } from '../store';
import { SliderInput } from '@/components/slider-input';

const formKey = "age"

export const AgeSlider = () => {
    const { setError, clearErrors } = useFormContext()

    const selectedAge = useGetStartedStore(state => state[formKey])
    const updateFormData = useGetStartedStore(state => state.updateFormData)

    const handleSelectAge = useCallback((age: number) => {
        updateFormData(formKey, age)

        if (age >= 80) {
            setError(formKey, {
                type: 'manual',
                message: "We don't recommend you working out at your current age for safety concerns."
            })
        } else {
            clearErrors(formKey)
        }
    }, [updateFormData, setError, clearErrors])

    return (
        <div className="flex flex-col space-y-3">
            <SliderInput
                name={formKey}
                label="How old are you? 🎂"
                max={99}
                min={16}
                tag="years old"
                value={selectedAge}
                onChange={handleSelectAge}
            />
        </div>
    )
}
