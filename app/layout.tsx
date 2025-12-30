import type { Metadata } from "next";
import { Patrick_Hand, Quicksand } from "next/font/google";
import "./globals.css";

const patrick = Patrick_Hand({ weight: "400", subsets: ["latin"], variable: "--font-hand" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "The Family Adventure | Homemade Happiness",
  description: "Join our delicious journey of homemade laddoos and happy moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${patrick.variable} ${quicksand.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased text-stone-800 bg-[#faf9f6]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
