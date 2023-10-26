import { memo } from 'react'
import { useFormState } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"

const _FormError = ({ name }: { name: string }) => {
    const { errors } = useFormState()
    return (
        <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => <p className="text-red-400 text-sm">{message}</p>}
        />
    )
}

export const FormError = memo(_FormError)
