import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sofiaPro = localFont({
  src: [
    {
      path: "../public/fonts/Sofia Pro Regular.woff", 
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Sofia Pro Light.woff", 
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Sofia Pro Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sofia-pro",
});

export const metadata: Metadata = {
  title: "Byteex Landing",
  description: "Byteex Landing Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sofiaPro.variable} h-full antialiased`} // Подключили только Sofia Pro
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}