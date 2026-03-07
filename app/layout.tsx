import { Playfair_Display, DM_Sans } from "next/font/google";
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
  metadataBase: new URL('https://www.codioraacademy.com'),
  authors: [{ name: 'Codiora Academy' }],
  robots: { index: true, follow: true },
  openGraph: {
    images: ['/images/logo.jpg'],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}