import ProductCard from "@/components/common/product-card";
import {
  ProductCollectionContainer,
  ProductCollectionHeading,
  ProductCollectionGrid,
  ProductAds,
  ProductGrid,
} from "@/components/common/product-collection";
import CartItem from "@/components/pages/carts/cart-item";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { faker } from "@faker-js/faker";
import { IconChevronRight, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Carts() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/"> Home</Link>
          <IconChevronRight size={16} />
          <span> Shoping cart </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr,300px] gap-6">
          <div className="flex flex-col gap-4">
            <div className="rounded-md p-4 bg-background">
              <h5 className="mb-4"> Shopping cart </h5>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-1 text-sm">
                  <Checkbox />
                  <span> Select all </span>
                </label>

                <Button variant="ghost" size="sm" className="">
                  <IconTrash />
                  <span>Delete all</span>
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </div>

          {/* Right side items */}
          <div className="flex flex-col gap-4">
            {/* Checkout items */}
            <div className="bg-background p-4 rounded-md">
              <h5 className="mb-4"> Order Summary </h5>

              <div className="flex flex-col gap-2">
                <div className="flex items-center text-sm">
                  <span className="flex-1"> Item Total: </span>
                  <span> 03 </span>
                </div>

                <div className="flex items-center text-sm">
                  <span className="flex-1"> Sub Total: </span>
                  <span> $1797 </span>
                </div>

                <Separator />

                <div className="flex items-center text-sm">
                  <span className="flex-1"> Total: </span>
                  <span className="font-semibold"> $1797 </span>
                </div>

                <Button size="sm" className="mt-4">
                  Checkout (3)
                </Button>
              </div>
            </div>

            <div className="bg-background p-4 rounded-md">
              <h4 className="mb-4"> We Accept </h4>

              <div className="flex items-center flex-wrap gap-4">
                {[
                  "/payment-method/bkash.png",
                  "/payment-method/mastercard.png",
                  "/payment-method/nogod.png",
                  "/payment-method/rocket.png",
                  "/payment-method/upay.png",
                  "/payment-method/visa.png",
                ].map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt=""
                    width={64}
                    height={64}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
}
