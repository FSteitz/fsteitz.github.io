import Link from "next/link"

import { FaTools } from "react-icons/fa"
import { FaBookJournalWhills } from "react-icons/fa6"
import { IoPersonCircle } from "react-icons/io5"
import { PiHouseFill } from "react-icons/pi"

export const PageNavigation = () => {
    return (
        <nav className="bg-[rgb(10,10,10)] w-128 h-12 rounded-4xl m-auto flex p-1 shadow-md shadow-gray-900">
            <Link className="w-36 px-1 py-2 font-semibold border-r border-gray-700 hover:bg-gray-800 rounded-4xl flex justify-center" href="/">
                <PiHouseFill className="w-5 h-5 mr-2" />
                <span>Home</span>
            </Link>
            <Link className="w-36 px-1 py-2 font-semibold border-r border-gray-700 hover:bg-gray-800 rounded-4xl flex justify-center" href="/blog">
                <FaBookJournalWhills className="w-4 h-4 mt-[.2rem] mr-2" />
                <span>Blog</span>
            </Link>
            <Link className="w-36 px-1 py-2 font-semibold border-r border-gray-700 hover:bg-gray-800 rounded-4xl flex justify-center" href="/tools">
                <FaTools className="w-4 h-4 mt-[.2rem] mr-2" />
                <span>Tools</span>
            </Link>
            <Link className="w-36 px-1 py-2 font-semibold hover:bg-gray-800 rounded-4xl flex justify-center" href="/about-me">
                <IoPersonCircle className="w-6 h-6 mr-2" />
                <span>About</span>
            </Link>
        </nav>
    )
}