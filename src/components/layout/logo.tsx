import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt=""
      width={282}
      height={54}
      style={{ width: "auto", height: "auto" }}
      className={cn("", className)}
    />
  );
}
