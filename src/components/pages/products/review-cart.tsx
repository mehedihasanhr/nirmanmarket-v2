import Rating from "@/components/common/rating";
import Image from "next/image";
import React from "react";

export default function ReviewCart({
  name,
  time,
  rating,
  description,
  images,
}: {
  name: string;
  time: string;
  rating: number;
  description: string;
  images: string[];
}) {
  return (
    <div className="flex flex-col py-6 gap-2">
      <Rating rating={rating} />
      <h5>
        {name} <span className="text-xs text-gray-400"> {time} </span>
      </h5>

      <p className="text-sm text-gray-500 ">{description}</p>

      <div className="flex items-center gap-2.5">
        {images
          ? images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt=""
                width={50}
                height={50}
                loading="lazy"
                className="rounded-md"
              />
            ))
          : null}
      </div>
    </div>
  );
}
