import Link from "next/link"

import { Menu } from "lucide-react"
import { FaTools } from "react-icons/fa"
import { FaBookJournalWhills } from "react-icons/fa6"
import { IoPersonCircle } from "react-icons/io5"
import { PiHouseFill } from "react-icons/pi"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet"

import { ABOUT_ME_BASE_PATH, BLOG_BASE_PATH, TOOLS_BASE_PATH } from "@/lib/constants"

interface MenuItemIcon {
    Icon: React.ElementType
    className: string
}

interface MenuItem {
    icon: MenuItemIcon
    name: string
    href: string
    leading: string
}

const menuItems: MenuItem[] = [
    {
        icon: { Icon: PiHouseFill, className: "w-5 h-5 mr-2" },
        name: "Home",
        href: "/",
        leading: "leading-4.5"
    },
    {
        icon: { Icon: FaBookJournalWhills, className: "w-4 h-4 mt-[.2rem] mr-2" },
        name: "Blog",
        href: `/${BLOG_BASE_PATH}`,
        leading: "leading-5"
    },
    {
        icon: { Icon: FaTools, className: "w-4 h-4 mt-[.2rem] mr-2" },
        name: "Tools",
        href: `/${TOOLS_BASE_PATH}`,
        leading: "leading-5"
    },
    {
        icon: { Icon: IoPersonCircle, className: "w-6 h-6 mr-2" },
        name: "About",
        href: `/${ABOUT_ME_BASE_PATH}`,
        leading: "leading-5.5"
    }
];

export const PageNavigation = () => {
    return (
        <nav className="bg-[rgb(10,10,10)] w-32 md:w-128 h-12 rounded-4xl m-auto p-1 shadow-md shadow-gray-900">
            <div className="hidden md:flex">
                {menuItems.map((item) => (
                    <Link key={item.name} className="w-36 px-1 py-2 font-semibold not-last:border-r not-last:border-gray-700 hover:bg-sky-600 rounded-4xl flex justify-center" href={item.href}>
                        <item.icon.Icon className={item.icon.className} />
                        <span className={item.leading}>{item.name}</span>
                    </Link>
                ))}
            </div>
            <div className="md:hidden pl-5 pt-1">
                <Sheet>
                    <SheetTrigger className="flex items-center">
                        <Menu size="30" className="mr-2" /> Menu
                    </SheetTrigger>
                    <SheetContent className="pt-6">
                        <SheetHeader>
                            <SheetDescription>
                                {menuItems.map((item) => (
                                    <a key={item.name} href={item.href} className="flex pl-3">
                                        <div className="w-10 text-left">
                                            <item.icon.Icon className={item.icon.className} />
                                        </div>
                                        <span className={`text-xl font-bold pb-8 ${item.leading}`}>{item.name}</span>
                                    </a>
                                ))}
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}