import { FitnessGoalSelector } from "@/features/steps/components/fitness-goal-selector"
import { ActivityLevelSelector } from '@/features/steps/components/activity-level-selector'
import { DaysCountSlider } from "../components/days-count-slider"

export const Step2Page = () => (
    <div className="flex flex-col gap-8">
        <FitnessGoalSelector />
        <ActivityLevelSelector />
        <DaysCountSlider />
    </div>
)
