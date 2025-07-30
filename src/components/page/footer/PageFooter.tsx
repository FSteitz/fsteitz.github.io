import { config } from "@/config"

import { IMPRINT_BASE_PATH, PRIVACY_POLICY_BASE_PATH, PRIVACY_SETTINGS_BASE_PATH } from "@/lib/constants"

import Link from "next/link"
import { FaGithub, FaLinkedin, FaXing } from "react-icons/fa"
import { FaBluesky } from "react-icons/fa6"

export const PageFooter = () => {
    return (
        <footer className="container mx-auto mt-10 ">
            <hr className="mx-16 mt-20 mb-12" />
            <section className="w-[80%] flex flex-row items-center justify-between mx-auto">
                <div className="mx-auto">
                    <h4 className="font-sans font-semibold text-xl pb-4">More Pages</h4>
                    <ul className="text-center">
                        <li className="font-semibold">
                            <Link href={`/${IMPRINT_BASE_PATH}`} className="hover:text-sky-600">Imprint</Link>
                        </li>
                        <li className="font-semibold pt-2">
                            <Link href={`/${PRIVACY_POLICY_BASE_PATH}`} className="hover:text-sky-600">Privacy Policy</Link>
                        </li>
                        <li className="font-semibold pt-2">
                            <Link href={`/${PRIVACY_SETTINGS_BASE_PATH}`} className="hover:text-sky-600">Privacy Settings</Link>
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="mx-16 my-12" />
            <section className="w-[80%] flex flex-row items-center justify-between pb-6 mx-auto">
                <p className="font-semibold">© Copyright {new Date().getFullYear()} {config.website.copyright}</p>
                <div className="flex flex-row items-center justify-between gap-3">
                    <Link className="hover:text-sky-600" href="https://github.com/FSteitz"><FaGithub size={24} /></Link>
                    <Link className="hover:text-sky-600 hidden" href="https://bsky.app/profile/xardex.dev"><FaBluesky size={24} /></Link>
                    <Link className="hover:text-sky-600" href="https://www.linkedin.com/in/florian-steitz-2242aa6b"><FaLinkedin size={24} /></Link>
                    <Link className="hover:text-sky-600" href="https://www.xing.com/profile/Florian_Steitz2"><FaXing size={24} /></Link>
                </div>
            </section>
        </footer>
    )
}