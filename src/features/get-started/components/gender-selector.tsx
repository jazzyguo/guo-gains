import { useStepsStore } from '../store';
import { SelectCardGroup, type SelectGroupOptions } from '@/components/select-card-group';

const genderOptions: SelectGroupOptions = [{
    value: 'male',
    label: "Male",
    renderContent: <span>🙋‍♂️</span>,
}, {
    value: 'female',
    label: 'Female',
    renderContent: <span>🙋‍♀️</span>,
}]

export const GenderSelector = () => {
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
            label="What is your gender?"
            gridTemplateColumns="1fr 1fr"
        />
    );
};

