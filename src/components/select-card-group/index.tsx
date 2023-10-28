/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type ReactElement, memo } from "react"
import { Label } from "@/components/ui/label";
import { type FieldValues, type RegisterOptions, useFormContext, useController } from "react-hook-form";
import { FormError } from '@/components/form-error';
import { SelectCard } from "./select-card";

export type SelectGroupOptions = {
    value: string | number;
    label: string;
    renderContent?: ReactElement;
    infoContent?: ReactElement;
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
    gridTemplateColumns?: string;
}

const _SelectCardGroup = ({
    defaultValue,
    options,
    name,
    rules,
    onSelect,
    label,
    gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))"
}: SelectCardGroupProps) => {
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
            <Label htmlFor={name} className="mb-4 whitespace-nowrap">
                {label}
            </Label>
            <FormError name={name} className="mb-4" />
            <div
                className={`flex flex-col xs:grid gap-6 w-full`}
                style={{
                    gridTemplateColumns,
                }}
            >
                {options.map(({ value: optionValue, label, renderContent, infoContent }) => (
                    <SelectCard
                        {...field}
                        key={optionValue}
                        value={optionValue}
                        handleSelect={() => handleSelect(optionValue)}
                        isSelected={value === optionValue}
                        label={label}
                        renderContent={renderContent}
                        infoContent={infoContent}
                    />
                ))}
            </div>
        </div>
    )
}

export const SelectCardGroup = memo(_SelectCardGroup)

