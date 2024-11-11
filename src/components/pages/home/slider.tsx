"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SliderImageData } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

export function Slider({
  sliderImageData,
}: {
  sliderImageData: SliderImageData[];
}) {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 2000 })]}
      opts={{ loop: true }}
      className="w-full h-full"
    >
      <CarouselContent className="h-[200px] sm:h-[320px] md:h-[400px]">
        {sliderImageData.map((slider) => (
          <CarouselItem
            key={slider.id}
            className="h-full rounded-md overflow-hidden ml-1"
          >
            <Image
              src={slider.image}
              alt=""
              width={750}
              height={450}
              style={{ width: "100%", height: "100%" }}
              loading="lazy"
              quality={70}
              placeholder="blur"
              sizes="(min-width: 808px) 750px, 100vw"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8VA8AAmkBc7YFeIIAAAAASUVORK5CYII="
              className="rounded-md"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
