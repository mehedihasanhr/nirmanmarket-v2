import React from "react";
import { Logo } from "@/components/layout";
import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="bg-[#FDF7FB]">
      <div className="container py-[17px] flex items-center justify-between gap-4">
        <Logo className="w-[282px] h-[54px]" />

        <div className="flex items-center gap-2.5">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" className="text-2xl text-accent-foreground/60">
              <i className="ri-notification-2-line" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="#" className="text-2xl text-accent-foreground/60">
              <i className="ri-shopping-cart-line" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="#" className="text-2xl text-accent-foreground/60">
              <i className="ri-user-3-line" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
