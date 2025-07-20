import Markdown from "react-markdown"

export const MarkdownProse = ({ markdownContent }: { markdownContent: string }) => {
    return (
        <div className="max-w-[80%] prose prose-invert text-xl leading-8 mx-auto">
            <Markdown>{markdownContent}</Markdown>
        </div>
    )
}