import type { Metadata } from "next";
import Script from "next/script";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EMFI: Switched On — Institutional infrastructure without the institutional layers",
    template: "%s — EMFI",
  },
  description:
    "EMFI provides institutional investment infrastructure — research and execution, settlement and custody, wealth and asset management — through one operating relationship, without unnecessary institutional layers.",
  keywords: [
    "institutional investment infrastructure",
    "research and execution",
    "settlement",
    "custody",
    "asset servicing",
    "wealth management",
    "asset management",
    "institutional investors",
    "regulated investment services",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/brand/favicon.ico", type: "image/x-icon" }],
    shortcut: "/brand/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans" suppressHydrationWarning>
        <Script src="/hydration-guard.js" strategy="beforeInteractive" />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
