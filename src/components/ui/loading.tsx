export const Loading = ({ label }: { label?: string }) => (
    <div className="fixed flex flex-col inset-0 flex justify-center items-center">
        {label &&
            <div className="mb-4 font-bold text-lg md:text-xl">
                {label}
            </div>
        }
        <div className="relative inline-flex">
            <div className="w-5 h-5 bg-primary-accent rounded-full"></div>
            <div className="w-5 h-5 bg-primary-accent rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-5 h-5 bg-primary-accent rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
    </div>
)
