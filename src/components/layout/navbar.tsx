import React from "react";
import { NavCategoriesMegaMenu } from "@/components/layout";
import Link from "next/link";

const navItems = [
  { title: "Flat", href: "#" },
  { title: "Our service", href: "#" },
  { title: "About us", href: "#" },
  { title: "Contact us", href: "#" },
  { title: "Privacy policy", href: "#" },
  { title: "FAQs", href: "#" },
  { title: "Terms and Conditions", href: "#" },
];

export function Navbar() {
  return (
    <nav className="border-b border-t border-primary">
      <div className="container text-stone-800">
        <NavCategoriesMegaMenu />

        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="text-sm px-2.5 mr-1 select-none hover:cursor-pointer hover:text-primary tracking-[0.03rem]"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
