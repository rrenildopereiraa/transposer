import "./globals.css";
import { Toaster } from "sonner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transposer",
  description: "Simplify your framework migrations right now!",
  icons: {
    icon: "https://transposer.vercel.app/favicon.ico",
    apple: "https://transposer.vercel.app/apple-icon.png",
  },
  openGraph: {
    title: "Transposer",
    description: "Simplify your framework migrations right now!",
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
      <body className="bp-c br-r bs-c d-full">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
