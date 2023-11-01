"use client"

const ErrorPage = ({ error }: { error: { message: string } }) => (
    <div className="text-center text-red-500 pt-10">
        {error?.message || 'An Error occured'}
    </div>
)

export default ErrorPage