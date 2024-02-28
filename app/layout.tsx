import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Oxanium({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edge Funds",
  description: "Edge Funds",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className='scroll-smooth'>
      <body className={`${inter.className} px-2 md:px-4`}>
        <Toaster />
        <div>{children}</div>
        <Header />
        <Footer />
      </body>
    </html>
  );
}
