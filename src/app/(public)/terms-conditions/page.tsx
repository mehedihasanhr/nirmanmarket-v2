import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nirman Market - Terms and Conditions",
  description:
    "Read the Terms and Conditions of Nirman Market, outlining the rules and guidelines for using our platform. Understand your rights, obligations, and the legal aspects of buying, selling, and using our services.",
};

export default function TermsAndConditions() {
  return (
    <section>
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb className="py-8 text-muted flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Terms and Conditions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Pages Banner */}
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

        {/* Terms and Conditions Content */}
        <div className="my-8 !font-inter">
          <h1 className="text-center font-semibold text-2xl md:text-3xl my-6">
            Terms and Conditions
          </h1>

          <div className="space-y-12 my-12 font-inter">
            {/* Data Collection */}
            <section>
              <h2 className="text-xl font-semibold">
                What Personal Data We Collect and Why
              </h2>
              <p className="text-figma-text leading-7 mt-2">
                We collect personal data to enhance your experience on Nirman
                Market. Information such as contact details, preferences, and
                usage patterns help us tailor the platform to your needs. By
                providing accurate data, you help us maintain the quality and
                relevance of our services.
              </p>
            </section>

            {/* Media */}
            <section>
              <h2 className="text-xl font-semibold">Media</h2>
              <p className="text-figma-text leading-7 mt-2">
                If you upload images to the website, ensure they do not contain
                embedded location data (EXIF GPS). Other visitors may be able to
                extract this data from the images.
              </p>
            </section>

            {/*  Embedded Content */}
            <section>
              <h2 className="text-xl font-semibold">
                Embedded Content from Other Websites
              </h2>
              <p className="text-figma-text leading-7 mt-2">
                Articles on our site may include embedded content (e.g., videos,
                images, articles, etc.). Such content behaves the same way as if
                the user has visited the other website directly. These websites
                may collect data about you and use cookies.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-xl font-semibold">
                How Long We Retain Your Data
              </h2>
              <p className="text-figma-text leading-7 mt-2">
                For comments, we retain the data indefinitely, while for users,
                their personal data is stored in their profile. Users can see,
                edit, or delete their information anytime.
              </p>
            </section>

            {/*  User Rights */}
            <section>
              <h2 className="text-xl font-semibold">
                What Rights You Have Over Your Data
              </h2>
              <p className="text-figma-text leading-7 mt-2">
                Users can request to export or delete their personal data at any
                time, except data we are required to keep for legal or security
                purposes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
