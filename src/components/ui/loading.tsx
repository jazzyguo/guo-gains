export const Loading = () => (
    <div className="flex justify-center items-center pt-[10rem]">
        <div className="relative inline-flex">
            <div className="w-5 h-5 bg-primary-accent rounded-full"></div>
            <div className="w-5 h-5 bg-primary-accent rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-5 h-5 bg-primary-accent rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
    </div>
)
