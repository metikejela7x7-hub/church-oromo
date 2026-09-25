import { Newsreader, Hanken_Grotesk } from "next/font/google";
import { church } from "@/data/church";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: church.name,
  description: "An Oromo Christian church community in Atlanta. Join us for Sunday worship, prayer and fellowship.",
};

export const viewport = {
  themeColor: "#2B211A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
