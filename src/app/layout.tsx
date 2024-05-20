// layout.tsx
import React from "react";
import Header from "@/components/header/header.component";
import Footer from "@/components/footer/footer.component";
import { Inter } from "next/font/google";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Space Tourism",
  description: "Frontend Friday Challenge",
};

interface LayoutProps {
  children: React.ReactNode;
  pageClass?: string; 
}

const RootLayout: React.FC<LayoutProps> = ({ children, pageClass }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pageClass}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
