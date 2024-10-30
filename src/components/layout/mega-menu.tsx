import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import categories from "@/constants/categories.json";
import type { Category } from "@/types";
import { IconCaretDownFilled } from "@tabler/icons-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function NavCategoriesMegaMenu() {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
          className:
            "flex tracking-[0.03rem] items-center gap-1.5 rounded-[4px] cursor-pointer my-0.5",
        })}
      >
        <span className="text-sm"> Categories </span>

        <IconCaretDownFilled size={15} className="opacity-50" />
      </HoverCardTrigger>

      <HoverCardContent align="start" className="w-full container p-1">
        <div className="max-h-[500px] overflow-x-hidden overflow-y-auto sm:overflow-hidden sm:columns-2 md:columns-3 lg:columns-4 p-2">
          {(categories as Category[])?.map((category) => (
            <ul key={category.uuid} className="pr-2.5 mb-4">
              <li className="font-bold text-xs mb-1 text-foreground">
                {category.header}
              </li>
              <li>
                <ul>
                  {category.links.map((link) => (
                    <li key={link.uuid}>
                      <Link
                        href={link.link}
                        className="text-sm hover:text-primary text-muted-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
