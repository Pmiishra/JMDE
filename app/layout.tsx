import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Placeholders for layout components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JMDE | Industrial Civil, Mechanical & Scaffolding Services",
  description:
    "Delivering reliable Civil Works, Mechanical Works, Shot Grit Blasting, Painting, and Scaffolding Services for industrial and infrastructure projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={inter.className}>
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
