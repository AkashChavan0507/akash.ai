import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akash Chavan | AI-ML Engineer",
  description: "AI-ML Engineer with 6+ years of experience in Generative AI, LLMs, Computer Vision, and Production-ready Systems",
  keywords: ["AI Engineer", "ML Engineer", "Generative AI", "LLM", "Deep Learning", "Computer Vision", "Akash Chavan"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

