import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { GoBriefcase } from "react-icons/go";
import { MdOutlineArticle } from "react-icons/md";
import { GrContact } from "react-icons/gr";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "robbertvancaem.com",
  description: "Frontend developer",
};

const NavLink = ({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: Function;
}) => (
  <Link href={href} className="flex items-center space-x-2">
    {icon && <div className="text-lg">{icon()}</div>}
    <div>{children}</div>
  </Link>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="w-full fixed p-4 z-10">
          <div className="flex justify-between p-4 pr-6 w-full shadow-md bg-black/50 rounded-2xl backdrop-blur">
            <Link href="/">
              <span className="font-extrabold">robbertvancaem</span>
              <span className="font-light">.com</span>
            </Link>
            <div className="space-x-12 flex">
              <NavLink href="/projects" icon={GoBriefcase}>
                Projects
              </NavLink>
              <NavLink href="/blog" icon={MdOutlineArticle}>
                Blog
              </NavLink>
              <NavLink href="/contact" icon={GrContact}>
                Let&apos;s talk
              </NavLink>
            </div>
          </div>
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
