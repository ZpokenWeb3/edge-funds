import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Oxanium({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UltraYield",
  description: "UltraYield",
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className}`}>
        <Toaster />
        <div className="px-2 md:px-4">{children}</div>
        <Header />
        <div className="px-2 md:px-4">
          <Footer />
        </div>
      </body>
    </html>
  );
}
