import { ReactNode } from "react"

import { PageFooter } from "@/components/page/footer/PageFooter"
import { PageNavigation } from "@/components/page/navigation/PageNavigation"

export const PageFrame = ({ pageTitle, pageSubTitle, children }: { pageTitle: string, pageSubTitle: string, children?: ReactNode }) => {
    return (
        <div className="bg-radial-[at_50%_0%] from-[rgb(9,64,116)] via-[rgb(10,10,10)] to-[rgb(9, 64, 116)] bg-size-[175%_275%] bg-center bg-fixed">
            <main className="w-full min-h-298 pt-6">
                <PageNavigation />
                <div className="container mx-auto mt-10 sm:px-5">
                    <h1 className="text-5xl text-center font-sans font-bold leading-14 pt-20">{pageTitle}</h1>
                    <h2 className="text-2xl text-center font-sans font-bold pt-6">{pageSubTitle}</h2>
                    <section className="mt-24">
                        {children}
                    </section>
                </div>
            </main>
            <PageFooter />
        </div>
    )
}