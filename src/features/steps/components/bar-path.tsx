export const BarPath = ({ active = false, className }: { active?: boolean, className?: string }) => (
    <div
        className={`absolute w-10 h-1 ${active ? 'bg-violet-400' : 'bg-gray-400'} ${className} top-0 bottom-0 my-auto z-[-1]`}
    />
)
