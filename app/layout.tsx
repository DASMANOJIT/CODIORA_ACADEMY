import { Playfair_Display, DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
export const metadata = {
  metadataBase: new URL("https://www.codioraacademy.com"),
  title: {
    default: "Codiora Academy",
    template: "%s | Codiora Academy",
  },
  description:
    "Codiora Academy is a free learning platform for school students with digital education resources, study notes and practice tests, online mentorship, and exam preparation support.",
  authors: [{ name: "Codiora Academy" }],
  robots: { index: true, follow: true },
  keywords: [
    "student learning platform",
    "student mentorship platform",
    "best online learning resources",
    "exam preparation resources",
  ],
  openGraph: {
    images: ["/images/logo.jpg"],
    type: "website",
    siteName: "Codiora Academy",
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
