import { Sometype_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "../components/MainNav";
import MobileNav from "../components/MobileNav";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashen De Silva | Creative Full-Stack Developer",
  description:
    "I’m Ashen De Silva — a creative full-stack developer who blends design and technology to build stunning web, mobile, and brand experiences. Explore my portfolio built with Next.js, Tailwind, and Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sometypeMono.variable} antialiased bg-primary text-white overflow-x-hidden relative`}>
        {/* Top navbar: Desktop = MainNav, Mobile = MobileNav */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/70 backdrop-blur">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center">
            <div className="hidden md:flex w-full">
              <MainNav />
            </div>
            <div className="flex md:hidden w-full">
              <MobileNav />
            </div>
          </div>
        </header>

        <main className="min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
