import type { Metadata } from "next";
import { Inter, Roboto, Work_Sans } from "next/font/google";
import "@/styles/globals.scss";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
});

const fontRoboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "400", "500"],
  subsets: ["cyrillic", "latin"],
});

const fontWork = Work_Sans({
  variable: "--font-work",
  weight: ["300", "400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Тестовое задание",
  description: "Выполнено Герасименко Максимом Александровичем",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontInter.variable} ${fontRoboto.variable} ${fontWork.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
