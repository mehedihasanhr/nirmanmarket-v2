"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { IconShoppingBagPlus, IconStarFilled } from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Separator } from "../ui/separator";
import { Bath, BedDouble, CarTaxiFront, PencilRuler } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: {
    image: string;
    title: string;
    description: string;
    location: string;
    price: number;
    discount: number;
    rating: number;
    discountType: "amount" | "percentage";
  };
};

export default function FlatCard({ product }: ProductCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  // calculate discounted price
  const discountCalculatedPrice = (
    price: number,
    discount: number,
    discountType: "amount" | "percentage",
  ) => {
    if (discountType === "percentage") {
      return price + price * discount * 0.01;
    }

    return price + discount;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="product-card rounded flex flex-col hover:shadow-md hover:shadow-primary/10 w-full">
          <>
            <div className="mb-2.5 w-full overflow-hidden aspect-[3/2] relative">
              <Image
                src={product.image}
                alt=""
                width={308}
                height={168}
                sizes="340px"
                loading="lazy"
                quality={70}
                style={{ width: "100%", height: "100%" }}
                className="absolute top-0 left-0 inset-x-0 inset-y-0 w-full h-full object-fill rounded"
              />
            </div>

            <div className="mb-1">
              {/* <Rating rating={product.rating} className="[&>svg]:size-3" /> */}
              <div className="flex items-center gap-1 text-xs text-gray-500 font-medium ">
                <IconStarFilled size={12} /> 4.5 (62)
              </div>
            </div>

            <h6 className="font-medium w-full text-black/80 mb-2 line-clamp-1">
              {product.title}
            </h6>

            <div className="mb-2 flex items-center gap-2.5 flex-wrap w-full justify-between pr-4 text-gray-600">
              <div className="flex items-center gap-1 text-sm">
                <BedDouble size={15} /> 04
              </div>

              <div className="flex items-center gap-1 text-sm">
                <Bath size={15} /> 04
              </div>

              <div className="flex items-center gap-1 text-sm">
                <CarTaxiFront size={15} /> 01
              </div>

              <div className="flex items-center gap-1 text-sm whitespace-nowrap">
                <PencilRuler size={15} /> 24 sqft
              </div>
            </div>

            <div className="flex items-center mb-2">
              <div className="text-sm font-semibold">
                $
                {Number(
                  discountCalculatedPrice(
                    product.price,
                    product.discount,
                    product.discountType,
                  ),
                ).toFixed(2)}{" "}
                <sub>
                  <del className="text-red-400 text-xs">${product.price}</del>
                </sub>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full">
              <Button
                size="sm"
                variant="outline"
                className="h-7 w-full px-2 font-semibold border-primary text-primary"
              >
                More deatils
              </Button>
            </div>
          </>
        </div>
      </DialogTrigger>

      {/* Dialog box content */}
      <DialogContent className="bg-[#fff]">
        {/* For accessability */}
        <DialogHeader className="hidden">
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>

        <div
          className={cn(
            "product-card rounded flex flex-col shadow-none w-full",
            "shadow-none bg-[#fff]",
          )}
        >
          <div className="mb-2.5 w-full overflow-hidden aspect-[3/2] relative">
            <Image
              src={product.image}
              alt=""
              width={308}
              height={168}
              sizes="340px"
              loading="lazy"
              quality={70}
              style={{ width: "100%", height: "100%" }}
              className="absolute top-0 left-0 inset-x-0 inset-y-0 w-full h-full object-fill rounded"
            />
          </div>

          <div className="mb-1">
            {/* <Rating rating={product.rating} className="[&>svg]:size-3" /> */}
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium ">
              <IconStarFilled size={12} /> 4.5 (62)
            </div>
          </div>

          <h6 className="font-semibold text-base w-full text-black/80 mb-2 line-clamp-1">
            {product.title}
          </h6>

          <p className="font-normal w-full text-sm text-gray-500 mb-2 line-clamp-2">
            {product.description}
          </p>

          <div className="mb-2 flex items-center gap-3 w-full pr-4 text-gray-600">
            <div className="flex items-center gap-1 text-sm">
              <BedDouble size={15} /> 4
            </div>

            <div className="flex items-center gap-1 text-sm">
              <Bath size={15} /> 4
            </div>

            <div className="flex items-center gap-1 text-sm">
              <CarTaxiFront size={15} /> 1
            </div>

            <div className="flex items-center gap-1 text-sm">
              <PencilRuler size={15} /> 24 sqft
            </div>
          </div>

          <div className="flex items-center mb-2">
            <div className="text-lg font-semibold">
              $
              {Number(
                discountCalculatedPrice(
                  product.price,
                  product.discount,
                  product.discountType,
                ),
              ).toFixed(2)}{" "}
              <sub>
                <del className="text-red-400 text-sm">${product.price}</del>
              </sub>
              <span className="text-gray-400 text-xs pl-1">
                Discount:{" "}
                {product.discountType === "amount"
                  ? `$${product.discount}`
                  : `${product.discount}%`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full">
            <Button size="sm" className="px-2 font-semibold">
              Order now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
