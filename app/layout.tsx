import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Arimo } from 'next/font/google'
import "./globals.css";


const arimo = Arimo ({
    subsets: ['latin'],
    display: 'swap',
})

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
      <body
        className={`bg-[#F2EDE4] h-screen antialiased`}
      >
        <div className="h-screen w-2/3 m-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
