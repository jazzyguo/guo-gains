/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type ReactElement, memo } from "react"
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { type FieldValues, type RegisterOptions, useFormContext, useController } from "react-hook-form";
import { FormError } from '@/components/form-error';

const selectedClass = "border-2 border-primary-accent/70 bg-primary-accent/50"

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
    label: string;
}

const _SelectCardGroup = ({ defaultValue, options, name, rules, onSelect, label }: SelectCardGroupProps) => {
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
            <Label htmlFor={name} className="mb-4">
                {label}
            </Label>
            <FormError name={name} className="mb-4" />
            <div
                className={`grid gap-6 w-full`}
                style={{
                    gridTemplateColumns: `repeat(auto-fill, minmax(${options.length >= 3 ? '150px' : '250px'} , 1fr))`
                }}
            >
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

