"use client"

const ErrorPage = ({ error }: { error: unknown }) => (
    <div className="text-center text-red-500 pt-10">
        {error?.message || 'An Error occured'}
    </div>
)

export default ErrorPage