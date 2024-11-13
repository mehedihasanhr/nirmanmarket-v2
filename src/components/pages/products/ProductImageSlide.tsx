"use client";

import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ImageMagnifier } from "@/components/common";

export default function ProductImageSlide({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Callback to receive the carousel API instance
  const handleSetApi = (api: CarouselApi) => {
    api?.scrollTo(selectedIndex);
    api?.on("select", () => {
      setSelectedIndex(api?.selectedScrollSnap());
    });
  };

  return (
    <div className="flex w-full flex-col items-stretch gap-5">
      <Carousel setApi={handleSetApi} className="w-full">
        <CarouselContent className="w-full">
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="w-full aspect-square">
                <ImageMagnifier src={img} magnifierSize={150} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center gap-2 mt-4">
        <Carousel setApi={handleSetApi} className="w-full max-w-xs">
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem className="basis-1/4" key={index}>
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-16 h-16 p-0.5 border ${selectedIndex === index ? "border-primary/50 rounded-sm" : "border-transparent"}`}
                >
                  <Image
                    src={img}
                    alt=""
                    width={64}
                    height={64}
                    className="object-cover rounded-sm"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
