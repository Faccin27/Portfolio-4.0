import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FaccinDEV",
  description:
    "Portfólio FaccinDEV - Desenvolvedor Full Stack com foco em Next.js e TypeScript.",
  openGraph: {
    title: "FaccinDEV",
    description:
      "Portfólio FaccinDEV - Desenvolvedor Full Stack com foco em Next.js e TypeScript.",
    url: "https://faccindev.pro",
    siteName: "FaccinDEV",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo FaccinDEV",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FaccinDEV",
    description:
      "Portfólio FaccinDEV - Desenvolvedor Full Stack com foco em Next.js e TypeScript.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
