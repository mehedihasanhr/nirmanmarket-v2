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
  title: "Nirman Market - Privacy Policy",
  description:
    "At Nirman Market, your privacy is our top priority. We are committed to protecting your personal information and ensuring that your data is handled securely and transparently. Our Privacy Policy outlines how we collect, use, and safeguard your information while providing you with the best possible shopping experience. Explore the details of our data protection practices and your rights as a user.",
};

export default function PrivacyPolicy() {
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
              <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
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

        {/* privacy policy content */}
        <div className="my-8 !font-inter">
          <h1 className="text-center font-semibold text-2xl md:text-3xl my-6">
            Privacy Policy
          </h1>

          <div className="space-y-2 my-12">
            <h2 className="text-2xl font-semibold">
              What personal data we collect and why we collect it
            </h2>
            <p className="text-figma-text leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="space-y-2 my-12">
            <h2 className="text-2xl font-semibold">Media</h2>
            <p className="text-figma-text leading-7">
              If you upload images to the website, you should avoid uploading
              images with embedded location data (EXIF GPS) included. Visitors
              to the website can download and extract any location data from
              images on the website.
            </p>
          </div>
          <div className="space-y-2 my-12">
            <h2 className="text-2xl font-semibold">
              Embedded content from other websites
            </h2>
            <p className="text-figma-text leading-7">
              Articles on this site may include embedded content (e.g. videos,
              images, articles, etc.). Embedded content from other websites
              behaves in the exact same way as if the visitor has visited the
              other website.
            </p>
            <p className="text-figma-text leading-7">
              These websites may collect data about you, use cookies, embed
              additional third-party tracking, and monitor your interaction with
              that embedded content, including tracking your interaction with
              the embedded content if you have an account and are logged in to
              that website.
            </p>
          </div>
          <div className="space-y-2 my-12">
            <h2 className="text-2xl font-semibold">
              How long we retain your data
            </h2>
            <p className="text-figma-text leading-7">
              If you leave a comment, the comment and its metadata are retained
              indefinitely. This is so we can recognize and approve any
              follow-up comments automatically instead of holding them in a
              moderation queue.
            </p>
            <p className="text-figma-text leading-7">
              For users that register on our website (if any), we also store the
              personal information they provide in their user profile. All users
              can see, edit, or delete their personal information at any time
              (except they cannot change their username). Website administrators
              can also see and edit that information.
            </p>
          </div>
          <div className="space-y-2 my-12">
            <h2 className="text-2xl font-semibold">
              What rights you have over your data
            </h2>
            <p className="text-figma-text leading-7">
              If you have an account on this site, or have left comments, you
              can request to receive an exported file of the personal data we
              hold about you, including any data you have provided to us. You
              can also request that we erase any personal data we hold about
              you. This does not include any data we are obliged to keep for
              administrative, legal, or security purposes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
