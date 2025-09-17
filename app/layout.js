// app/layout.jsx
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

// Keep Geist for general copy / UI
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Display serif for names (Cormorant Garamond)
const displaySerif = localFont({
  variable: "--font-display",
  src: [
    { path: "../public/fonts/CormorantGaramond-Regular.ttf", weight: "400", style: "normal" },
    // If you have semibold/bold files, add them here too:
    // { path: "/fonts/CormorantGaramond-SemiBold.ttf", weight: "600", style: "normal" },
    // { path: "/fonts/CormorantGaramond-Bold.ttf", weight: "700", style: "normal" },
  ],
  preload: true,
});

// Script for tagline (Pinyon Script)
const scriptFont = localFont({
  variable: "--font-script",
  src: [{ path: "../public/fonts/PinyonScript-Regular.ttf", weight: "400", style: "normal" }],
  preload: true,
});

export const metadata = {
  title: "Binushi & Ruchelle",
  description: "Forever begins with this magical moment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          displaySerif.variable,
          scriptFont.variable,
          "antialiased",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
