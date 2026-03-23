import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ff0000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://brutal-fps.vercel.app"),
  title: "BRUTAL-FPS - Ultimate Gaming Performance Booster",
  description: "The most powerful, 100% FREE FPS booster ever created. Boost your gaming performance by 30-60% with one click. No paywalls. No ads. Just pure, brutal performance.",
  keywords: ["FPS booster", "game optimizer", "performance booster", "gaming", "BlueStacks optimizer", "LDPlayer", "FPS increase", "free FPS booster", "PC gaming", "emulator optimization"],
  authors: [{ name: "Brutal Tools" }],
  icons: {
    icon: "/brutal-fps-logo.svg",
  },
  openGraph: {
    title: "BRUTAL-FPS - Ultimate Gaming Performance Booster",
    description: "The most powerful, 100% FREE FPS booster. Boost gaming performance by 30-60%!",
    url: "https://brutal-fps.vercel.app",
    siteName: "BRUTAL-FPS",
    type: "website",
    images: [
      {
        url: "/brutal-fps-logo.svg",
        width: 512,
        height: 512,
        alt: "BRUTAL-FPS Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRUTAL-FPS - Ultimate Gaming Performance Booster",
    description: "The most powerful, 100% FREE FPS booster. Boost gaming performance by 30-60%!",
    images: ["/brutal-fps-logo.svg"],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
