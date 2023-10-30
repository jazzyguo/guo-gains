"use client"

import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import MenuIcon from '@mui/icons-material/Menu';

export const DropdownNav = () => (
    <>
        <div className="block lg:hidden z-[100]">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-xs">
                            <MenuIcon />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <b>About</b>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
        <div className="hidden lg:block text-white">
            <Link href="/about" className="hover:opacity-50 p-4">
                <span className="font-bold text-xl">About</span>
            </Link>
        </div>
    </>
)
