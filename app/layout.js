import type { Metadata } from "next";
import {inter} from "@/styles/font";
import {ThemedHTML} from "@/styles/theme";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "KPU KMTETI 2024",
  description: "Welcome! This is the official website of KPU KMTETI 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemedHTML>
      <body
        className={`${inter.className} antialiased`}
      >
        {/** TODO: @Frontend */}
        {children}
      </body>
    </ThemedHTML>
  );
}
