import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://dharsanportfolio.vercel.app"),
  title: {
    default: "Dharsan S | Full Stack Developer",
    template: "%s | Dharsan S",
  },
  description: "Official portfolio of Dharsan S — Full Stack Developer.",
  authors: [{ name: "Dharsan S" }],
  creator: "Dharsan S",
  verification: {
    google: "K1vqH0sok45NvgA_Kv251M7vpPmHeC_M7r1aSIMazrY",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}