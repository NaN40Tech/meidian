import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://meidian.id"), // ganti domain kamu nanti
  title: "Mei Dian - Dimsum Homemade",
  description: "Dimsum ayam homemade, gyoza, mie bayam, chili oil, dan hampers lezat.",
  openGraph: {
    title: "Mei Dian - Dimsum Homemade",
    description: "Dimsum ayam homemade, gyoza, mie bayam, chili oil, dan hampers lezat.",
    url: "https://meidian.id",
    siteName: "Mei Dian",
    images: ["/og-image.webp"],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mei Dian - Dimsum Homemade",
    description: "Dimsum ayam homemade, gyoza, mie bayam, chili oil, dan hampers lezat.",
    images: ["/og-image.webp"],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" dir="ltr">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}


