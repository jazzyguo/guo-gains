import { useStepsStore } from '@/features/steps';
import { SelectCardGroup, type SelectGroupOptions } from '@/components/select-card-group';

const cardContentClass = "text-sm text-center"

const activityLevelOptions: SelectGroupOptions = [{
    value: 'none',
    label: "None",
    renderContent: (
        <p className={cardContentClass}>
    
            <p className="text-6xl mb-4">🙍‍♂️</p>
            You have a sedentary lifestyle with minimal physical activity
        </p>
    ),
},
{
    value: 'light',
    label: 'Light',
    renderContent: (
        <p className={cardContentClass}>
            <p className="text-6xl mb-4">🚶‍♂️</p>
            You engage in light physical activity, such as short walks or occasional cycling
        </p>
    ),
},
{
    value: 'moderate',
    label: 'Moderate',
    renderContent: (
        <p className={cardContentClass}>

            <p className="text-6xl mb-4">🚴‍♂️</p>
            You maintain a moderate activity level with daily activities that include walking and light exercise
        </p>
    ),
},
{
    value: 'heavy',
    label: 'Heavy',
    renderContent: (
        <p className={cardContentClass}>
            <p className="text-6xl mb-4">🤸‍♂️</p>
            You have a high level of physical activity, which may involve regular gym workouts or running
        </p>
    ),
}];

export const ActivityLevelSelector = () => {
    const selectedActivityLevel = useStepsStore(state => state.current_activity_level)
    const updateFormData = useStepsStore(state => state.updateFormData)

    const handleSelectActivityLevel = (activityLevel: string) => {
        updateFormData("current_activity_level", activityLevel);
    };

    return (
        <SelectCardGroup
            defaultValue={selectedActivityLevel!}
            options={activityLevelOptions}
            name="current_activity_level"
            rules={{ required: "Activity level is required" }}
            onSelect={handleSelectActivityLevel as (value: string | number) => void}
            label="What is your current activity level?"
            gridTemplateColumns="repeat(2, minmax(150px, 1fr)"
        />
    );
}
