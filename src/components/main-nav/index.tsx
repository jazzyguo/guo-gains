import { Logo } from "@/components/ui/logo"
import { DropdownNav } from "../dropdown-nav"
import Link from "next/link"

export const MainNav = () => (
    <div className="bg-neutral-100">
        <div className="flex container py-4 items-center justify-between">
            <Link href="/">
                <div className="flex items-center">
                    <Logo className="w-[32px] h-[32px] lg:w-[80px] lg:h-[80px] mr-2" />
                    <h1 className="text-violet-500 font-bangers">Guo Gains</h1>
                </div>
            </Link>
            <div>
                <DropdownNav />
            </div>
        </div>
    </div>
)
