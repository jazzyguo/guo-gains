/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { memo } from "react"
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { type FieldValues, type RegisterOptions, useFormContext, useController } from "react-hook-form";
import { FormError } from '@/components/form-error';

const selectedClass = "border-2 border-violet-400 bg-violet-400/70"

type SelectCardProps = {
    value: string | number;
    handleSelect: (value: unknown) => void
    isSelected: boolean;
    label: string;
}

const SelectCard = ({ handleSelect, isSelected, label, value, ...rest }: SelectCardProps) => (
    <Card
        className={`${isSelected ? selectedClass : ''}`}
        onClick={handleSelect}
    >
        <Label className="cursor-pointer">
            <input
                {...rest}
                value={value}
                className="hidden"
                type="radio"
            />
            <div>
                <span className="text-xl">{label}</span>
            </div>
        </Label>
    </Card>
)

type SelectGroupOptions = {
    value: string | number;
    label: string
}[]

type SelectCardGroupProps = {
    defaultValue: string | number;
    options: SelectGroupOptions;
    name: string;
    rules: Pick<
        RegisterOptions<FieldValues>,
        "maxLength" | "minLength" | "validate" | "required"
    >
    onSelect: (value: string | number) => void;
}

const _SelectCardGroup = ({ defaultValue, options, name, rules, onSelect, }: SelectCardGroupProps) => {
    const { control } = useFormContext();

    const {
        field: { value, onChange, ...field }
    } = useController({
        control,
        name,
        rules,
        defaultValue,
    });

    const handleSelect = (value: string | number) => {
        onSelect(value);
        onChange(value)
    };

    return (
        <div className="flex flex-col">
            <FormError name={name} />
            <div>
                {options.map(({ value: optionValue, label }) => (
                    <SelectCard
                        {...field}
                        key={optionValue}
                        value={optionValue}
                        handleSelect={() => handleSelect(optionValue)}
                        isSelected={value === optionValue}
                        label={label}
                    />
                ))}
            </div>
        </div>
    )
}

export const SelectCardGroup = memo(_SelectCardGroup)

