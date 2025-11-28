import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "サイトタイトル",
  description: "ここに説明文を入れてください。",
  keywords: ["Web制作", "Next.js", "LP制作"],
  openGraph: {
    title: "サイトタイトル",
    description: "ここに説明文を入れてください。",
    images: ["/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
