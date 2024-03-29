import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";

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
        <div>{children}</div>
      </body>
    </html>
  );
}
