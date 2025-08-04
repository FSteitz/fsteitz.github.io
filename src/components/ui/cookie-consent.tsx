"use client";

import Link from "next/link";

import React from "react";

import { Cookie } from "lucide-react";
import Markdown from "react-markdown";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";

import { cn } from "@/lib/utils";

interface CookieConsentProps extends React.HTMLAttributes<HTMLDivElement> {
  onAccept?: () => void
  onDecline?: () => void
  consentDecisionMade?: () => boolean
  description: string
  cookiePolicyPath?: string
  privacyPolicyPath?: string
  imprintPath?: string
}

export const CookieConsent = React.forwardRef<
  HTMLDivElement,
  CookieConsentProps>(({
    onAccept = () => { },
    onDecline = () => { },
    consentDecisionMade = () => false,
    description,
    cookiePolicyPath = "#",
    privacyPolicyPath = "#",
    imprintPath = "#",
    className,
    ...props
  },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [hide, setHide] = React.useState(false);

    const handleAccept = React.useCallback(() => {
      close();
      onAccept();
    }, [onAccept]);

    const handleDecline = React.useCallback(() => {
      close();
      onDecline();
    }, [onDecline]);

    const close = () => {
      setIsOpen(false);
      setTimeout(() => setHide(true), 700);
    }

    React.useEffect(() => {
      try {
        setIsOpen(true);
        if (consentDecisionMade()) {
          close();
        }
      } catch (error) {
        console.warn(`Cookie consent error: ${error}`);
      }
    }, [consentDecisionMade]);

    if (hide) {
      return null;
    }

    const containerClasses = cn("fixed z-50 transition-all duration-700", !isOpen ? "translate-y-full opacity-0" : "translate-y-0 opacity-100", className);
    return (
      <div
        ref={ref}
        className={cn(
          containerClasses,
          "bottom-0 left-0 right-0 xl:left-4 md:bottom-40 w-full md:max-w-3xl mx-auto",
        )}
        {...props}
      >
        <Card className="sm:m-3 shadow-md shadow-sky-950 border-1 border-sky-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="w-full text-lg sm:text-xl font-bold sm:text-center">Your Privacy is Important to Me!</CardTitle>
            <Cookie className="h-5 w-5" />
          </CardHeader>
          <CardContent className="space-y-2">
            <CardDescription>
              <div className="prose prose-md dark:prose-invert max-w-full break-words">
                <Markdown>{description}</Markdown>
              </div>
            </CardDescription>
          </CardContent>
          <CardFooter className="flex gap-2 pt-2">
            <Button onClick={handleDecline} variant="secondary" className="flex-1 text-xl bg-gray-700 cursor-pointer">Decline</Button>
            <Button onClick={handleAccept} variant="secondary" className="flex-1 text-xl cursor-pointer">Accept</Button>
          </CardFooter>
          <section className="px-6 pb-3">
            <ul className="flex flex-row items-center">
              <li className="ml-auto">
                <Link href={cookiePolicyPath} className="text-xs text-primary underline underline-offset-4">Cookie Policy</Link>
              </li>
              <li className="mx-6">
                <Link href={privacyPolicyPath} className="text-xs text-primary underline underline-offset-4">Privacy Policy</Link>
              </li>
              <li className="mr-auto">
                <Link href={imprintPath} className="text-xs text-primary underline underline-offset-4">Imprint</Link>
              </li>
            </ul>
          </section>
        </Card>
      </div>
    );
  });

CookieConsent.displayName = "CookieConsent";