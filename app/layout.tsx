import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CursorProvider } from "../contexts/CursorContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nexalis | Intelligent Digital Solutions & AI Engineering",
  description: "Nexalis builds the future of digital experience through high-end web development, AI agent integration, and strategic technical consultation.",
  keywords: "Nexalis, digital agency, AI engineering, web development, React, Next.js, AI agents, mobile apps, software architecture",
  authors: [{ name: "Nexalis Team" }],
  openGraph: {
    type: "website",
    url: "https://nexalis.io/",
    title: "Nexalis | Intelligent Digital Solutions",
    description: "Forging the Digital Intelligence. We architect high-performance systems and deploy intelligent AI agents.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&h=630&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Nexalis Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexalis | Intelligent Digital Solutions",
    description: "Forging the Digital Intelligence. We architect high-performance systems and deploy intelligent AI agents.",
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&h=630&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} min-h-screen bg-lumina-dark text-white selection:bg-lumina-accent selection:text-white font-sans`}>
        <CursorProvider>
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
