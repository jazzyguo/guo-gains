import { IoIosAdd, IoIosRemove } from 'react-icons/io'
import { Slider } from '@/components/ui/slider';
import { Button } from './ui/button'
import { memo, useCallback } from 'react';
import { Label } from '@/components/ui/label';
import { type FieldValues, type RegisterOptions, useFormContext, useController } from 'react-hook-form'

import { FormError } from '@/components/form-error';

type Props = {
    name: string;
    value: number,
    max: number,
    min: number,
    tag: string
    onChange: (value: number) => void,
    label?: string;
    labelClassName?: string;
    rules?: Pick<
        RegisterOptions<FieldValues>,
        "maxLength" | "minLength" | "validate" | "required"
    >
}

const _SliderInput = ({
    value,
    max,
    min,
    tag,
    name,
    label,
    labelClassName,
    onChange,
    rules,
}: Props) => {
    const { control, setValue } = useFormContext()

    const { field } = useController({
        control,
        name,
        defaultValue: value,
        rules,
    });

    const handleSlide = useCallback((newValue: number) => {
        onChange(newValue)
        setValue(name, newValue)
    }, [name, setValue, onChange])

    const onSubtract = useCallback(() => {
        const updatedValue = value - 1
        onChange(updatedValue)
        field.onChange(updatedValue)
    }, [onChange, field, value])

    const onAdd = useCallback(() => {
        const updatedValue = value + 1
        onChange(updatedValue)
        field.onChange(updatedValue)
    }, [onChange, field, value])

    const canAdd = value + 1 <= max
    const canSubtract = value - 1 >= min

    return (
        <div className="flex flex-col gap-6">
            <div>
                <Label htmlFor={name} className={labelClassName}>
                    {label}
                </Label>
                <FormError name={name} />
            </div>
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
                        className="rounded-full w-8 h-8 sm:w-10 sm:h-10 p-2 text-2xl"
                        disabled={!canSubtract}
                    >
                        <IoIosRemove />
                    </Button>
                    <div className="text-4xl sm:text-5xl font-bold">
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
                        className="rounded-full w-8 h-8 sm:w-10 sm:h-10 p-2 text-2xl"
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
                onValueChange={(v) => Number.isNaN(v) ? undefined : handleSlide(v[0]! ?? 0)}
                max={max}
                min={min}
                step={1}
            />
        </div>
    )
}

export const SliderInput = memo(_SliderInput)
