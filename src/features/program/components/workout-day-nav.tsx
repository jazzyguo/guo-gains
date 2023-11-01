"use client"

import { memo } from "react"
import { type ProgramDay, type ProgramWorkoutDay } from "../types"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { CopyButton } from "@/components/copy-button"
import { cn } from "@/lib/utils"
import { getDayData } from '@/features/program/lib/utils';

type Props = {
    days: ProgramWorkoutDay[];
    programId: string;
    selectedDay: ProgramDay;
    dayNumberInt: number,
}

const DAY_NUMBERS = [1, 2, 3, 4, 5, 6, 7]

/**
 * Renders clicable days on desktop to push the user to the route displaying
 * workout information
 * On Mobile, renders a dropdown menu
 */
const _WorkoutDayNav = ({ dayNumberInt, days, programId, selectedDay }: Props) =>
(
    <div className="py-4 lg:py-0 w-full flex justify-center sticky top-0 bg-neutral-100 border-t border-gray-200 z-[60] flex-col">
        <div
            className="hidden lg:grid w-full gap-6 container max-w-screen-lg container relative"
            style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(115px, 1fr))"
            }}
        >
            <CopyButton
                textToCopy={`${process.env.NEXT_BASE_URL}/program/${programId}`}
                label="Share this program"
                textToShow="Click to copy URL"
                className="absolute top-40 right-[0]"
            />
            {DAY_NUMBERS.map((dayNumber) => {
                const isSelected = dayNumberInt === dayNumber
                const dayData = getDayData(days, dayNumber)
                return (
                    <Link
                        key={`${programId}-${dayNumber}`}
                        href={`/program/${programId}/${dayNumber}`}
                        className="py-4 flex flex-col items-center hover:bg-neutral-200 h-min"
                    >
                        <p className="font-bold text-lg">
                            Day {dayNumber}
                        </p>
                        <p className={cn(
                            "py-2 px-4 rounded-full text-sm text-center whitespace-nowrap",
                            isSelected && 'bg-primary-accent text-white'
                        )}>
                            {dayData.name}
                        </p>
                    </Link>
                )
            })}
        </div>
        <div className="relative w-full flex lg:hidden gap-4 px-4 justify-end container">
            <CopyButton
                textToCopy={`${process.env.VERCEL_URL}/program/${programId}`}
                label="Share"
                className="absolute top-14 right-0"
            />
            <div className="text-xl font-bold">
                {selectedDay.name}
            </div>
            <NavigationMenu
                className="absolute py-2 box-content left-4 top-0 bottom-0 m-auto"
            >
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger
                        >
                            <p className="font-bold text-lg">
                                Day {dayNumberInt}
                            </p>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            {DAY_NUMBERS.map((dayNumber) => {
                                const dayData = getDayData(days, dayNumber)
                                return (
                                    <NavigationMenuLink key={`workoutnav-${dayNumber}`} asChild>
                                        <div className="px-4 py-2">
                                            <Link
                                                key={`${programId}-${dayNumber}`}
                                                href={`/program/${programId}/${dayNumber}`}
                                            >
                                                <p className="font-bold text-base">
                                                    Day {dayNumber}
                                                </p>
                                                <p className="text-base whitespace-nowrap text-neutral-500">
                                                    {dayData.name}
                                                </p>
                                            </Link>
                                        </div>
                                    </NavigationMenuLink>
                                )
                            })}
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    </div>
)

export const WorkoutDayNav = memo(_WorkoutDayNav)
