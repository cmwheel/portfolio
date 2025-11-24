import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Charlie Wheeler - Portfolio",
  description: "Building the infrastructure for autonomy",
  openGraph: {
    title: "Charlie Wheeler - Portfolio",
    description: "Building the infrastructure for autonomy",
    url: "https://charliewheeler.org",
    siteName: "Charlie Wheeler Portfolio",
    images: [
      {
        url: "https://charliewheeler.org/images/logistics-project.jpg",
        width: 1200,
        height: 630,
        alt: "Charlie Wheeler Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlie Wheeler - Portfolio",
    description: "Building the infrastructure for autonomy",
    images: ["https://charliewheeler.org/images/logistics-project.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

