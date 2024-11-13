"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { SliderImage, SliderItem } from "@/types";
import Image from "next/image";

export function Slider({
  sliderData,
}: {
  sliderData: SliderItem[];
}) {
  return (
    <Carousel
    opts={{
      align: "start",
      loop: true
    }}
    className="w-full max-w-full "
  >
    <CarouselContent>
      {sliderData.map((slider) => (
        <CarouselItem  key={slider.id} className="md:basis-1/3 lg:basis-1/4">
          <div className="py-8">
            <Card className="bg-[#F2F3F8]">
              <CardContent className="flex flex-col aspect-square items-center gap-3 justify-center p-4">
              <h4 className="text-lg text-start w-full font-medium leading-6">{slider.title}</h4>
            <div className="grid grid-cols-2 gap-4">
                {
                    slider.images.map((img: SliderImage, i) =>  <div  key={i}><Image
                   
                        src={img.imgUrl}
                        alt=""
                        width={750}
                        height={450}
                        loading="lazy"
                        quality={70}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8VA8AAmkBc7YFeIIAAAAASUVORK5CYII="
                        className="rounded-md"
                     />
                     <h5 className="text-xs font-normal leading-6">{img.title}</h5>
                     </div>)
                }
            </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  );
}
