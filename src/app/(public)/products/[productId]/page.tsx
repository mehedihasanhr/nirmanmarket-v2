import QuantityController from "@/components/common/quantity-controller";
import Rating from "@/components/common/rating";
import ProductImageSlide from "@/components/pages/products/ProductImageSlide";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  IconCashBanknoteOff,
  IconChevronRight,
  IconDeviceMobile,
  IconHome,
  IconMessage,
  IconShieldX,
  IconStarFilled,
  IconTruckDelivery,
  IconTruckReturn,
} from "@tabler/icons-react";
import { ListFilter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReviewCart from "@/components/pages/products/review-cart";
import { faker } from "@faker-js/faker";
import ProductCard from "@/components/common/product-card";
import {
  ProductCollectionContainer,
  ProductCollectionHeading,
  ProductCollectionGrid,
  ProductAds,
  ProductGrid,
} from "@/components/common/product-collection";

export default function ProductDetails() {
  return (
    <>
      <section>
        <div className="container p-4">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/"> Home</Link>
            <IconChevronRight size={16} />
            <span> Product Details </span>
          </div>

          <div className="product-details">
            <div className="grid grid-cols-12 gap-4 bg-background p-4 rounded-xl">
              <div className="col-span-12 lg:col-span-6">
                <ProductImageSlide
                  images={[
                    "https://placehold.co/400x400/png?text=slider1",
                    "https://placehold.co/400x400/png?text=slider2",
                    "https://placehold.co/400x400/png?text=slider3",
                  ]}
                />
              </div>

              <div className="col-span-12 lg:col-span-6">
                <h1 className="mb-1 leading-[48px]">
                  Leather Men&apos;s Slipper
                </h1>
                <p className="text-sm text-gray-500">
                  Offer a premium grade cement for its exceptional quality and
                  performance.
                </p>

                <div className="flex items-center py-4 space-x-1 text-gray-500">
                  <span>Price:</span>
                  <h4>
                    $440
                    <sub className="pl-1 text-red-500">
                      <del>$440</del>
                    </sub>
                  </h4>
                </div>

                <div className="pt-7 pb-5">
                  <div className=" aspect-[3/1] rounded-md lg:aspect-[3/1.5] max-h-[200px]">
                    <Image
                      src="https://placehold.co/400x200/png?text=ads"
                      alt=""
                      width={400}
                      height={200}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                      }}
                      className="rounded-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-1.5">
                  <span className="text-gray-500">progress Item ID: </span>
                  <span> 280b6d06 </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-1.5">
                  <span className="text-gray-500"> Category: </span>
                  <span> Commet </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-1.5">
                  <span className="text-gray-500"> Brand Name: </span>
                  <span> Diamond Coment </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-1.5">
                  <span className="text-gray-500"> Quantity: </span>
                  <QuantityController />
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <Button size="sm"> Order now </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary"
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Product details */}
            <div className="flex flex-col gap-4">
              <div className="bg-background p-4 rounded-xl flex flex-col gap-4">
                <h6 className="text-[hsla(0,0%,40%,1)] font-semibold">
                  Delivery Details
                </h6>

                <div className="flex items-center justify-between gap-2 text-sm">
                  <div className="flex gap-2.5">
                    <IconTruckDelivery />
                    <div>
                      <p> Shipping Cost </p>
                      <p className="text-[hsla(0,0%,40%,1)] text-xs">
                        Guaranteed by 12-21 Sep
                      </p>
                    </div>
                  </div>

                  <h4> $120 </h4>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <IconCashBanknoteOff />
                  <p>Cash on Deliver is not Available</p>
                </div>

                <Separator />

                <h6 className="text-[hsla(0,0%,40%,1)] font-semibold">
                  Return & Warranty
                </h6>

                <div className="flex items-center gap-2 text-sm">
                  <IconTruckReturn />
                  <p>7 Day Return</p>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <IconShieldX />
                  <p>Warranty is not available</p>
                </div>

                <Separator />

                <div className="flex items-center gap-4">
                  <Image
                    src="/footer-qrcode1.png"
                    alt=""
                    width={128}
                    height={128}
                    loading="lazy"
                    quality={70}
                  />

                  <div>
                    <Image
                      src="/logo-icon.svg"
                      alt=""
                      width={48}
                      height={48}
                      loading="lazy"
                      quality={70}
                      className="mb-3"
                    />
                    <p className="text-xs text-gray-500">
                      Download our app and enjoy exclusive discount!
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <IconDeviceMobile />
                  <p>Scan with your mobile</p>
                </div>
              </div>

              <div className="bg-background p-4 rounded-xl flex flex-col gap-4">
                <div className="flex items-center justify-between gap-2 text-sm text-[hsla(0,0%,40%,1)] ">
                  <div>
                    <p className="text-xs"> Sold by</p>
                    <p className="text-lg font-medium">STORE HOUSE</p>
                  </div>

                  <Button variant="link">
                    <IconMessage size={24} />
                    <span className="font-bold"> Chat Now </span>
                  </Button>
                </div>

                <div className="grid grid-cols-3 bg-[hsla(0,91%,56%,0.06)]">
                  <div className="flex flex-col justify-between gap-y-2 p-4 border-r">
                    <p className="text-xs text-gray-500 ">
                      Positive Seller Ratings
                    </p>
                    <h2> 76% </h2>
                  </div>

                  <div className="flex flex-col justify-between gap-y-2 p-4 border-r">
                    <p className="text-xs text-gray-500"> Ship on Time </p>
                    <h2> 89% </h2>
                  </div>

                  <div className="flex flex-col justify-between gap-y-2 p-4 border-r">
                    <p className="text-xs text-gray-500">
                      {" "}
                      Chat Response Rate{" "}
                    </p>
                    <h2> 97% </h2>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Link
                    href=""
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <IconHome size={17} />
                    <span> Go to store </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container p-4">
          <div className="bg-background rounded-[12px] shadow-[0px_0px_40px_0px_#9696961A] p-8">
            <div className="grid grid-cols-[1fr,250px] gap-10 mb-8">
              <div>
                <h4> Details </h4>

                <p className="text-sm text-gray-500">
                  {
                    "Shah Cement is a prominent brand of cement in Bangladesh, known for its high quality and durability "
                  }
                  <Link href="" className="text-primary hover:underline">
                    See More...
                  </Link>
                </p>

                <div className="mt-6">
                  <h4> Ratings </h4>

                  <div className="grid grid-cols-[200px,1fr] items-center">
                    <div className="flex flex-col">
                      <h1 className="flex items-center gap-2.5">
                        4.5 <IconStarFilled className="text-orange-400" />
                      </h1>
                      <p> 273 Reviews </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5">
                        <Rating rating={5} className="gap-1" />
                        <Progress
                          value={85}
                          className="w-[40%] bg-orange-400/20 [&>div]:bg-orange-400 "
                        />
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Rating rating={4} className="gap-1" />
                        <Progress
                          value={70}
                          className="w-[40%] bg-orange-400/20 [&>div]:bg-orange-400 "
                        />
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Rating rating={3} className="gap-1" />
                        <Progress
                          value={60}
                          className="w-[40%] bg-orange-400/20 [&>div]:bg-orange-400 "
                        />
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Rating rating={2} className="gap-1" />
                        <Progress
                          value={20}
                          className="w-[40%] bg-orange-400/20 [&>div]:bg-orange-400 "
                        />
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Rating rating={1} className="gap-1" />
                        <Progress
                          value={0}
                          className="w-[40%] bg-orange-400/20 [&>div]:bg-orange-400 "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[250px] h-[250px] rounded-md">
                <Image
                  src="https://placehold.co/600x400/png?text=ads"
                  alt=""
                  width={250}
                  height={250}
                  loading="lazy"
                  style={{ width: "100%", height: "100%" }}
                  className="rounded-md"
                />
              </div>
            </div>

            <div className="flex items-stretch border-y">
              <div className="flex-1 py-3">
                <h3> Reviews </h3>
              </div>

              <div className="border-l flex items-center space-x-1 px-4 text-gray-500 py-3 text-sm">
                <ListFilter size={15} />
                <span>Filter: </span>
                <span>4 Star</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex flex-col flex-1">
                <div className="w-full">
                  <ReviewCart
                    name={faker.person.firstName()}
                    rating={4.5}
                    description={faker.lorem.lines()}
                    time="2 days ago"
                    images={[
                      "https://placehold.co/50x50/png",
                      "https://placehold.co/50x50/png",
                      "https://placehold.co/50x50/png",
                    ]}
                  />
                </div>
                <Separator className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <ProductCollectionContainer>
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
    </>
  );
}
