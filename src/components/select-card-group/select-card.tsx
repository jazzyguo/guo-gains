import { type ReactElement, memo, forwardRef } from "react"
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import InfoIcon from '@mui/icons-material/Info';

const selectedClass = "border-primary-accent/70 bg-primary-accent/50"

type SelectCardProps = {
    value: string | number;
    handleSelect: (value: unknown) => void
    isSelected: boolean;
    label: string;
    renderContent?: ReactElement;
    infoContent?: ReactElement;
}

const _SelectCard = forwardRef(({ handleSelect, isSelected, label, value, renderContent, infoContent, ...rest }: SelectCardProps, _) => (
    <Card
        className={`${isSelected ? selectedClass : ''} w-full p-4 relative`}
        onClick={handleSelect}
    >
        {/** Popover only appears on mobile */}
        {!!infoContent &&
            <Popover>
                <PopoverTrigger
                    className="md:hidden absolute right-[-.125rem] top-[-.125rem] w-10 h-10"
                    onClick={e => e.stopPropagation()}
                >
                    <InfoIcon />
                </PopoverTrigger>
                <PopoverContent align="end" className="md:hidden">{infoContent}</PopoverContent>
            </Popover>
        }
        {!!infoContent &&
            <HoverCard>
                <HoverCardTrigger className="hidden md:block absolute right-1 top-1">
                    <InfoIcon />
                </HoverCardTrigger>
                <HoverCardContent align="end" className="hidden md:block">
                    {infoContent}
                </HoverCardContent>
            </HoverCard>
        }
        <Label className="cursor-pointer">
            <input
                {...rest}
                value={value}
                className="hidden"
                type="radio"
            />
            <div
                className="flex flex-col items-center gap-4 justify-between rounded-full h-full"
            >
                <div className={`${isSelected ? 'text-white' : 'text-secondary-text'} text-6xl`}>
                    {renderContent}
                </div>
                <div className="text-lg text-center whitespace-nowrap">{label}</div>
            </div>
        </Label>
    </Card>
))

_SelectCard.displayName = 'SelectCard';

export const SelectCard = memo(_SelectCard)
