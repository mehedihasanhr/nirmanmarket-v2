import ServiceContactForm from "@/components/pages/services/service-contact-form";
import { Button } from "@/components/ui/button";
import { UsersRound, DollarSign, Warehouse } from "lucide-react";
import Image from "next/image";
import React from "react";
import faqs from "@/constants/faqs.json";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const services = [
  {
    title: "Lighting Upgrade",
    icon: "/light.svg",
    desc: "Lighting upgrades refer to the installation oflighting fixtures in improve energy efficiency",
  },
  {
    title: "Electrical Panels",
    icon: "/electric-panels.svg",
    desc: "Lighting upgrades refer to the installation oflighting fixtures in improve energy efficiency",
  },
  {
    title: "Heating Service",
    icon: "/heating.svg",
    desc: "Lighting upgrades refer to the installation oflighting fixtures in improve energy efficiency",
  },

  {
    title: "Electric Instalation",
    icon: "/electric-tower.svg",
    desc: "Lighting upgrades refer to the installation oflighting fixtures in improve energy efficiency",
  },
  {
    title: "Lighting Upgrade",
    icon: "/light.svg",
    desc: "Lighting upgrades refer to the installation oflighting fixtures in improve energy efficiency",
  },
  {
    title: "Electrical Panels",
    icon: "/electric-panels.svg",
    desc: "Lighting upgrades refer to the installation oflighting fixtures in improve energy efficiency",
  },
];

export default function Services() {
  return (
    <div>
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

      <div className="container py-14 max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Service form */}
          <div className="w-full bg-background p-6 rounded-xl">
            <h1 className="mb-2"> Let’s connect with Us </h1>
            <p className="mb-10 max-w-[420px]">
              Expert Service Providers Delivering Tailored Solutions for Your
              Needs
            </p>

            <ServiceContactForm />
          </div>

          <div className="w-max-[550px]">
            <h6 className="font-normal text-xs mb-2.5 text-primary">
              About us
            </h6>
            <h1 className="mb-4">
              Providing High Quality Electrical Service Solution{" "}
            </h1>

            <p>
              Ensuring Safe and Efficient Electrical Installations for Homes and
              Businesses, Backed by Decades of Expertise and a Focus on
              Reliable, Lasting Solutions.Dedicated to Offering Comprehensive
              Electrical Services, From Wiring and Lighting to Advanced Energy
              Solutions, Tailored to Meet Every Client&apos;s Unique Needs and
              Industry Standards.Providing Professional Electrical Services for
              Residential, Commercial, and Industrial Spaces, Designed to Meet
              the Highest Standards of Safety, Functionality, and Customer
              Satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-[hsla(320,60%,98%,1)]">
        <div className="container flex flex-col items-center">
          <h1 className="mb-2">Our Services</h1>
          <p className="mb-8 text-gray-500 text-center">
            We provide professional electric services
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full max-w-[300px] bg-background border border-transparent hover:border-primary/20 transition-all duration-300 ease-in-out select-none rounded-lg gap-2.5 p-6 flex flex-col items-center"
              >
                {service.icon && (
                  <Image
                    src={service.icon}
                    alt=""
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                )}

                <h3> {service.title} </h3>
                <p> {service.desc} </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="container bg-background p-6 flex flex-col items-start rounded-xl">
          <h1 className="mb-4">Introduce Ourself</h1>

          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="w-full bg-background border border-transparent hover:border-primary/20 transition-all duration-300 ease-in-out select-none rounded-xl gap-2.5 flex flex-col items-center">
              <Image
                src="https://placehold.co/1400x500/webp?text=Play"
                alt=""
                width={1400}
                height={500}
                loading="lazy"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-24">
        <div className="w-full aspect-[3/2] max-h-[600px] relative">
          <Image
            src="https://picsum.photos/seed/picsum/2800/800"
            alt=""
            width={1400}
            height={600}
            loading="lazy"
            style={{ width: "100%", height: "100%" }}
            className="object-fill aspect-[3/2] max-h-[600px] w-full"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 inset-0 w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-3 max-w-[800px] mx-auto gap-4 text-white">
              <div className="flex flex-col items-center gap-4 p-4 bg-transparent border rounded-xl aspect-square justify-center hover:bg-primary hover:text-primary-foreground">
                <div className="p-2 rounded-full bg-background/10 text-white">
                  <div className="flex items-center justify-center bg-black/80 text-white size-16 rounded-full">
                    <UsersRound />
                  </div>
                </div>
                <div className="text-center">
                  <h3> 45.5k </h3>
                  <p> Customer active in our site </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 p-4 bg-transparent border rounded-xl aspect-square justify-center hover:bg-primary hover:text-primary-foreground">
                <div className="p-2 rounded-full bg-background/10">
                  <div className="flex items-center justify-center bg-black/80 text-white size-16 rounded-full">
                    <DollarSign />
                  </div>
                </div>
                <div className="text-center">
                  <h3> 45.5k </h3>
                  <p>Monthly Product Sale</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 p-4 bg-transparent border rounded-xl aspect-square justify-center hover:bg-primary hover:text-primary-foreground">
                <div className="p-2 rounded-full bg-background/10">
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
        </div>
      </div>

      {/* Our project */}
      <div className="py-24 bg-[hsla(320,60%,98%,1)]">
        <div className="container flex flex-col items-center">
          <h1 className="mb-2">Our Services</h1>
          <p className="mb-8 text-gray-500 text-center">
            We provide professional electric services
          </p>

          <div className="w-full flex items-center justify-center gap-6 flex-wrap mb-8">
            <Button>All</Button>
            <Button variant="outline"> Residental </Button>
            <Button variant="outline"> Commercial </Button>
            <Button variant="outline"> Repair </Button>
            <Button variant="outline"> Office </Button>
            <Button variant="outline"> Industrial </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 [&>div]:max-h-[300px]">
            <div className="rounded-xl col-span-1 md:col-span-2 w-full">
              <Image
                src="https://placehold.co/800x800/webp?text=Project"
                alt=""
                width={800}
                height={800}
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
                className="rounded-xl"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="https://placehold.co/400x300/webp?text=Project"
                alt=""
                width={400}
                height={300}
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
                className="rounded-xl"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="https://placehold.co/400x300/webp?text=Project"
                alt=""
                width={400}
                height={300}
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
                className="rounded-xl"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="https://placehold.co/400x300/webp?text=Project"
                alt=""
                width={400}
                height={300}
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
                className="rounded-xl"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="https://placehold.co/400x300/webp?text=Project"
                alt=""
                width={400}
                height={300}
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
                className="rounded-xl"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <Image
                src="https://placehold.co/400x300/webp?text=Project"
                alt=""
                width={400}
                height={300}
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
                className="rounded-xl"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="https://placehold.co/400x300/webp?text=Project"
                alt=""
                width={400}
                height={300}
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
                className="rounded-xl"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="https://placehold.co/400x300/webp?text=Project"
                alt=""
                width={400}
                height={300}
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-background">
        <div className="container bg-background">
          {/* faqs accordion */}
          <Accordion
            type="single"
            collapsible
            className="w-full md:max-w-xl md:mx-auto pb-8"
          >
            {faqs?.map((faq) => {
              return (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-lg text-left">
                    {faq.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-figma-text font-poppins leading-7">
                    {faq.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
