"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import categories from "@/constants/categories.json";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export default function CategoryItem({
  title,
  icon,
  className,
}: {
  title: string;
  icon: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const getCategory = (title: string) => {
    return categories.filter((category) => category.header == title);
  };

  return (
    <HoverCard openDelay={300} open={open} onOpenChange={setOpen}>
      <HoverCardTrigger
        className={cn(
          "text-left inline-flex items-center gap-2 text-[15px] text-neutral-600 hover:bg-primary/[3%] hover:text-primary px-2 rounded-md select-none",
          className,
        )}
      >
        <i className={`${icon} text-[1.5rem]`} />
        <span className="flex-1"> {title}</span>
        <i className="ri-arrow-right-s-line" />
      </HoverCardTrigger>

      <HoverCardContent
        side="right"
        align="start"
        className="p-1 select-none w-[280px]"
      >
        {getCategory(title)?.map((category: any) =>
          category.links?.map((link: any) => (
            <Link
              href={link.link}
              className="text-[15px] text-neutral-600 py-1.5 block hover:bg-primary/5 px-3 hover:text-primary whitespace-nowrap rounded-md"
              key={link.uuid}
            >
              {link.label}
            </Link>
          )),
        )}
      </HoverCardContent>
    </HoverCard>
  );
}
