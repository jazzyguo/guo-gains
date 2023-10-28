import Lottie from 'lottie-react'
import { SelectCardGroup, type SelectGroupOptions } from '@/components/select-card-group';
import bicepAnimation from '@/animations/bicep.json';
import fireAnimation from '@/animations/fire.json'
import balanceAnimation from '@/animations/balance.json'
import { useStepsStore } from '../store';

const goalOptions: SelectGroupOptions = [{
    value: 'lose-weight',
    label: "Lose Weight",
    renderContent: <Lottie loop animationData={fireAnimation} className="w-14 lg:w-20 mx-auto" />,
    infoContent: <p className="text-sm">You want to shed off some extra weight and feel healthier.</p>,

}, {
    value: 'maintain',
    label: 'Maintain',
    renderContent: <Lottie loop animationData={balanceAnimation} className="w-14 lg:w-20 mx-auto" />,
    infoContent: <p className="text-sm">You aim to maintain your current physique and overall tone.</p>,
}, {
    value: 'build-muscle',
    label: 'Build Muscle',
    renderContent: <Lottie loop animationData={bicepAnimation} className="w-14 lg:w-20 mx-auto" />,
    infoContent: <p className="text-sm">You want to gain muscle and achieve a sculpted physique.</p>,
}]

export const FitnessGoalSelector = () => {
    const selectedFitnessGoal = useStepsStore(state => state.fitness_goal)
    const updateFormData = useStepsStore(state => state.updateFormData)

    const handleSelectFitnessGoal = (goal: string) => {
        updateFormData("fitness_goal", goal);
    };

    return (
        <SelectCardGroup
            defaultValue={selectedFitnessGoal!}
            options={goalOptions}
            name="fitness_goal"
            rules={{ required: "Fitness goal is required" }}
            onSelect={handleSelectFitnessGoal as (value: string | number) => void}
            label="What is your fitness goal? 🎯"
            gridTemplateColumns="repeat(auto-fill, minmax(175px, 1fr)"
        />
    );
}
