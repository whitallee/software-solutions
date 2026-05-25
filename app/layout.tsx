import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Solutions Initiative",
  description:
    "A twice-a-month meetup where grocery store workers build tools, solve workflow problems, and explore software together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <Nav />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-border py-6 px-6 mt-auto">
          <div className="max-w-5xl mx-auto flex justify-between items-center text-xs text-muted">
            <span>
              <span className="text-red">▶</span> Software Solutions Initiative
            </span>
            <span>built by the SSI</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
