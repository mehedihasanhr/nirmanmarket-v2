import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Metadata } from "next";
import GoogleMapComponent from "@/components/common/google-map";
import Image from "next/image";
import Contact from "@/components/pages/home/contact";
import { DollarSign, UsersRound, Warehouse } from "lucide-react";

export const metadata: Metadata = {
  title: "Nirman Market - Contact Us",
  description:
    "We’re here to help! Whether you have questions about our products, need assistance with an order, or want to provide feedback, our team is ready to assist you. Reach out to us via email, phone, or through our online form, and we’ll get back to you as soon as possible. At Nirman Market, your satisfaction is our priority.",
};

export default function ContactUs() {
  return (
    <div className="flex flex-col gapy-y-6">
      {/* breadcrumb */}
      <div className="container">
        <Breadcrumb className="py-8 text-muted flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* pages banner */}
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

      {/* support query, contact us form */}
      <div className="my-4">
        <Contact />
      </div>
      {/* contact map section */}
      <section>
        <GoogleMapComponent />
      </section>

      {/* satisfied customer */}
      <section className="bg-white py-8 md:py-10 lg:py-12">
        <div className="container">
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
        </div>
      </section>
    </div>
  );
}
