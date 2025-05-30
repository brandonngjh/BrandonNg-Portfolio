import Header from "@/components/layout/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/footer";
import ThemeSwitch from "@/components/layout/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

export const metadata = {
  title: "Brandon Ng",
  description: "Brandon is a computer science student and software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className="font-helvetica bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
      >
        <div className="bg-[#fbe2e3] overflow-x-visible absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] overflow-x-visible absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
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
