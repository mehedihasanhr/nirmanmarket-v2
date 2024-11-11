import { Hero } from "@/components/pages";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  ProductGrid,
  ProductAds,
  ProductCollectionGrid,
  ProductCollectionHeading,
  ProductCollectionContainer,
} from "@/components/common/product-collection";
import ProductCard from "@/components/common/product-card";
import { faker } from "@faker-js/faker";
import React from "react";
import SellerSlider from "@/components/pages/home/seller-slider";
import Contact from "@/components/pages/home/contact";
import BlogCard from "@/components/pages/home/blogCard";

// categories
const categories = [
  {
    id: "ffc6cbc01316",
    title: "Flat & Property",
    icon: "/category/category1.png",
  },
  {
    id: "f1d72570983e",
    title: "Product & Materials",
    icon: "/category/category2.svg",
  },
  { id: "c6f28bab19f6", title: "Contractor", icon: "/category/category3.svg" },
  {
    id: "0808ff5b4061",
    title: "Service Provider",
    icon: "/category/category4.svg",
  },
  {
    id: "81e71e4b63da",
    title: "Standard Code & Video",
    icon: "/category/category2.svg",
  },
];

export default function Home() {
  return (
    <div className="bg-[hsla(230,30%,96%,1)]">
      <Hero />
      {/* Categories */}
      <section className="py-8 bg-[#FDF7FB]">
        <div className="container">
          <h2 className="mb-10"> Categories </h2>

          {/* Category list */}
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative col-span-2 py-[30px] px-2.5 flex flex-col items-center bg-background rounded-xl shadow-[0px_8px_60px_0px_rgba(190,190,190,0.1)]"
              >
                <div className="aspect-square mb-4 w-[clamp(2rem,4rem,6rem)]">
                  <Image
                    src={category.icon}
                    alt=""
                    width={100}
                    height={100}
                    style={{ width: "auto", height: "auto" }}
                    className="w-full h-full object-fill"
                  />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl text-center">
                  {category.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ads */}
      <section className="py-12">
        <div className="container">
          <Separator className="mb-12" />
          <div className="relative min-h-[180px]">
            <Image
              src="https://picsum.photos/1400/545"
              alt=""
              width={1400}
              height={545}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              className="rounded-lg select-none pointer-events-none h-full aspect-[3/1.7] max-h-[548px]"
            />

            <div className="absolute top-0 left-0 inset-0 px-4 md:px-8 lg:px-14 py-3 md:py-7 lg:py-11 flex items-start justify-center flex-col">
              <h1 className="w-[250px] sm:w-[450px] sm:leading-[48px] md:leading-[60px] font-bold text-2xl sm:text-4xl md:text-5xl mb-1.5 md:mb-8 text-white">
                Enhance Your Music Experience
              </h1>

              <div className="flex items-center gap-5 mb-2 md:mb-6 lg:mb-10">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center flex-col gap-0 size-10 md:size-14 lg:size-16 bg-background rounded-full"
                  >
                    <h3>23</h3>
                    <span className="block -mt-[0.5rem] md:-mt-[0.3rem] text-[9px] md:text-[11px] leading-[18px]">
                      Hours
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant="secondary"
                className="bg-background h-8 md:h-10 py-1.5 md:py-2.5 px-3 md:px-4 text-sm md:text-base text-primary font-medium hover:bg-primary hover:text-primary-foreground"
              >
                Buy Now!
              </Button>
            </div>
          </div>

          <Separator className="mt-12" />
        </div>
      </section>

      {/* Products */}
      {Array.from({ length: 4 }).map((_, idx: number) => (
        <React.Fragment key={idx}>
          <section>
            <ProductCollectionContainer>
              <ProductCollectionHeading heading="Flash sales" />
              <ProductCollectionGrid isHasAds>
                <ProductAds
                  ads={[
                    "https://picsum.photos/seed/picsum/300/200",
                    "https://picsum.photos/seed/picsum/300/200",
                  ]}
                />

                <ProductGrid>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <ProductCard
                      key={index}
                      product={{
                        image: "https://picsum.photos/seed/picsum/300/200",
                        title: faker.commerce.productName(),
                        description: faker.commerce.productDescription(),
                        location: faker.location.city(),
                        price: Number(faker.finance.amount()),
                        rating: 2.5,
                        discount: 10,
                        discountType: "amount",
                      }}
                    />
                  ))}
                </ProductGrid>
              </ProductCollectionGrid>
            </ProductCollectionContainer>
          </section>

          {/* Ads  */}
          <div className="grid grid-cols-2 gap-4 container py-10">
            <div>
              <Image
                src="https://placehold.co/600x300/fafafa/a6a6a6/png?text=Ads"
                alt=""
                width={600}
                height={300}
                loading="lazy"
                className="rounded-lg"
              />
            </div>

            <div>
              <Image
                src="https://placehold.co/600x300/fafafa/a6a6a6/png?text=Ads"
                alt=""
                width={600}
                height={300}
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>
        </React.Fragment>
      ))}

      {/* Seller slider */}
      <SellerSlider />
      <Contact />
      <BlogCard />
    </div>
  );
}
