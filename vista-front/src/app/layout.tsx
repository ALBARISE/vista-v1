import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "次世代TikTokライブ事務所｜VISTA｜TikTok LIVE",
  description:
    "Vistaは、浦西ひかるプロデュースのTikTok LIVE事務所で、次世代の人気インフルエンサーを目指すライバーを全力でサポートします。多彩なコンテンツ制作やフォロワー増加のノウハウを提供し、あなたの夢を実現する場として最適です。Vistaで新たな可能性を広げましょう！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
