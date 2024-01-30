"use client"

import { FitnessGoalSelector } from "../components/fitness-goal-selector"
import { ActivityLevelSelector } from '../components/activity-level-selector'
import { DaysCountSlider } from "../components/days-count-slider"

export const Step2Page = () => (
    <div className="flex flex-col gap-8">
        <FitnessGoalSelector />
        <ActivityLevelSelector />
        <DaysCountSlider />
    </div>
)
