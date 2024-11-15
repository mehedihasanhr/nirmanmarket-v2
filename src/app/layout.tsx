import type { Metadata } from "next";
import "remixicon/fonts/remixicon.css";
import "@/styles/globals.css";
import { Inter, Montserrat, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Nirman Market",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
