import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HP Klar Pro",
  description: "Die interaktive Heilpraktiker-Akademie"
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
