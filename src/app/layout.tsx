import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.odiocustombuilders.com"),
  title: {
    default: `${SITE_CONFIG.name} | Remodeling & Repairs, ${SITE_CONFIG.address.city} SC`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "home repairs",
    "remodeling",
    "custom builder",
    "kitchen remodel",
    "bathroom remodel",
    "closing repairs",
    "realtor contractor",
    SITE_CONFIG.address.city,
    SITE_CONFIG.address.state,
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "https://images.pexels.com/photos/35689825/pexels-photo-35689825.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 800,
        alt: "Odio Custom Builders — Home Remodeling & Repairs in Greenville, SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ["https://images.pexels.com/photos/35689825/pexels-photo-35689825.jpeg?auto=compress&cs=tinysrgb&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
