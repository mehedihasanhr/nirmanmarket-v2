import { LanguageSwitch } from "@/components/common";
import _ from "lodash";
import Link from "next/link";

const medias = [
  { icon: "ri-instagram-fill", href: "/" },
  { icon: "ri-youtube-fill", href: "/" },
  { icon: "ri-facebook-fill", href: "/" },
  { icon: "ri-twitter-fill", href: "/" },
];

export function TopBar() {
  return (
    <div className="container flex items-center justify-between gap-4 py-1">
      <div className="flex items-center gap-2.5">
        <p className="whitespace-nowrap text-xs font-medium text-neutral-700">
          Follow us:
        </p>
        <div className="flex items-center space-x-0.5">
          {_.map(medias, (m) => (
            <Link
              aria-label="mediaIcon"
              href={m.href}
              className="size-5 flex items-center justify-center hover:bg-accent rounded-md text-secondary-foreground/70 hover:text-foreground text-sm"
            >
              <i className={m.icon} />
            </Link>
          ))}
        </div>
      </div>

      <LanguageSwitch
        variant="outline"
        size="sm"
        className="w-[85px] bg-transparent shadow-none flex items-center px-3 py-1 justify-between"
      />
    </div>
  );
}
