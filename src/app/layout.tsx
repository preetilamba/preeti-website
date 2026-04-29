import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Preeti Lamba — ML, AI Safety, and Diffusion Language Models",
  description:
    "Personal research website of Preeti Lamba, PhD researcher at IIIT Hyderabad. Articles and notes on machine learning, diffusion models, AI safety, alignment, and mathematics for AI/ML.",
  openGraph: {
    title: "Preeti Lamba — ML, AI Safety, and Diffusion Language Models",
    description:
      "Personal research website of Preeti Lamba, PhD researcher at IIIT Hyderabad. Articles and notes on machine learning, diffusion models, AI safety, alignment, and mathematics for AI/ML.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf9f7] text-stone-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
