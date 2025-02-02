import "./globals.css";
import { Toaster } from "sonner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transposer",
  description: "Simplify your framework migrations today!",
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
      <body className="d-full bs-c bp-c br-r">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
