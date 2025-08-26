import React from "react";
import Header from "@/components/Header";
import '../styles/globals.css';
import { Inter, Press_Start_2P, JetBrains_Mono } from "next/font/google";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Chaitanya | Personal Portfolio",
  description: "Chaitanya is a backend developer with 3 years of experience.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        {/* Google Fonts fallback for Press Start 2P */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${pressStart2P.className} relative pt-28 sm:pt-36 !scroll-smooth`}>
        {/* Pixelated grid background is handled in CSS */}

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
