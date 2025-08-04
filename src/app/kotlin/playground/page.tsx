import { config } from "@/config";

import { Metadata } from "next";

import Markdown from "react-markdown";

import KTPlayground from "@/components/kotlin/KTPlayground";
import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { IMG_OG_DEFAULT, KOTLIN_PLAYGROUND_BASE_PATH, LOCALE } from "@/lib/constants";

import { markdownContent } from "@/text/markdown";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Kotlin Playground: Effortlessly Experiment with Kotlin Code`,
    description: `Welcome to my Kotlin Playground! Experiment with Kotlin code for Java and JavaScript platforms. Enhance your skills and take your coding to the next level!`,
    alternates: {
      canonical: `${config.baseUrl}/${KOTLIN_PLAYGROUND_BASE_PATH}`
    },
    openGraph: {
      title: `Kotlin Playground: Effortlessly Experiment with Kotlin Code`,
      description: `Welcome to my Kotlin Playground! Experiment with Kotlin code for Java and JavaScript platforms. Enhance your skills and take your coding to the next level!`,
      url: `${config.baseUrl}/${KOTLIN_PLAYGROUND_BASE_PATH}`,
      locale: LOCALE,
      type: "website",
      images: [IMG_OG_DEFAULT]
    }
  };
}

export default function KotlinPlayground() {
  return (
    <PageFrame pageTitle="Explore Kotlin with My Playground" pageSubTitle="Quickly Experiment with Kotlin Online - No Installation Required!">
      <MarkdownProse markdownContent={markdownContent.page.introduction.kotlinPlaygroundPage} />
      <section className="max-w-[80%] prose prose-invert text-xl leading-8 mx-auto">
        <div>
          <h2>Kotlin to Java</h2>
          <Markdown>{markdownContent.hint.kotlinToJava}</Markdown>
          <KTPlayground
            uniqueSelector="kotlin-to-java"
            autoComplete
            matchBrackets
            platform="java"
            code={`
              import java.util.Arrays
              import java.util.stream.Collectors

              fun main(args: Array<String>) {
                // How one might do it with plain Java APIs
                val javaWords = Arrays.asList("hello", "world", "in", "java")
                System.out.println(javaWords.stream().collect(Collectors.joining(" ")))

                // How one might do the same with Kotlin APIs
                val kotlinWords = listOf("hello", "world", "in", "kotlin")
                println(kotlinWords.joinToString(separator = " "))
              }
            `} />
        </div>
        <div className="pt-12">
          <h2>Kotlin to JavaScript</h2>
          <Markdown>{markdownContent.hint.kotlinToJavaScript}</Markdown>
          <KTPlayground
            uniqueSelector="kotlin-to-js"
            autoComplete
            matchBrackets
            platform="js"
            code={`
              fun main(args: Array<String>) {
                alert("Hello World!")
                console.log("Hello World!")
              }

              // Serves sort of like a header declaration. The keyword 'external' tells Kotlin that the
              // actual implementation is provided by the developer or the platform. In this case it's
              // Window.alert().
              external fun alert(message: String)

              // Or Window.console. Execute this code snippet and have a look in your web browser's
              // script console. The type 'dynamic' is only available for the JavaScript platform and
              // basically disables any type check for this value.
              external val console: dynamic;
            `} />
        </div>
      </section>
    </PageFrame>
  );
}
