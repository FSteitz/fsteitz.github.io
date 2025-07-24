import Markdown from "react-markdown";

export const GenericInfoBox = ({ Icon, infoText }: { Icon: React.ElementType, infoText: string }) => {
    return (
        <div className="w-full max-w-[80%] bg-muted md:flex md:items-center border-2 p-4 md:p-8 mt-8 md:mt-16 mx-auto">
            <Icon className="w-full h-10 md:w-14 md:h-14 mb-6 md:mb-0" />
            <div className="md:pl-8 break-words prose text-md lg:text-lg w-full max-w-full dark:prose-invert">
                <Markdown>{infoText}</Markdown>
            </div>
        </div>
    );
};
