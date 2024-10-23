import type { Metadata } from "next";
import Header from "@/components/widgets/layout/header/Header";

export const metadata: Metadata = {
  title: "Тестовое задание",
  description: "Выполнено Герасименко Максимом Александровичем",
};

export default function WithHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
