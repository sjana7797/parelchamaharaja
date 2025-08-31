import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Parel Cha Maharaja 2025 | Ganesh Utsav Mandal Mumbai",
  description:
    "Celebrate Ganesh Utsav with Parel Cha Maharaja – the beloved Ganpati of Mumbai. Aarti timings, events, photos, videos & live updates.",
  openGraph: {
    title: "Parel Cha Maharaja 2025 | Ganesh Utsav Mandal Mumbai",
    description:
      "Celebrate Ganesh Utsav with Parel Cha Maharaja – the beloved Ganpati of Mumbai. Aarti timings, events, photos, videos & live updates.",
    images: [
      {
        url: "/images/parel-cha-maharaja-2025.jpg",
        width: 1200,
        height: 630,
        alt: "Parel Cha Maharaja Ganesh Idol",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parel Cha Maharaja 2025 | Ganesh Utsav Mandal Mumbai",
    description:
      "Celebrate Ganesh Utsav with Parel Cha Maharaja – the beloved Ganpati of Mumbai. Aarti timings, events, photos, videos & live updates.",
    images: ["/images/parel-cha-maharaja-2025.jpg"],
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
      className={`${inter.variable} ${playfair.variable} antialiased scroll-smooth`}
    >
      <body className={`font-sans ${inter.variable}`}>{children}</body>
    </html>
  );
}
