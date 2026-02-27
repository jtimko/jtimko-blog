import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JTimko - My corner of the internet",
  description: "Justin Timko's blog of projects, ideas, and photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={arimo.className}>
      <body className="bg-[#F2EDE4] min-h-screen antialiased">
        <div className="min-h-screen w-full max-w-3xl mx-auto px-4 sm:px-6">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
