export const Loading = () => (
    <div className="fixed inset-0 flex justify-center items-center">
        <div className="relative inline-flex">
            <div className="w-5 h-5 bg-primary-accent rounded-full"></div>
            <div className="w-5 h-5 bg-primary-accent rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-5 h-5 bg-primary-accent rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
    </div>
)
