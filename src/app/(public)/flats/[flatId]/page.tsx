"use client";

import Rating from "@/components/common/rating";
import ProductImageSlide from "@/components/pages/products/ProductImageSlide";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { IconChevronRight, IconStarFilled } from "@tabler/icons-react";
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
import { match } from "ts-pattern";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  phone: z.string().min(1, "Phone number is required."),
  email: z
    .string({ required_error: "Email address is required." })
    .email("Invalid email address."),
  message: z.string().min(1, "Message is required."),
});

type FormData = z.infer<typeof formSchema>;

export default function FlatDetails() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // fields
  const fields = [
    {
      name: "name",
      type: "text",
      label: "Name",
      placeholder: "Enter your name",
    },

    {
      name: "phone",
      type: "tel",
      label: "Phone",
      placeholder: "Enter your phone number",
    },

    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
    },

    {
      name: "message",
      type: "textarea",
      label: "Message",
      placeholder: "Write your message here...",
    },
  ];

  const renderFormField = (args: (typeof fields)[0]) => {
    return (
      <FormField
        control={form.control}
        name={args.name as "name" | "phone" | "email" | "message"}
        render={({ field }) => (
          <FormItem>
            <FormLabel> {args.label} </FormLabel>
            <FormControl>
              {match(args.type)
                .with("textarea", () => (
                  <Textarea
                    rows={5}
                    className="bg-background rounded"
                    {...args}
                    {...field}
                  />
                ))
                .otherwise(() => (
                  <Input
                    className="h-10 rounded bg-background"
                    {...args}
                    {...field}
                  />
                ))}
            </FormControl>
          </FormItem>
        )}
      />
    );
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

                <Form {...form}>
                  <form className="w-full flex flex-col gap-4">
                    {fields.map((field) => renderFormField(field))}
                    <Button> Send Message </Button>
                  </form>
                </Form>
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
