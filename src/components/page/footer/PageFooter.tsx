import { config } from "@/config"

import Link from "next/link"
import { FaGithub, FaLinkedin, FaXing } from "react-icons/fa"
import { FaBluesky } from "react-icons/fa6"

export const PageFooter = () => {
    return (
        <footer className="container mx-auto mt-10 ">
            <section className="w-[80%] flex flex-row items-center justify-between pb-6 mx-auto">
                <p className="font-semibold">© Copyright {new Date().getFullYear()} {config.website.copyright}</p>
                <div className="flex flex-row items-center justify-between gap-3">
                    <Link className="hover:text-sky-600" href="https://github.com/FSteitz"><FaGithub size={24} /></Link>
                    <Link className="hover:text-sky-600" href="https://bsky.app/profile/xardex.dev"><FaBluesky size={24} /></Link>
                    <Link className="hover:text-sky-600" href="https://www.linkedin.com/in/florian-steitz-2242aa6b"><FaLinkedin size={24} /></Link>
                    <Link className="hover:text-sky-600" href="https://www.xing.com/profile/Florian_Steitz2"><FaXing size={24} /></Link>
                </div>
            </section>
        </footer>
    )
}