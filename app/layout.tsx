import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { StatusBar } from "@/components/chrome/StatusBar";
import { Nav } from "@/components/chrome/Nav";
import { Footer } from "@/components/chrome/Footer";
import { StickyHello } from "@/components/chrome/StickyHello";
import { ScrollProgress } from "@/components/chrome/ScrollProgress";
import { CursorFollower } from "@/components/chrome/CursorFollower";
import { RouteSplash } from "@/components/chrome/RouteSplash";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://febryards.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Febry Ardiansyah — Mobile Apps & Frontend Engineer",
    template: "%s · Febry Ardiansyah",
  },
  description:
    "Software engineer focused on mobile and frontend development. I write clean, maintainable code across Flutter, Next.js, and Node.js.",
  keywords: [
    "Febry Ardiansyah",
    "Mobile Apps Developer",
    "Frontend Engineer",
    "Flutter",
    "Next.js",
    "React",
    "TypeScript",
    "Indonesia",
  ],
  authors: [{ name: "Febry Ardiansyah" }],
  creator: "Febry Ardiansyah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Febry Ardiansyah",
    title: "Febry Ardiansyah — Mobile Apps & Frontend Engineer",
    description:
      "Software engineer focused on mobile and frontend development. Flutter, Next.js, Node.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Febry Ardiansyah — Mobile Apps & Frontend Engineer",
    description:
      "Software engineer focused on mobile and frontend development. Flutter, Next.js, Node.js.",
    creator: "@febryards",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d10" },
  ],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrument.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <CursorFollower />
        <StatusBar />
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyHello />
        <RouteSplash />
      </body>
    </html>
  );
}