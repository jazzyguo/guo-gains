import { useStepsStore } from '@/features/steps';
import { SelectCardGroup } from '@/components/select-card-group';

const genderOptions: { value: string; label: string }[] = [{
    value: 'male',
    label: "Male"
}, {
    value: 'female',
    label: 'Female'
}]

export const GenderSelect = () => {
    const selectedGender = useStepsStore(state => state.gender)
    const updateFormData = useStepsStore(state => state.updateFormData)

    const handleSelectGender = (gender: 'male' | 'female') => {
        updateFormData("gender", gender);
    };

    return (
        <SelectCardGroup
            defaultValue={selectedGender as string}
            options={genderOptions}
            name="gender"
            rules={{ required: "Gender is required" }}
            onSelect={handleSelectGender as (value: string | number) => void}
        />
    );
};

