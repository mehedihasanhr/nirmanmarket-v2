import { Button } from "@/components/ui/button";
import { IconClock } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

export default function BlogCard() {
  return (
    <div className="container pb-10">
      <h2 className="mb-4"> Our Latest blog </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="">
            <div className="aspect-[3/2] mb-6 rounded-md">
              <Image
                src="https://picsum.photos/seed/picsum/200/300"
                alt=""
                width={370}
                height={217}
                loading="lazy"
                sizes="370px"
                quality={70}
                style={{ width: "100%", height: "100%" }}
                className="rounded-md"
              />
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="text-sm  text-gray-500 flex items-center gap-2">
                <IconClock />
                <span> 12-05-2024 </span>
              </div>

              <h4>
                Breathe in the spring air of the most romantic city in the world
              </h4>

              <p className="text-sm text-gray-500">
                Imagine yourself in the heart of Paris, where the air is filled
                with the sweet fragrance of blooming flowers and the charm of
                spring is in full bloom. The city awakens from its winter
                slumber, transforming into a vibrant.
              </p>

              <Button variant="outline" size="sm" className="w-fit">
                Read more
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
