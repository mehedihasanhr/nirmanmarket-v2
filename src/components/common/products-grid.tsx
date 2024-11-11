import React from "react";
import ProductCard from "./product-card";
import { faker } from "@faker-js/faker";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Data = {
  image: string;
  title: string;
  description: string;
  location: string;
  price: number;
  discount: number;
  rating: number;
  discountType: "amount" | "percentage";
};

export default function ProductGrid({
  data,
  ads,
  heading,
  className,
}: {
  data: Data[];
  ads?: string[];
  heading: string;
  className?: string;
}) {
  return (
    <div className="container px-0 md:px-4">
      <div
        className={cn(
          "px-2 md:px-6 py-8 md:rounded-lg bg-background",
          className,
        )}
      >
        <h2 className="mb-5 block"> {heading} </h2>
        <div
          className={cn(
            "products-grid-container",
            ads?.length &&
              "grid grid-cols-1 md:grid-cols-[minmax(8rem,10rem),1fr] gap-2 md:gap-4",
          )}
        >
          {!ads?.length ? null : (
            <div className="grid grid-cols-2 md:flex md:h-auto md:flex-col gap-4">
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
          )}
          <div className="products-grid ">
            {Array.from({ length: 10 }).map((_, index) => (
              <ProductCard
                key={index}
                product={{
                  image: "https://picsum.photos/seed/picsum/300/200",
                  title: faker.commerce.productName(),
                  description: faker.commerce.productDescription(),
                  location: faker.location.city(),
                  price: Number(faker.finance.amount()),
                  rating: 2.5,
                  discount: 10,
                  discountType: "amount",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
