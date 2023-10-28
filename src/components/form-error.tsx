import { memo } from 'react'
import { useFormState } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"
import { cn } from "@/lib/utils"

const _FormError = ({ name, className }: { name: string; className?: string }) => {
    const { errors } = useFormState()
    return (
        <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => <p className={cn("text-red-400 text-sm", className)}>{message}</p>}
        />
    )
}

export const FormError = memo(_FormError)
