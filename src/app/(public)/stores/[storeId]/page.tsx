import ProductCard from "@/components/common/product-card";
import {
  ProductCollectionContainer,
  ProductCollectionHeading,
  ProductCollectionGrid,
  ProductAds,
  ProductGrid,
} from "@/components/common/product-collection";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { faker } from "@faker-js/faker";
import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import { IconChevronRight, IconMessage } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const medias = [
  { icon: "ri-instagram-fill", href: "/" },
  { icon: "ri-youtube-fill", href: "/" },
  { icon: "ri-facebook-fill", href: "/" },
  { icon: "ri-twitter-fill", href: "/" },
];

export default function PublicStoreProfile() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/"> Home</Link>
          <IconChevronRight size={16} />
          <span> Shoping cart </span>
        </div>
      </div>

      <Tabs defaultValue="products">
        <div className="container">
          <div className="flex flex-col text-center md:text-left items-center md:flex-row md:items-center flex-wrap py-3 px-6 gap-4 bg-background w-fit rounded-lg mb-4">
            <Image
              src="https://placehold.co/500x500/webp?text=store"
              alt=""
              width={64}
              height={64}
              loading="lazy"
              quality={70}
              className="rounded-md"
            />

            <div>
              <h2 className="text-gray-700 font-semibold mb-1">Store House</h2>
              <p className="text-sm text-gray-500">
                76% Positive Seller Ratings
              </p>
              <p className="text-sm text-gray-500"> 98% Chat Response Rate </p>
            </div>

            <div className="flex items-center flex-col h-16 w-fit">
              <IconMessage size={32} className="text-primary" />
              <Button
                variant="link"
                className="flex flex-col font-medium leading-4 py-1 h-fit"
              >
                Chat now
              </Button>
            </div>
          </div>

          <TabsList className="flex flex-row justify-start bg-background h-fit p-0 px-4">
            <TabsTrigger
              value="products"
              className="py-4 px-8 data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Products
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="py-4 px-8 data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Profile
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Store profile */}
        <TabsContent value="profile">
          <div className="container pt-8">
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 text-secondary-500">
              <div className="col-span-4 p-8 bg-background rounded-md">
                <p className="mb-4"> Joined </p>
                <p className="text-2xl"> 3+ Years </p>
              </div>

              <div className="col-span-4 p-8 bg-background rounded-md">
                <p className="mb-4"> Ship on time </p>
                <p className="text-2xl"> 98% </p>
              </div>

              <div className="col-span-4 p-8 bg-background rounded-md">
                <p className="mb-4"> Contact </p>
                <p className=""> 011XX-XXXXXX </p>
                <p className="">storehouse@gmail.com</p>

                <div className="flex items-center gap-2.5">
                  <p className="whitespace-nowrap text-xs font-medium text-neutral-700">
                    Follow us:
                  </p>
                  <div className="flex items-center space-x-0.5">
                    {medias?.map((m, index) => (
                      <Link
                        key={index}
                        aria-label="mediaIcon"
                        href={m.href}
                        className="size-5 flex items-center justify-center hover:bg-accent rounded-md text-secondary-foreground/70 hover:text-foreground text-sm"
                      >
                        <i className={m.icon} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Products  */}
        <TabsContent value="products">
          <ProductCollectionContainer className="mt-6">
            <ProductCollectionHeading heading="Related Ads" />
            <ProductCollectionGrid isHasAds>
              <ProductAds
                ads={[
                  "https://placehold.co/500x500/png?text=Ads",
                  "https://placehold.co/500x500/png?text=Ads",
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

          {/* Ads */}
          <div className="relative container min-h-[180px] my-6">
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

          {/* Products  */}
          <ProductCollectionContainer className="mt-6">
            <ProductCollectionHeading heading="Related Ads" />
            <ProductCollectionGrid isHasAds>
              <ProductAds
                ads={[
                  "https://placehold.co/500x500/png?text=Ads",
                  "https://placehold.co/500x500/png?text=Ads",
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
        </TabsContent>
      </Tabs>
    </div>
  );
}
