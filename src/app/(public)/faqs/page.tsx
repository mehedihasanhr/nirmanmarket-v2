import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import faqs from "@/constants/faqs.json";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nirman Market - FAQs",
  description:
    "Got questions? We’ve got answers! Our Frequently Asked Questions (FAQs) section covers everything from placing orders to payment options and shipping policies. Whether you're new to Nirman Market or a returning customer, you’ll find quick and helpful answers to common queries. Let us make your shopping experience easier by answering all your important questions in one place.",
};

export default function FAQs() {
  return (
    <section>
      <div className="container">
        {/* breadcrumb */}
        <Breadcrumb className="py-8 text-muted flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>FAQs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

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

        {/* faqs content */}
        <div className="my-8">
          <h1 className="font-semibold text-3xl md:text-4xl mb-6 font-inter text-center">
            Frequently Ask Questions
          </h1>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold font-inter">
              Below are frequently asked questions, you may find the answer for
              yourself
            </h2>
            <p className="text-figma-text font-poppins leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

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
    </section>
  );
}
