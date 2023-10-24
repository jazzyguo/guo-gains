import Link from "next/link"
import { Button } from "@/components/ui/button"

const HomePage = () => (
  <div className="flex flex-col gap-6 text-center items-center max-w-screen-sm mx-auto lg:mt-16">
    <h1 className="text-4xl lg:text-6xl font-bold text-center lg:leading-snug">
      {`Create your unique `}
      <span className="text-violet-500">Fitness Program </span>
      {` to achieve those Gains💪`}
    </h1>
    <p
      className="text-lg text-neutral-400"
    >
      Discover your untapped potential and steer your fitness journey towards greatness using our cutting-edge fitness program generator. Whether you&apos;re striving to build muscle, shed weight, or boost your overall wellness, our intuitive app is your perfect companion. Take the reins of your health and fitness transformation – it all begins here.
    </p>
    <Link
      href="/step/1"
      className="w-min"
    >
      <Button
        size="lg"
        className="text-xl mt-8 p-8 rounded-full"
      >
        Get Started
      </Button>
    </Link>
  </div>
)

export default HomePage 
