"use client"

import Lottie from 'lottie-react'
import { StartStepsButton } from "@/features/steps"
import bicepAnimation from '@/animations/bicep.json';

const HomePage = () => (
  <div className="container py-8 flex flex-col gap-6 text-center items-center max-w-screen-sm mx-auto lg:mt-16">
    <h1 className="text-4xl lg:text-6xl font-bold text-center lg:leading-tight">
      {`Create your unique `}
      <span className="text-primary-accent">Fitness Program </span>
      {` to achieve those Gains`}
      <br />
      <Lottie loop animationData={bicepAnimation} className="w-14 mt-4 lg:w-20 mx-auto" />
    </h1>
    <p
      className="text-lg text-secondary-text"
    >
      Discover your untapped potential and steer your fitness journey towards greatness using our cutting-edge fitness program generator. Whether you&apos;re striving to build muscle, shed weight, or boost your overall wellness, our intuitive app is your perfect companion. Take the reins of your health and fitness transformation – it all begins here.
    </p>
    <StartStepsButton className="md:mt-8" />
  </div >
)

export default HomePage 
