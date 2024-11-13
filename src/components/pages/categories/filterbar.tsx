"use client";

import Rating from "@/components/common/rating";
import { Checkbox } from "@radix-ui/react-checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import categories from "@/constants/categories.json";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { IconFilter } from "@tabler/icons-react";

export default function FilterBar() {
  const [isEnableDrawerMode, setIsEnableDrawerMode] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 641) {
        setIsEnableDrawerMode(true);
      } else {
        setIsEnableDrawerMode(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content = (
    <div className="flex flex-col space-y-4">
      <div className="bg-background flex flex-col gap-y-4 p-4 rounded-lg">
        <div>
          <h5 className="mb-3 text-gray-600 font-medium"> Categories </h5>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.uuid} value={category.uuid}>
                  {category.header}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div>
          <h5 className="mb-3 text-gray-600 font-medium"> Location </h5>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.uuid} value={category.uuid}>
                  {category.header}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-background flex flex-col gap-y-4 p-4 rounded-lg">
        <h5> Short by ratings </h5>

        <ul className="flex flex-col gap-2">
          {[5, 4, 3, 2, 1].map((item) => (
            <li key={item}>
              <label className="flex items-center hover:bg-gray-50 gap-2 hover:cursor-pointer">
                <Checkbox className="border-gray-300" />
                <Rating rating={item} />
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-background flex flex-col gap-y-4 p-4 rounded-lg">
        <h5> Warranty type </h5>

        <ul className="flex flex-col gap-2">
          {["No warranty", "Non-local warranty"].map((item) => (
            <li key={item}>
              <label className="flex items-center gap-2 hover:bg-gray-50 hover:cursor-pointer">
                <Checkbox className="border-gray-300" />
                <span> {item} </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  if (isEnableDrawerMode) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="secondary">
            <IconFilter />
            Filter
          </Button>
        </DrawerTrigger>

        <DrawerContent className="h-5/6">
          <DrawerHeader>
            <DrawerTitle className="text-left"> Filter menu </DrawerTitle>
            <DrawerDescription className="hidden" />
          </DrawerHeader>

          {content}
        </DrawerContent>
      </Drawer>
    );
  }

  return content;
}
