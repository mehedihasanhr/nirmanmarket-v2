"use client";

import * as React from "react";
import { IconSearch } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function HeaderSearchbox() {
  const [category, setCategory] = React.useState("all_category");

  return (
    <Select value={category} onValueChange={setCategory}>
      <div className="flex items-center w-full max-w-[550px]">
        <SelectTrigger className="h-12 border-r-0 w-fit gap-2 rounded-r-none outline-none ring-none border-primary">
          <SelectValue />
        </SelectTrigger>
        <Input
          className="rounded-none border-primary"
          placeholder="Search..."
        />
        <Button className="rounded-l-none px-4">
          <IconSearch />
          Search
        </Button>
      </div>
      <SelectContent className="w-[200px]">
        <SelectItem value="all_category"> All categories </SelectItem>
        <SelectItem value="flat_and_property"> Flat &amp; Proparty </SelectItem>
      </SelectContent>
    </Select>
  );
}
