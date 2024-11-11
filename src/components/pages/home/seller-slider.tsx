"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function SellerSlider() {
  return (
    <section className="py-20 bg-[hsla(320,60%,98%,1)]">
      <div className="container">
        <Carousel>
          <div className="mb-4 flex items-center justify-between">
            <h3> Sellers From Top Cities </h3>

            <div className="flex items-center relative gap-2">
              <CarouselPrevious className="relative transform-none left-auto hover:bg-primary hover:text-primary-foreground transition-all" />
              <CarouselNext className="relative transform-none right-auto hover:bg-primary hover:text-primary-foreground transition-all" />
            </div>
          </div>

          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="relative rounded-md basis-1/2 sm:basis-1/3 md:basis-1/4 lg:1/4 xl:basis-1/5 shadow aspect-square"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://picsum.photos/seed/unsplash/200/300?rendom=2"
                    alt=""
                    width={400}
                    height={400}
                    sizes="400px"
                    loading="lazy"
                    style={{ width: "100%", height: "100%" }}
                    className="rounded-md"
                  />

                  <div className="absolute bottom-0 left-0 inset-x-0 py-2.5 rounded-md backdrop-blur-lg text-background bg-background/5 px-4">
                    Chattogram
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
