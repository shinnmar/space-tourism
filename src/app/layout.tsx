// layout.tsx
import { ReactNode } from "react";
import Header from "@/components/header/header.component";
import Footer from "@/components/footer/footer.component";
import { Inter } from "next/font/google";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
