import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
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
  title: {
    default: "Vritti AI - AI Business Operating System for SMBs",
    template: "%s | Vritti AI"
  },
  description: "Transform your small business with Vritti AI's intelligent automation. From WhatsApp chaos to enterprise-grade business intelligence. Built for salons, restaurants, clinics, and more.",
  keywords: "AI for small business, business automation, WhatsApp business, SMB software, salon management, restaurant POS, clinic management, driving school software",
  openGraph: {
    title: "Vritti AI - Your AI Business Partner That Never Sleeps",
    description: "AI-powered business operating system for small businesses. Replace WhatsApp chaos with intelligent automation.",
    type: "website",
    url: "https://vritti.ai",
    siteName: "Vritti AI",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vritti AI - AI Business Operating System",
    description: "Transform your small business with private AI automation. No technical knowledge required.",
    site: "@vrittiAI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <ThemeScript 
          defaultColorScheme="dark"
          storageKey="vritti-theme"
          attribute="data-theme"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${quicksand.variable} ${inter.variable}`}
        style={{
          fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
        }}
      >
        <Providers>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </div>
        </Providers>
      </body>
    </html>
  );
}
