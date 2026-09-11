import type { Metadata } from "next";
import localFont from "next/font/local";
import { meta } from "@/content/site";
import "./globals.css";

const manrope = localFont({
  src: "../public/fonts/manrope-variable.woff2",
  variable: "--font-manrope",
  weight: "500 800",
  display: "swap",
  declarations: [{ prop: "font-style", value: "normal" }],
});

const inter = localFont({
  src: "../public/fonts/inter-variable.woff2",
  variable: "--font-inter",
  weight: "400 700",
  display: "swap",
});

const plex = localFont({
  src: [
    {
      path: "../public/fonts/ibm-plex-mono-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ibm-plex-mono-500.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  metadataBase: new URL("https://replylane.app"),
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "https://replylane.app",
    siteName: "replylane",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-body text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
