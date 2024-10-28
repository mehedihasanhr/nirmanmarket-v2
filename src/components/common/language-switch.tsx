"use client";

import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

export interface LanguageSwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function LanguageSwitch({
  className,
  variant,
  size,
}: LanguageSwitchProps) {
  const [lang, setLang] = React.useState("eng");

  return (
    <Select value={lang} onValueChange={setLang}>
      <SelectTrigger
        className={cn(buttonVariants({ variant, size, className }))}
      >
        <SelectValue className="px-0" />
      </SelectTrigger>

      <SelectContent className="min-w-[var(--radix-select-trigger-width)]">
        <SelectItem value="eng">
          <i className="ri-global-line mr-1" />
          Eng
        </SelectItem>
        <SelectItem value="bng">
          <i className="ri-global-line mr-1" />
          Bng
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
