import { useGetStartedStore } from '../store';
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

const formKey = "gender"

export const GenderSelector = () => {
    const selectedGender = useGetStartedStore(state => state[formKey])
    const updateFormData = useGetStartedStore(state => state.updateFormData)

    const handleSelectGender = (gender: 'male' | 'female') => {
        updateFormData(formKey, gender);
    };

    return (
        <SelectCardGroup
            defaultValue={selectedGender as string}
            options={genderOptions}
            name={formKey}
            rules={{ required: "Gender is required" }}
            onSelect={handleSelectGender as (value: string | number) => void}
            label="What is your gender?"
            gridTemplateColumns="1fr 1fr"
        />
    );
};

