"use client";

import React from "react";
import { Button } from "../ui/button";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function QuantityController({
  defaultValue = 1,
  onChange,
}: {
  defaultValue?: number;
  onChange?: (value: number) => void;
}) {
  const [quantity, setQuantity] = React.useState(defaultValue);

  const decrease = () => {
    const qnt = quantity > 1 ? quantity - 1 : 1;
    setQuantity(qnt);
    onChange?.(qnt);
  };

  const increase = () => {
    setQuantity((qnt) => qnt + 1);
    onChange?.(quantity + 1);
  };

  return (
    <div className="flex items-center w-fit rounded-md border-2 border-border">
      <Button
        size="icon"
        variant="outline"
        className="size-8 border-y-0 border-l-0 border-r-2 border-border"
        onClick={decrease}
      >
        <IconMinus />
      </Button>
      <input
        className="w-12 text-center outline-none"
        value={quantity}
        onChange={(e) => {
          setQuantity(Math.max(1, +e.target.value));
          onChange?.(Math.max(1, +e.target.value));
        }}
      />
      <Button
        size="icon"
        variant="outline"
        className="size-8 border-r-0 border-y-0 border-l-2 border-border"
        onClick={increase}
      >
        <IconPlus />
      </Button>
    </div>
  );
}
