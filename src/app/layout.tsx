import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond, Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guilherme Rafael — 3D Designer & Consultant for Beverages",
  description:
    "Crafting photorealistic visual identities for non-alcoholic beverage brands through precision 3D rendering and strategic design consultation.",
  keywords: [
    "3D designer",
    "beverage rendering",
    "Blender",
    "photorealistic",
    "luxury portfolio",
    "non-alcoholic beverages",
    "Guilherme Rafael",
  ],
  authors: [{ name: "Guilherme Rafael" }],
  openGraph: {
    title: "Guilherme Rafael — 3D Designer & Consultant for Beverages",
    description:
      "Crafting photorealistic visual identities for non-alcoholic beverage brands through precision 3D rendering and strategic design consultation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${playfair.variable} ${garamond.variable} ${cinzel.variable} ${cormorant.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
