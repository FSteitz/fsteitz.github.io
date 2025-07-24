import { ReactNode } from "react"

import { GenericInfoBox } from "@/components/info/GenericInfoBox"
import { PageFooter } from "@/components/page/footer/PageFooter"
import { PageNavigation } from "@/components/page/navigation/PageNavigation"

export interface PageInfoBox {
    Icon: React.ElementType
    infoText: string
}

export const PageFrame = ({ pageTitle, pageSubTitle, infoBox, children }: { pageTitle: string, pageSubTitle?: string, infoBox?: PageInfoBox, children?: ReactNode }) => {
    return (
        <div className="bg-radial-[at_50%_0%] from-[rgb(9,64,116)] via-[rgb(10,10,10)] to-[rgb(9, 64, 116)] bg-size-[175%_275%] bg-center bg-fixed">
            <main className="w-full min-h-298 pt-6">
                <PageNavigation />
                <div className="container mx-auto mt-10 sm:px-5">
                    <h1 className="text-5xl text-center font-sans font-bold leading-14 pt-20">{pageTitle}</h1>
                    {pageSubTitle &&
                        <h2 className="text-2xl text-center font-sans font-bold pt-6">{pageSubTitle}</h2>
                    }
                    <section className="mt-24">
                        {children}
                    </section>
                </div>
                {infoBox &&
                    <div className="container mx-auto px-2 sm:px-5">
                        <GenericInfoBox Icon={infoBox.Icon} infoText={infoBox.infoText} />
                    </div>
                }
            </main>
            <PageFooter />
        </div>
    )
}