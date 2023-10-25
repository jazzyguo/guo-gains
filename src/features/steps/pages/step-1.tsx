import { useStepsStore } from '@/features/steps';
import { useRouter } from 'next/navigation';

export const Step1Page = () => {
    const setCurrentStep = useStepsStore(state => state.setCurrentStep)
    const router = useRouter();

    return (
        <div>
            Step 1
            <div onClick={() => {
                setCurrentStep(2)
                router.push('/step/2')
            }}>Click</div>
        </div>
    )
}
