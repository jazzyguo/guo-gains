import { memo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { useGetStartedStore } from '@/features/get-started';
import { cn } from "@/lib/utils"
import { BASE_URL } from "@/features/get-started";

type Props = {
    text?: string;
    className?: string;
}

const _GetStartedButton = ({ text = 'Get Started', className }: Props) => {
    const reset = useGetStartedStore(state => state.reset);
    const router = useRouter()

    return (
        <Button
            size="lg"
            className={cn("text-xl p-8 rounded-full", className)}
            onClick={() => {
                reset()
                router.push(`${BASE_URL}/1`)
            }}
        >
            {text}
        </Button>
    )
}

export const GetStartedButton = memo(_GetStartedButton)
