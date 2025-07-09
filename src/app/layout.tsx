import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindCoach AI - AI 멘탈 코칭 서비스",
  description: "AI가 매일 당신의 감정과 퍼포먼스를 분석하고, 개인 맞춤 심리 훈련을 통해 지속적인 성장을 도와드립니다.",
  keywords: ["AI", "멘탈 코칭", "심리 상담", "자기계발", "감정 분석", "퍼포먼스 향상"],
  authors: [{ name: "MindCoach AI Team" }],
  openGraph: {
    title: "MindCoach AI - AI 멘탈 코칭 서비스",
    description: "AI가 매일 당신의 감정과 퍼포먼스를 분석하고, 개인 맞춤 심리 훈련을 통해 지속적인 성장을 도와드립니다.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "MindCoach AI - AI 멘탈 코칭 서비스",
    description: "AI가 매일 당신의 감정과 퍼포먼스를 분석하고, 개인 맞춤 심리 훈련을 통해 지속적인 성장을 도와드립니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
