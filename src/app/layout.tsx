// layout.tsx
import { ReactNode } from "react";
import Header from "@/components/header/header.component";
import Footer from "@/components/footer/footer.component";
import { Bellefair, Barlow_Condensed } from "next/font/google";
import "./globals.scss";

const bellefair = Bellefair({ subsets: ["latin"], weight: ["400"] });
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Space Tourism",
  description: "Frontend Friday Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bellefair.className} ${barlowCondensed.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
