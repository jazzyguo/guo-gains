/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type ReactElement, memo } from "react"
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
    renderContent?: ReactElement;
}

const SelectCard = ({ handleSelect, isSelected, label, value, renderContent, ...rest }: SelectCardProps) => (
    <Card
        className={`${isSelected ? selectedClass : ''} w-full`}
        onClick={handleSelect}
    >
        <Label className="cursor-pointer">
            <input
                {...rest}
                value={value}
                className="hidden"
                type="radio"
            />
            <div className="flex flex-col items-center gap-4 justify-center p-4 md:p-10 rounded-full">
                <p className="text-6xl">
                    {renderContent}
                </p>
                <span className="text-lg md:text-xl">{label}</span>
            </div>
        </Label>
    </Card>
)

export type SelectGroupOptions = {
    value: string | number;
    label: string;
    renderContent?: ReactElement;
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

const MAX_COLUMNS = 3

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

    const numColumns = Math.min(options.length, MAX_COLUMNS);

    return (
        <div className="flex flex-col">
            <FormError name={name} />
            <div className={`flex flex-col sm:grid sm:grid-cols-${numColumns} sm:grid-flow-col gap-6`}>
                {options.map(({ value: optionValue, label, renderContent }) => (
                    <SelectCard
                        {...field}
                        key={optionValue}
                        value={optionValue}
                        handleSelect={() => handleSelect(optionValue)}
                        isSelected={value === optionValue}
                        label={label}
                        renderContent={renderContent}
                    />
                ))}
            </div>
        </div>
    )
}

export const SelectCardGroup = memo(_SelectCardGroup)

