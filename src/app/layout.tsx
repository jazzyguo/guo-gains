import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: 'Guo Gains',
  description: 'Generate those gains',
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <MainNav />
        <div className="flex flex-col container py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
