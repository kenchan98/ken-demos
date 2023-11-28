import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ken-nextjs-demo",
  description: "a demo playground for nextjs application",
};

export default function RootLayout({ children }) {
  return (
    <html className="select-none" lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
