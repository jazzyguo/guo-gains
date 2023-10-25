import "@/styles/globals.css";

import { Inter, Bangers } from "next/font/google";
import { MainNav } from "@/components/main-nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const bangers = Bangers({
  subsets: ["latin"],
  weight: ['400'],
  variable: "--font-bangers",
});

export const metadata = {
  title: 'Guo Gains',
  description: 'Generate those gains',
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <html lang="en">
    <body className={`font-sans ${inter.variable} ${bangers.variable}`}>
      <MainNav />
      <div className="flex flex-col container py-8">
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout
