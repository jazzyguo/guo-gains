"use client"
import { Button } from "@/components/ui/button"
import { useStepsStore } from '@/features/steps';
import { memo } from "react";
import { useRouter } from "next/navigation";

type Props = {
    text?: string
}

const _StartStepsButton = ({ text = 'Get Started' }: Props) => {
    const reset = useStepsStore(state => state.reset);
    const router = useRouter()

    return (
        <Button
            size="lg"
            className="text-xl mt-8 p-8 rounded-full"
            onClick={() => {
                reset()
                router.push('/step/1')
            }}
        >
            {text}
        </Button>
    )
}

export const StartStepsButton = memo(_StartStepsButton)
