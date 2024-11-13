import { IconChevronRight } from "@tabler/icons-react";
import { DollarSign, UsersRound, Warehouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutUsPage() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/"> Home</Link>
          <IconChevronRight size={16} />
          <span> About us </span>
        </div>

        <div className="w-full aspect-[3/2] max-h-[400px]">
          <Image
            src="https://placehold.co/2800x1400/webp?text=Banner"
            alt=""
            width={1400}
            height={500}
            loading="lazy"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(400px,600px),minmax(300px,1fr)] py-20 gap-10">
          <div>
            <Image
              src="https://placehold.co/800x800/webp?text=Banner"
              alt=""
              width={500}
              height={500}
              loading="lazy"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="text-gray-700">
            <h1 className="font-semibold mb-6"> Our Story </h1>

            <p className="text-gray-600 mb-4 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p className="text-gray-600">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 max-w-[800px] mx-auto gap-4">
          <div className="flex flex-col items-center gap-4 p-4 bg-background rounded-xl aspect-square justify-center hover:bg-primary hover:text-primary-foreground">
            <div className="p-2 rounded-full bg-black/10">
              <div className="flex items-center justify-center bg-black/80 text-white size-16 rounded-full">
                <UsersRound />
              </div>
            </div>
            <div className="text-center">
              <h3> 45.5k </h3>
              <p> Customer active in our site </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 p-4 bg-background rounded-xl aspect-square justify-center hover:bg-primary hover:text-primary-foreground">
            <div className="p-2 rounded-full bg-black/10">
              <div className="flex items-center justify-center bg-black/80 text-white size-16 rounded-full">
                <DollarSign />
              </div>
            </div>
            <div className="text-center">
              <h3> 45.5k </h3>
              <p>Monthly Product Sale</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 p-4 bg-background rounded-xl aspect-square justify-center hover:bg-primary hover:text-primary-foreground">
            <div className="p-2 rounded-full bg-black/10">
              <div className="flex items-center justify-center bg-black/80 text-white size-16 rounded-full">
                <Warehouse />
              </div>
            </div>
            <div className="text-center">
              <h3> 45.5k </h3>
              <p>Sellers active our site</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>{/* team */}</div>
      </div>
    </section>
  );
}
