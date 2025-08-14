import MainFooter from "@/shared/footer/MainFooter";
import MainNavigationBar from "@/shared/navigationBar/MainNavigationBar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import components

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fikiara",
  description: "Fikiara Learn Anytime, Grow Every day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainNavigationBar />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
