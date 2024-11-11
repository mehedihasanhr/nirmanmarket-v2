import React from "react";
import CategoryItem from "./category-item";
import { Slider } from "./slider";

const sidebarCategories = [
  { title: "Flat & Property", icon: "ri-hotel-line" },
  { title: "Product & Materials", icon: "ri-box-3-line" },
  { title: "Contractor", icon: "ri-hammer-line" },
  { title: "Service Provider", icon: "ri-user-follow-line" },
  { title: "Standard Code & Video", icon: "ri-book-line" },
];

const sliderImageData = [
  { id: "afe69719a52d", image: "/slider/slider1.png" },
  { id: "06a385eddfed", image: "/slider/slider2.png" },
  { id: "3a36dd8f8cf4", image: "/slider/slider3.png" },
  { id: "3c68a740cf91", image: "/slider/slider4.png" },
];

export function Hero() {
  return (
    <section>
      <div className="container flex gap-x-4 px-4 py-10">
        <div className="grid grid-cols-[1fr] lg:grid-cols-[16rem,1fr] gap-8">
          {/* Sidebar  */}
          <div className="hidden lg:inline-block w-64 rounded-md py-4 px-1 bg-background">
            <h4 className="font-semibold mb-4 px-3"> Categories </h4>
            <div className="flex flex-col gap-y-1">
              {sidebarCategories.map((c) => (
                <CategoryItem key={c.title} title={c.title} icon={c.icon} />
              ))}
            </div>
          </div>
          <Slider sliderImageData={sliderImageData} />
        </div>
      </div>
    </section>
  );
}
