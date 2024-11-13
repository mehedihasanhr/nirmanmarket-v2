"use client";

import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function ProductCardLoader() {
  return (
    <div className="product-card rounded flex flex-col hover:shadow-md hover:shadow-primary/10 w-full">
      <>
        <div className="mb-2.5 w-full overflow-hidden aspect-[3/2] relative">
          <Skeleton className="w-full h-full aspect-[3/2] bg-gray-100" />
        </div>

        <div className="mb-1">
          <div className="flex items-center gap-1 text-xs text-gray-500 font-medium ">
            <Skeleton className="w-6 h-6 bg-gray-100" />
          </div>
        </div>

        <h6 className="font-medium w-full text-black/80 mb-2 line-clamp-1">
          <Skeleton className="w-3/4 h-6 bg-gray-100" />
        </h6>

        <div className="flex items-center mb-2">
          <div className="text-sm font-semibold">
            <Skeleton className="w-16 h-6 bg-gray-100" />
          </div>
        </div>

        <div className="flex items-center gap-2 w-full">
          <Skeleton className="h-7 w-full px-2 font-semibold border-primary text-primary bg-gray-100" />
        </div>
      </>
    </div>
  );
}
