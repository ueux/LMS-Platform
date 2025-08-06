import type { Metadata } from "next";
import { Poppins,Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./utils/theme-provider";

const poppins = Poppins({
  weight:["400","500","600","700"],
  variable: "--font-Poppins",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  weight:["400","500","600","700"],
  variable: "--font-Josefin",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${josefin.variable} !bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300 `}
      ><ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>

        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
