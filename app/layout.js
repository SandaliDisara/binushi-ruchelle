// app/layout.jsx
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

// Keep Geist for general copy / UI
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });


const displaySerif = localFont({
  variable: "--font-display",
  src: [
    { path: "../public/fonts/CormorantGaramond-Regular.ttf", weight: "400", style: "normal" },
  ],
  preload: true,
});


const scriptFont = localFont({
  variable: "--font-script",
  src: [{ path: "../public/fonts/PinyonScript-Regular.ttf", weight: "400", style: "normal" }],
  preload: true,
});

const thirdFont = localFont({
  variable: "--font-third",
  src: [{path: "../public/fonts/NothingYouCouldDo-Regular.ttf", weight: "400", style: "normal",}],
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
          thirdFont.variable,
          "antialiased",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
