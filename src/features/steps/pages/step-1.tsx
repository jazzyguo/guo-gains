import { useStepsStore } from '@/features/steps';
import { useRouter } from 'next/navigation';

import { AgeSlider } from '../components/age-slider';

export const Step1Page = () => {
    const setLatestStep = useStepsStore(state => state.setLatestStep)
    const router = useRouter();

    return (
        <div>
            Step 1
            <form>
                <AgeSlider />
            </form>
            <div onClick={() => {
                setLatestStep(2)
                router.push('/step/2')
            }}>
                Click
            </div>
        </div>
    )
}
