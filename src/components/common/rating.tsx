import { cn } from "@/lib/utils";
import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import React from "react";

export default function Rating({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  const stars = [];

  // render start
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<IconStarFilled key={i} className="text-orange-400" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<IconStarHalfFilled key={i} className="text-orange-400" />);
    } else {
      stars.push(<IconStar key={i} className="text-gray-500" />);
    }
  }

  return (
    <div className={cn("flex items-center gap-1 [&>svg]:size-3.5", className)}>
      {stars}
    </div>
  );
}
