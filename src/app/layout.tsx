import "./globals.css";

import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "robbertvancaem.com",
  description: "Frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-between p-4 fixed backdrop-saturate-100 backdrop-blur w-full shadow-md">
          <Link href="/">
            <span className="font-extrabold">robbertvancaem</span>
            <span className="font-light">.com</span>
          </Link>
          <div className="space-x-12">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link
              href="/contact"
              className="bg-white text-slate-900 py-2 px-4 rounded-lg"
            >
              Contact
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
