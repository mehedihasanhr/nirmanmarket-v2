import QuantityController from "@/components/common/quantity-controller";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import React from "react";

export default function CartItem() {
  return (
    <div className="p-8 bg-background rounded-md flex items-center gap-4 flex-wrap">
      <Checkbox />
      <div className="w-[100px] h-[100px] rounded-sm">
        <Image
          src="https://placehold.co/100x100/png?text=Item"
          alt=""
          width={80}
          height={80}
          loading="lazy"
          style={{ width: "100%", height: "100%" }}
          className="rounded-sm"
        />
      </div>

      <div className="flex-1 text-sm">
        <h5 className="text-base"> Premium Cement </h5>
        <p className="text-gray-500 mb-2.5">
          Delivery: Estimated between 4 aug to 7 aug{" "}
        </p>

        <div className="flex items-center flex-wrap">
          <div className="flex-1">
            <h3> $599 </h3>
          </div>
          <div className="flex items-center gap-4">
            <QuantityController />
            <p className="flex whitespace-nowrap items-center gap-4">
              Sub-total: $599
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
