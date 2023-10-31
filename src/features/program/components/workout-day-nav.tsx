"use client"

import { memo } from "react"
import { type DayNumber, type ProgramDays } from "../types"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

type Props = {
    days: ProgramDays;
    programId: string;
    selectedDayNumber: DayNumber;
}

/**
 * Renders clicable days on desktop to push the user to the route displaying
 * workout information
 * On Mobile, renders a dropdown menu
 */
const _WorkoutDayNav = ({ days, programId, selectedDayNumber }: Props) => {
    return (
        <div className="py-4 lg:py-0 w-full flex justify-center sticky top-0 bg-neutral-100 border-t border-gray-200 z-[60]">
            <div
                className="hidden lg:grid w-full gap-6 container max-w-screen-lg container"
                style={{
                    gridTemplateColumns: "repeat(auto-fill, minmax(115px, 1fr))"
                }}
            >
                {Object.keys(days).map((dayNumber) => {
                    const isSelected = dayNumber === selectedDayNumber
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
                                {days[dayNumber as DayNumber]?.name || 'Rest'}
                            </p>
                        </Link>
                    )
                })}
            </div>
            <div className="relative w-full flex lg:hidden gap-4 px-4 justify-end container">
                <div className="text-xl font-bold">
                    {days[selectedDayNumber as DayNumber]?.name || 'Rest'}
                </div>
                <NavigationMenu
                    className="absolute py-2 box-content left-4 top-0 bottom-0 m-auto"
                >
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                            >
                                <p className="font-bold text-lg">
                                    Day {selectedDayNumber}
                                </p>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                {Object.keys(days).map((dayNumber) => (
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
                                                    {days[dayNumber as DayNumber]?.name || 'Rest'}
                                                </p>
                                            </Link>
                                        </div>
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

export const WorkoutDayNav = memo(_WorkoutDayNav)
