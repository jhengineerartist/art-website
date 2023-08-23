import "./globals.css";
import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";

const font = PT_Serif({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jhirshman.art"),
  title: {
    default: "J. Hirshman Fine Art",
    template: "%s | J.H. Fine Art"
  },
  description: "Follow the artwork and experience the portfolio of fine artist Jose Hirshman.",
  verification: {
    google: 'google',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  category: "art"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/artlogo.ico" sizes="any" />
      </head>
      <body className={`${font.className}`}>
        <Navbar />
        <div className="pt-22">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
