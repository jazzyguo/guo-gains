"use client"

import { AgeSlider } from '../components/age-slider';
import { GenderSelector } from '../components/gender-selector';
import { WeightHeightSlider } from '../components/weight-height-slider';

export const Step1Page = () => (
    <div className="flex flex-col gap-8">
        <AgeSlider />
        <GenderSelector />
        <WeightHeightSlider />
    </div>
)
