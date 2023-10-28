import { Button } from "@/components/ui/button"
import { useStepsStore } from '@/features/steps';
import { memo } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils"

type Props = {
    text?: string;
    className?: string;
}

const _StartStepsButton = ({ text = 'Get Started', className }: Props) => {
    const reset = useStepsStore(state => state.reset);
    const router = useRouter()

    return (
        <Button
            size="lg"
            className={cn("text-xl p-8 rounded-full", className)}
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
