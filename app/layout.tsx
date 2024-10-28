import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Transposer",
  description: "Build Tailwind output Yumma.",
  icons: {
    icon: "https://transposer.vercel.app/favicon.ico",
    apple: "https://transposer.vercel.app/apple-icon.png",
  },
  openGraph: {
    title: "Transposer",
    description: "Transposer will convert Tailwind to Yumma CSS.",
    siteName: "Transposer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://transposer.vercel.app/og.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
