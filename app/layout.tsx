import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Transposer",
  description: "Converts Tailwind to Yumma CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg bg-black">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
