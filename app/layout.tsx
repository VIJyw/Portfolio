import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import ScrollProgress from "@/components/layout/ScrollProgress";
import MobileConnectDock from "@/components/layout/MobileConnectDock";

export const metadata: Metadata = {
  title: "Vijay | Product Manager & Technical Program Manager",
  description:
    "Product Manager with expertise in workflow products, program execution, and data-driven product development. MS from Northeastern University. Open to PM and TPM roles.",
  keywords: [
    "Product Manager",
    "TPM",
    "Technical Program Manager",
    "Product Analytics",
    "Boston",
    "Northeastern",
  ],
  authors: [{ name: "Vijay" }],
  openGraph: {
    title: "Vijay - Product Manager",
    description: "I turn complex problems into shipped products people actually use.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vijay | Product Manager",
    description: "Building products that matter.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-slate-900 text-white relative">
        <div className="site-ambient" aria-hidden="true" />
        <Navbar />
        <ScrollProgress />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <MobileConnectDock />
      </body>
    </html>
  );
}
