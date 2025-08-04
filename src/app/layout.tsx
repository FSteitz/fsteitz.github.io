import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";

import CookieConsentPopup from "@/components/consent/CookieConsentPopup";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Development & Tools: Tutorials and Tech Insights",
  description: "Explore tools, tutorials, and insights on software development and programming languages. Explore the latest in technology to enhance your tech skills.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-[rgb(10,10,10) ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <CookieConsentPopup />
      </body>
    </html>
  );
}
