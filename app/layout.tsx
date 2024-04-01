import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeSwitch from "@/components/theme-switch";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erlangga Dewa Sakti | Software Engineer Portfolio",
  publisher: "Erlangga Dewa Sakti",
  creator: "Erlangga Dewa Sakti",
  keywords: [
    "Portfolio",
    "Software Engineer",
    "Erlangga Dewa Sakti",
    "Software Development",
    "Coding",
    "Problem-solving",
    "Industry Trends",
    "Team Collaboration",
  ],

  description:
    "Erlangga Dewa Sakti is a talented Software Engineer with two years of professional experience. Expertise in software development, coding, and problem-solving. Committed to staying up-to-date with industry trends. Valuable asset to any project or team.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="google-site-verification"
        content="uVUozquWmcTVMKJhhY0PpInPlivTvNMMJtFymjwL49w"
      />
      <meta name="msvalidate.01" content="DA5A237BC5A39221C824C37282FC3F63" />
      <meta name="robots" content="all" />
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
