"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import ProductCard from "@/components/common/product-card";
import {
  ProductCollectionContainer,
  ProductCollectionHeading,
  ProductCollectionGrid,
  ProductAds,
  ProductGrid,
} from "@/components/common/product-collection";
import CardIcon from "@/components/icons/card";
import CODIcon from "@/components/icons/cod";
import { MobileBank } from "@/components/icons/mobile-bank";
import TruckIcon from "@/components/icons/truck";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { faker } from "@faker-js/faker";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { match } from "ts-pattern";
import { z } from "zod";

const formSchema = z.object({
  deliveryType: z.enum(["delivery", "pickup"]).optional(),
  fullName: z.string().min(1, "Full name is required."),
  email: z.string().email("Invalid email address"),
  number: z.string().min(10, "Mobile number is required."),
  village: z.string().min(1, "Village is required."),
  district: z.string().min(1, "District is required."),
  zipCode: z.string().min(1, "Zip code is required."),
  paymentMethod: z.enum(["cod", "mobile", "card"]).optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ShippingDetails() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      deliveryType: "delivery",
      fullName: "",
      email: "",
      number: "",
      village: "",
      district: "",
      zipCode: "",
      paymentMethod: "cod",
    },
  });

  // Field configuration
  const fieldList = [
    {
      name: "deliveryType",
      type: "radio-group",
      options: [
        { label: "Delivery", value: "delivery", icon: <TruckIcon /> },
        { label: "Pickup", value: "pickup", icon: <TruckIcon /> },
      ],
    },
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      label: "Mobile Number",
      name: "number",
      type: "tel",
    },
    {
      type: "group",
      fields: [
        { label: "City/Village", name: "village", type: "text" },
        { label: "District", name: "district", type: "text" },
        { label: "Zip Code", name: "zipCode", type: "text" },
      ],
    },
    {
      label: "Payment Method",
      name: "paymentMethod",
      type: "radio-group",
      options: [
        { label: "COD", value: "cod", icon: <CODIcon /> },
        { label: "Mobile", value: "mobile", icon: <MobileBank /> },
        { label: "Card", value: "card", icon: <CardIcon /> },
      ],
    },
  ];

  // Render field function
  const renderField = ({
    name,
    label,
    type,
    options,
  }: {
    name: keyof FormData;
    label?: string;
    type: string;
    options?: { label: string; value: string; icon: React.ReactNode }[];
  }) => {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              {match({ type })
                .with({ type: "radio-group" }, () => (
                  <RadioGroup
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value}
                    className="flex items-center"
                  >
                    {options?.map((option, index) => (
                      <label
                        key={index}
                        className="hover:cursor-pointer flex items-center py-2.5 px-4 rounded-md gap-x-2 border hover:border-primary hover:text-primary hover:[&>svg]:fill-primary"
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={`${name}-${option.value}`}
                        />
                        {option.icon} {option.label}
                      </label>
                    ))}
                  </RadioGroup>
                ))
                .otherwise(() => (
                  <Input type={type} {...field} />
                ))}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };

  return (
    <section className="py-8">
      <div className="container">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/">Home</Link>
          <IconChevronRight size={16} />
          <span>Checkout</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr,400px] gap-6">
          <div className="flex flex-col gap-4">
            <div className="rounded-md p-4 bg-background">
              <h5 className="mb-4">Shipping Information</h5>

              <Form {...form}>
                <form className="flex flex-col gap-4">
                  {fieldList.map((field, index) =>
                    match(field)
                      .with({ type: "group" }, () => (
                        <div key={index} className="flex items-center gap-4">
                          {field?.fields?.map((subField) =>
                            renderField(subField as any),
                          )}
                        </div>
                      ))
                      .otherwise(() => renderField(field as any)),
                  )}
                </form>
              </Form>
            </div>
          </div>

          {/* Right side items */}
          <div className="flex flex-col gap-4">
            <div className="bg-background p-4 rounded-md flex flex-col gap-4">
              <h5 className="">Order Summary</h5>

              <div className="rounded-md">
                <Image
                  src="https://placehold.co/400x200/webp?text=Image"
                  alt=""
                  width={400}
                  height={200}
                  sizes="200px"
                  style={{ width: "100%", height: "100%" }}
                  className="object-fill rounded-md"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center border rounded-lg mb-2.5">
                  <Input
                    placeholder="Coupon code"
                    className="h-10 border-none focus-visible:ring-0 outline-none focus:outline-none focus:shadow-none focus:border-0 focus-within:border-0 focus:ring-0"
                  />
                  <Button
                    variant="outline"
                    className="h-10 rounded-lg border-primary bg-primary/10"
                  >
                    Apply
                  </Button>
                </div>

                <div className="flex items-center text-sm">
                  <span className="flex-1">Quantity</span>
                  <span>03</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="flex-1">Item Total:</span>
                  <span>$1797</span>
                </div>

                <div className="flex items-center text-sm">
                  <span className="flex-1">Shipping cost</span>
                  <span>$50</span>
                </div>
                <Separator />
                <div className="flex items-center text-sm">
                  <span className="flex-1">Total:</span>
                  <span className="font-semibold">$1797</span>
                </div>
                <Button className="mt-4 h-10">Confirm order</Button>
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
