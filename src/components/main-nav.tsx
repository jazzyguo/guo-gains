import { DropdownNav } from "@/components/dropdown-nav"
import Link from "next/link"
import { Logo, LogoText } from "@/components/logo"

export const MainNav = () => (
    <div className="bg-gradient-primary">
        <div className="flex container py-4 items-center justify-between">
            <Link href="/">
                <div className="flex items-center">
                    <Logo className="w-[48px] h-[48px] lg:w-[80px] lg:h-[80px] mr-1" />
                    <LogoText size="small" />
                </div>
            </Link>
            <div className="z-[100]">
                <DropdownNav />
            </div>
        </div>
    </div>
)
