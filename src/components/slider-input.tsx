import { IoIosAdd, IoIosRemove } from 'react-icons/io'
import { Slider } from '@/components/ui/slider';
import { Button } from './ui/button'
import { memo } from 'react';

type Props = {
    value: number,
    max: number,
    min: number,
    tag: string
    onAdd: () => void,
    onSubtract: () => void,
    onSlide: (e: number | undefined) => void,
}

const _SliderInput = ({
    value,
    max,
    min,
    tag,
    onAdd,
    onSubtract,
    onSlide,
}: Props) => {
    const canAdd = value + 1 <= max
    const canSubtract = value - 1 >= min
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 w-min mx-auto">
                <div className="flex items-center gap-6">
                    <Button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault()

                            if (canSubtract) {
                                onSubtract()
                            }
                        }}
                        variant="outline"
                        className="rounded-full w-10 h-10 p-2 text-2xl"
                        disabled={!canSubtract}
                    >
                        <IoIosRemove />
                    </Button>
                    <div className="text-5xl font-bold">
                        {value}
                    </div>
                    <Button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault()

                            if (canAdd) {
                                onAdd()
                            }
                        }}
                        variant="outline"
                        className="rounded-full w-10 h-10 p-2 text-2xl"
                        disabled={!canAdd}
                    >
                        <IoIosAdd />
                    </Button>
                </div>
                <span className="text-md text-neutral-500 text-center">{tag}</span>
            </div>
            <Slider
                defaultValue={[value]}
                value={[value]}
                onValueChange={(e) => onSlide(e[0])}
                max={max}
                min={min}
                step={1}
            />
        </div>
    )
}

export const SliderInput = memo(_SliderInput)
