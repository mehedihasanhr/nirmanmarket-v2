"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

// Collection grid container
export const ProductCollectionContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="container px-0 md:px-4">
      <div
        className={cn(
          "px-2 md:px-6 py-8 md:rounded-lg bg-background",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

// collection heading
export const ProductCollectionHeading = ({
  children,
  heading,
}: {
  children?: React.ReactNode;
  heading?: string;
}) => {
  return children || <h2 className="mb-5 block"> {heading} </h2>;
};

// collection Grid
export const ProductCollectionGrid = ({
  children,
  isHasAds = false,
}: {
  children: React.ReactNode;
  isHasAds?: boolean;
}) => {
  return (
    <div
      className={cn(
        "products-grid-container shadow-none",
        isHasAds &&
          "grid grid-cols-1 shadow-none md:grid-cols-[minmax(8rem,10rem),1fr] gap-2 md:gap-4",
      )}
    >
      {children}
    </div>
  );
};

// ads
export const ProductAds = ({ ads }: { ads: string[] }) => {
  return (
    <div className="grid grid-cols-2 w-full md:flex md:h-auto md:flex-col gap-4">
      {ads.map((item, idx) => (
        <div
          key={idx}
          className="relative rounded aspect-[1.5/1] md:aspect-[2/2.5]"
        >
          <Image
            src={item}
            alt=""
            width={200}
            height={200}
            style={{ width: "100%", height: "100%" }}
            loading="lazy"
            className="absolute top-0 left-0 inset-0 rounded w-full h-full object-fill"
          />
        </div>
      ))}
    </div>
  );
};

// ProductGrids
export const ProductGrid = ({ children }: { children?: React.ReactNode }) => {
  return <div className="products-grid shadow-none">{children}</div>;
};
