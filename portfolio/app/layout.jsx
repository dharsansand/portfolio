import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// UPDATED METADATA FOR BETTER GOOGLE SEARCH RANKING
export const metadata = {
  metadataBase: new URL('https://dharsanportfolio.vercel.app'),
  title: {
    default: "Dharsan Portfolio | Full Stack Developer (MERN)",
    template: "%s | Dharsan Portfolio"
  },
  description: "Portfolio of Dharsan S - Full Stack MERN Developer specializing in ERP, CRM, and high-performance web applications.",
  keywords: ["Dharsan", "Dharsan S", "Dharsan Portfolio", "MERN Stack Developer", "Full Stack Developer", "dharsanportfolio"],
  authors: [{ name: "Dharsan S" }],
  creator: "Dharsan S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dharsanportfolio.vercel.app/",
    title: "Dharsan Portfolio | Full Stack Developer",
    description: "Full Stack MERN Developer specializing in high-performance web applications.",
    siteName: "Dharsan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharsan Portfolio",
    description: "MERN Stack Developer Portfolio",
  },
   verification: {
    google:"K1vqH0sok45NvgA_Kv251M7vpPmHeC_M7r1aSIMazrY", 
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
        <main>
          {children}</main>
      </body>
    </html>
  );
}