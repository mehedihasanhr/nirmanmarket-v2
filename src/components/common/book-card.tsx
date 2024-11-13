"use client";

import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "../ui/dialog";
import { Separator } from "../ui/separator";

type ProductCardProps = {
  book: {
    image: string;
    title: string;
    writer: string;
  };
};

export default function BookCard({ book }: ProductCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="product-card rounded flex flex-col hover:shadow-md hover:shadow-primary/10 w-full">
          
            <div className="mb-2.5 w-full overflow-hidden aspect-[3/2] relative">
              <Image
                src={book.image}
                alt=""
                width={308}
                height={168}
                sizes="340px"
                loading="lazy"
                quality={70}
                style={{ width: "100%", height: "100%" }}
                className="absolute top-0 left-0 inset-x-0 inset-y-0 w-full h-full object-fill rounded px-2 pt-2"
              />
            </div>

           

            <h6 className="font-semibold w-full text-black/80 mb-2 line-clamp-1 px-2">
              {book.title}
            </h6>
            <h6 className="font-medium text-xs w-full text-black/80 mb-2 line-clamp-1 px-2">
              {book.writer}
            </h6>



            <div className="flex items-center gap-2 w-full justify-end px-2 pb-2">
              <Button size='sm'>
                Read Now
              </Button>
            </div>
          
        </div>
      </DialogTrigger>

      {/* Dialog box content */}
      <DialogContent>
        {/* For accessability */}
        <DialogHeader className="hidden">
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>

        <div className="product-card rounded flex flex-col shadow-none bg-popover w-full">
          <div className="mb-2.5 w-full overflow-hidden aspect-[3/2] relative">
            <Image
              src={book.image}
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

         

          <h6 className="font-semibold text-base w-full text-black/80 mb-2 line-clamp-1">
            {book.title}
          </h6>

          <p className="font-normal w-full text-sm text-gray-500 mb-2 line-clamp-2">
            {book.writer}
          </p>

         

          <div className="flex items-center gap-2 w-full">
            <Button size="sm" className="px-2">
              Read Now
            </Button>
            
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col">
            <Button size="sm" variant="link" className="px-2 text-center ">
              <span>More details</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
