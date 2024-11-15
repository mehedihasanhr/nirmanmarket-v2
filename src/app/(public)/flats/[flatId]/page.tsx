import dynamic from "next/dynamic";
import * as React from "react";

import ProductCardLoader from "@/components/common/product-card-loader";
import {
  ProductAds,
  ProductCollectionContainer,
  ProductCollectionGrid,
  ProductCollectionHeading,
  ProductGrid,
} from "@/components/common/product-collection";
import Rating from "@/components/common/rating";
import FlatContactForm from "@/components/pages/flats/contact-form";
import ProductImageSlide from "@/components/pages/products/ProductImageSlide";
import ReviewCart from "@/components/pages/products/review-cart";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { faker } from "@faker-js/faker";
import {
  IconCheckbox,
  IconChevronRight,
  IconStarFilled,
} from "@tabler/icons-react";
import {
  Bath,
  BedDouble,
  CarTaxiFront,
  DoorOpen,
  ListFilter,
  MapPin,
  PencilRuler,
  ShowerHead,
  Tag,
  UtensilsCrossed,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
const ProductCard = dynamic(() => import("@/components/common/product-card"), {
  ssr: false,
});

export default async function FlatDetails() {
  // dummy data
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
  ).then((res) => res.json());

  const dummyObject = {
    age: 11,
    diningCapacity: 20,
    installmentFacility: "true",
    type: "Apartment",
    security: "3 Step Security",
    totalFloors: 3,
    gardenAndField: 1400,
    heatingSystem: "Floor Heating",
    exits: 3,
    elevators: 3,
    firePlace: "true",
    insurance: "true",
    swimmingPool: "true",
  };

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
                    "https://placehold.co/800x800/webp?text=slider1",
                    "https://placehold.co/800x800/webp?text=slider2",
                    "https://placehold.co/800x800/webp?text=slider3",
                  ]}
                />
              </div>

              <div className="col-span-12 lg:col-span-6">
                <h1 className="mb-1 leading-[48px]">3 Bed Appartment</h1>
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
                  <span className="text-gray-500">Size: </span>
                  <span> 324 Square feet </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-1.5">
                  <span className="text-gray-500"> Seller: </span>
                  <span> Online Company </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-1.5">
                  <span className="text-gray-500"> Location: </span>
                  <span> Banasree, Dhaka </span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <Button size="sm"> Booking now </Button>
                </div>
              </div>
            </div>

            {/* Product details */}
            <div className="flex flex-col gap-4">
              <div className="bg-background p-4 rounded-xl flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full">
                  <Image
                    src="https://placehold.co/400x200/png?text=ads"
                    alt=""
                    width={80}
                    height={80}
                    loading="lazy"
                    style={{ width: "100%", height: "100%" }}
                    className="rounded-full"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <h5 className="text-[hsla(0,0%,40%,1)] font-semibold">
                    Delivery Details
                  </h5>

                  <p className="text-sm text-gray-500">Member Since: 2 Weeks</p>
                  <Rating rating={4.5} />
                </div>

                <Separator />

                <FlatContactForm />
              </div>
            </div>
          </div>
        </div>

        <div className="container p-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,300px] gap-4 p-6 bg-background rounded-xl">
            <div className="flex flex-col gap-6">
              <ul className="space-y-3 flex flex-col text-sm">
                <li className="flex gap-3 text-gray-500">
                  <Tag size={16} className="mt-1" />
                  <p>
                    <mark className="bg-transparent text-gray-700">
                      {"Special Price "}
                    </mark>
                    Get extra 23% off (price inclusive of discount)
                  </p>
                </li>

                <li className="flex items-center gap-3 text-gray-500">
                  <Tag size={16} className="mt-1" />
                  <p>
                    <mark className="bg-transparent text-gray-700">
                      {"Bank Offer "}
                    </mark>
                    10% instant discount on Visa Cards
                  </p>
                </li>

                <li className="flex items-center gap-3 text-gray-500">
                  <Tag size={16} className="mt-1" />
                  <p>
                    <mark className="bg-transparent text-gray-700">
                      {"No cost EMI $54/month "}
                    </mark>
                    Standard EMI also available
                  </p>
                </li>
              </ul>

              <Separator className="bg-gray-200" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap text-gray-500">
                <div className="flex items-center whitespace-nowrap gap-2.5">
                  <DoorOpen size={20} />
                  <span>Room: 6</span>
                </div>

                <div className="flex items-center whitespace-nowrap gap-2.5">
                  <BedDouble size={20} />
                  <span>Beds: 4</span>
                </div>

                <div className="flex items-center whitespace-nowrap gap-2.5">
                  <ShowerHead size={20} />
                  <span>Bathroom: 2</span>
                </div>

                <div className="flex items-center whitespace-nowrap gap-2.5">
                  <UtensilsCrossed size={20} />
                  <span>Kitchen: 2</span>
                </div>

                <div className="flex items-center whitespace-nowrap gap-2.5">
                  <PencilRuler size={20} />
                  <span className="whitespace-nowrap">Area: 1300 Sqft</span>
                </div>

                <div className="flex items-center whitespace-nowrap gap-2.5">
                  <CarTaxiFront size={20} />
                  <span>Cars: 2</span>
                </div>

                <div className="flex items-center whitespace-nowrap gap-2.5">
                  <Bath size={20} />
                  <span>Cars: 2</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <h4> Details </h4>

                <p className="text-sm text-gray-500">
                  Shah Cement is a prominent brand of cement in Bangladesh,
                  known for its high quality and durability
                  <Button
                    variant="link"
                    size="sm"
                    className="px-2 py-1 text-base"
                  >
                    See More..
                  </Button>
                </p>
              </div>
            </div>

            <div>
              <Image
                src="https://placehold.co/600x400/png?text=ads"
                alt=""
                width={600}
                height={400}
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className="container p-4">
          <div className="grid grid-cols-[1fr,350px] gap-4">
            <div>
              <div className="bg-background rounded-xl p-6 mb-6">
                <h3 className="mb-6">More Information</h3>
                <div className="grid grid-cols-3 gap-3">
                  {Array.from(Object.entries(dummyObject)).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="text-gray-500 [&>span]:text-gray-700"
                      >
                        <span>{_.startCase(key)}: </span>
                        {value}
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="bg-background rounded-xl p-6">
                <h3 className="mb-6">More Information</h3>
                <div className="grid grid-cols-3 gap-3">
                  {Array.from(Object.entries(dummyObject)).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="text-gray-500 flex items-center gap-1.5 [&>span]:text-gray-700"
                      >
                        <span>
                          <IconCheckbox className="text-primary/50" />
                        </span>
                        {value}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 bg-background rounded-xl p-6">
              <h3> See Nearest Location </h3>
              <Separator />

              <div className="flex flex-col gap-2.5">
                {Array.from(Array(6)).map((_, index) => (
                  <div className="flex gap-4 items-center" key={index}>
                    <div className="size-16 rounded-xl bg-gray-100" />
                    <div className="flex flex-col text-gray-700">
                      <h5> Nirala Appartment </h5>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin size={16} />
                        Location
                      </div>
                    </div>
                  </div>
                ))}
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
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {products?.data?.map((product: any) => (
                <React.Suspense
                  key={product.id}
                  fallback={<ProductCardLoader />}
                >
                  <ProductCard
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
                </React.Suspense>
              ))}
            </ProductGrid>
          </ProductCollectionGrid>
        </ProductCollectionContainer>
      </section>
    </>
  );
}
