import React from "react";
import { Logo, HeaderSearchbox } from "@/components/layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-[#FDF7FB]">
      <div className="container py-2 md:h-[88px] flex items-center justify-between gap-4">
        <Link href="/" className="w-[200px] md:w-[282px] md:h-[54px]">
          <Logo className="w-full h-full object-fill" />
        </Link>

        <div className="hidden lg:block">
          <HeaderSearchbox />
        </div>

        <div className="flex items-center gap-1 md:gap-2.5">
          <Button
            variant="ghost"
            size="icon"
            className="size-9 lg:hidden"
            asChild
          >
            <Link href="#" className="text-[24px] text-accent-foreground/60">
              <i className="ri-search-line text-xl" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="size-9" asChild>
            <Link href="#" className="text-[24px] text-accent-foreground/60">
              <i className="ri-notification-2-line text-xl" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="size-9" asChild>
            <Link href="#" className="text-[24px] text-accent-foreground/60">
              <i className="ri-shopping-cart-line text-xl" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="size-9" asChild>
            <Link href="#" className="text-[24px] text-accent-foreground/60">
              <i className="ri-user-3-line text-xl" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
