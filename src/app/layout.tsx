import ThemeToggle from "@/components/ThemeToggle";
import type { Metadata } from "next";
import { Inter, Quicksand, Space_Grotesk } from "next/font/google";
import { ThemeScript } from "quantum-ui/next";
import "./globals.css";
import { Providers } from "./providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vritti AI - Intelligent Solutions",
  description:
    "Transform your business with Vritti AI's cutting-edge artificial intelligence solutions. Experience the future of automation and insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <ThemeScript defaultColorScheme="light" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${quicksand.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
