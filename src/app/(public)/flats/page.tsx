import FlatCard from "@/components/common/flat-card";
import {
  ProductCollectionContainer,
  ProductCollectionHeading,
  ProductCollectionGrid,
  ProductAds,
  ProductGrid,
} from "@/components/common/product-collection";
import BestLocationSlider from "@/components/pages/flats/best-location";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

import products from "@/constants/products.json";

export default async function Flats() {
  return (
    <div>
      <section className="relative w-full md:aspect-[3/2] md:max-h-[400px]">
        <Image
          src="https://picsum.photos/seed/unsplash/200/300"
          alt=""
          width={1400}
          height={500}
          style={{ width: "100%", height: "100%" }}
          className="object-fill pointer-events-none"
        />
        <div className="container text-center flex-col justify-center absolute left-0 inset-0 z-10 h-full flex items-center px-10">
          <h1 className="text-4xl text-center text-primary-foreground">
            Find Your Desired Land
          </h1>
          <p className="text-primary-foreground mb-8">
            Explore some extraordinary featured destination from your nearest
            place
          </p>

          <div className="flex items-center md:w-3/4 bg-background/5 backdrop-blur p-4 rounded-md ">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full">
              <Input
                className="bg-background rounded-l-none md:rounded-l-xl rounded-r-none"
                placeholder="find anything..."
              />
              <Select>
                <SelectTrigger className="bg-background rounded-r-none rounded-l-none h-12">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="bangladesh"> Bangladesh </SelectItem>
                  <SelectItem value="bangladesh"> Pakistan </SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="bg-background rounded-r-none md:rounded-r-xl lg:rounded-r-none rounded-l-none h-12">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="bangladesh"> category -1 </SelectItem>
                  <SelectItem value="bangladesh"> category -2 </SelectItem>
                </SelectContent>
              </Select>

              {/* type */}
              <Select>
                <SelectTrigger className="bg-background rounded-l-none md:rounded-l-xl rounded-r-none lg:rounded-l-none h-12 border">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="bangladesh"> type 1 </SelectItem>
                  <SelectItem value="bangladesh"> type 2 </SelectItem>
                </SelectContent>
              </Select>

              <Button className="h-12 rounded-l-none lg:rounded-l-none border border-primary lg:rounded-r-xl">
                <IconSearch />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BestLocationSlider />

      {Array.from({ length: 2 }).map((_, idx: number) => (
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
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {products?.map((product: any) => (
                    <FlatCard
                      key={product.id}
                      product={{
                        image: "https://picsum.photos/seed/picsum/300/200",
                        title: product.title,
                        description: product.description,
                        location: product.location,
                        price: product.price,
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
    </div>
  );
}
