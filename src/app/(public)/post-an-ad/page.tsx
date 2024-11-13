import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DollarSign, PlusCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import UploadField from "@/components/pages/post-an-ads/file-upload";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nirman Market - Post an Add",
  description:
    "Post your ad on Nirman Market, the leading platform for buying and selling construction materials and services. Reach a wide audience, showcase your products, and boost your business in the construction industry.",
};

export default function PostAnAdd() {
  return (
    <>
      {/* breadcrumb */}
      <div className="container">
        <Breadcrumb className="py-8 text-muted flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Post an Add</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* category main section */}
      <section className="pb-8">
        <div className="container grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* aside */}
          <aside className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <Image
                  src="https://placehold.co/800x800/webp?text=Ads"
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </aside>

          {/* article */}
          <article className="lg:col-span-3">
            {/* post your add top  */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold font-montserrat mb-4">
                Post your add.
              </h3>

              <div className="text-center py-4 w-full border-2 bg-[#F2F4F8] rounded-md border-figma-semilar border-dashed font-poppins">
                <div className="flex items-center justify-center gap-1 text-lg">
                  You can also
                  <Link href="/signin" className="text-figma-semilar">
                    Log in
                  </Link>
                  or
                  <Link href="/register" className="text-figma-semilar">
                    Register
                  </Link>
                  First
                </div>
              </div>
            </div>

            {/* form */}
            <h3 className="text-xl md:text-[22px] font-medium font-inter my-6">
              General info
            </h3>
            <form className="my-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid w-full  items-center gap-1.5">
                <Label htmlFor="name">
                  Ad name <span className="text-figma-semilar">*</span>
                </Label>
                <Input type="text" id="name" />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <Label htmlFor="price">
                  Price (BDT) <span className="text-figma-semilar">*</span>
                </Label>
                <div className="relative">
                  <Input type="number" id="price" />
                  <span className="absolute top-1/2 -translate-y-1/2 right-8 text-sm">
                    <DollarSign className="text-figma-text" />
                  </span>
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="category">
                  Category <span className="text-figma-semilar">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full !bg-transparent">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="flat-&-property">
                        Flat & Property
                      </SelectItem>
                      <SelectItem value="product-&-materials">
                        Product & Materials
                      </SelectItem>
                      <SelectItem value="contractor">Contractor</SelectItem>
                      <SelectItem value="service-provider">
                        Service Provider
                      </SelectItem>
                      <SelectItem value="standard-code-&-video">
                        Standard Code & Video
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="location">
                  Location <span className="text-figma-semilar">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full !bg-transparent">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="dhaka">Dhaka</SelectItem>
                      <SelectItem value="bogra">Bogra</SelectItem>
                      <SelectItem value="sylhet">Sylhet</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2 grid w-full gap-1.5">
                <Label htmlFor="description">
                  Description <span className="text-figma-semilar">*</span>
                </Label>
                <div className="bg-[#F2F4F8] rounded-md py-2 px-4 flex flex-wrap items-center gap-3 -mb-1.5 border border-input border-b-0 rounded-b-none">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.0626 8.44532C21.319 9.70247 21.3183 11.7401 20.0612 12.9964L12.9472 20.0984C12.6755 20.3697 12.3388 20.5669 11.9693 20.6713L7.35625 21.9745C6.78509 22.1359 6.2617 21.6013 6.43506 21.0337L7.82258 16.4905C7.93042 16.1374 8.1235 15.8162 8.38478 15.5554L15.5091 8.44272C16.7674 7.18646 18.8058 7.18762 20.0626 8.44532ZM8.15104 2.36975L8.20152 2.47487L11.454 10.724L10.297 11.879L9.556 10H5.443L4.44768 12.5209C4.30809 12.874 3.93033 13.0621 3.57164 12.9737L3.47447 12.9426C3.12137 12.803 2.93328 12.4253 3.02168 12.0666L3.05272 11.9694L6.80633 2.47427C7.04172 1.87883 7.84884 1.84415 8.15104 2.36975ZM7.50294 4.79226L6.036 8.5H8.964L7.50294 4.79226Z"
                        fill="#212121"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 5.75C6 4.7835 6.7835 4 7.75 4H12.499C15.3222 4 17.25 6.33994 17.25 8.75C17.25 9.68107 16.9624 10.602 16.4465 11.3815C17.3691 12.2393 18 13.4703 18 15C18 18.1333 15.3234 20 13 20H7.75C6.7835 20 6 19.2165 6 18.25V5.75ZM9.5 13.4999V16.5H13C13.3118 16.5 13.7105 16.3622 14.0242 16.0786C14.3122 15.8182 14.5 15.4643 14.5 15C14.5 14.1123 13.7547 13.4999 13 13.4999H9.5ZM9.5 9.99994H12.5C13.215 9.99994 13.75 9.40784 13.75 8.75C13.75 8.0932 13.2143 7.5 12.499 7.5H9.5V9.99994Z"
                        fill="#212121"
                      />
                    </svg>
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6.75001 19H17.25C17.6642 19 18 19.3358 18 19.75C18 20.1297 17.7179 20.4435 17.3518 20.4932L17.25 20.5H6.75001C6.33579 20.5 6.00001 20.1642 6.00001 19.75C6.00001 19.3703 6.28216 19.0565 6.64824 19.0068L6.75001 19ZM17.25 4C17.6297 4 17.9435 4.28215 17.9932 4.64823L18 4.75V10.75C18 15.1437 15.9371 17.5 11.9971 17.5C8.14241 17.5 6.08619 15.2446 6.00265 11.0336L6 10.75V4.75C6 4.33579 6.33579 4 6.75001 4C7.1297 4 7.44349 4.28215 7.49315 4.64823L7.5 4.75V10.7507C7.49647 14.3568 8.93346 16 11.9971 16C14.9824 16 16.4251 14.4395 16.4972 11.0235L16.5 10.75V4.75C16.5 4.33579 16.8358 4 17.25 4Z"
                        fill="#212121"
                      />
                    </svg>
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9.75084 4H18.2544C18.6683 4 19.0039 4.33565 19.0039 4.74969C19.0039 5.12923 18.7219 5.4429 18.3561 5.49254L18.2544 5.49938L15.0569 5.499L10.0369 18.5H14.2497C14.6291 18.5 14.9427 18.7823 14.9923 19.1483L14.9992 19.25C14.9992 19.6295 14.7172 19.9435 14.3514 19.9932L14.2497 20H4.75037C4.33642 20 4.00391 19.664 4.00391 19.25C4.00391 18.8705 4.28331 18.5565 4.64872 18.5068L4.75037 18.5H8.43491L8.45616 18.4349L13.4499 5.499L9.75084 5.49938C9.37138 5.49938 9.05739 5.21735 9.00769 4.85142L9.00084 4.74969C9.00084 4.37015 9.28321 4.05649 9.64912 4.00684L9.75084 4Z"
                        fill="#212121"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19.5901 5.08156C19.5256 5.04873 19.4558 5.02494 19.3823 5.01185C19.2923 4.99562 19.2022 4.99637 19.1157 5.0122C18.9906 5.03482 18.8763 5.08848 18.781 5.16493C18.6645 5.2584 18.5765 5.38592 18.5321 5.5324C17.8427 7.58332 16.4747 8.94079 15.3642 9.60708C15.0091 9.8202 14.8939 10.2809 15.107 10.6361C15.3201 10.9913 15.7808 11.1064 16.136 10.8933C16.9101 10.4288 17.7594 9.71339 18.5 8.74737V18.2502C18.5 18.6644 18.8358 19.0002 19.25 19.0002C19.6642 19.0002 20 18.6644 20 18.2502V5.77181C20.0042 5.62763 19.9664 5.48714 19.8944 5.36629C19.8235 5.24719 19.7195 5.14718 19.5901 5.08156ZM3.5 5.75021C3.5 5.336 3.16421 5.00021 2.75 5.00021C2.33579 5.00021 2 5.336 2 5.75021V18.2502C2 18.6644 2.33579 19.0002 2.75 19.0002C3.16421 19.0002 3.5 18.6644 3.5 18.2502V12.5002H10V18.2502C10 18.6644 10.3358 19.0002 10.75 19.0002C11.1642 19.0002 11.5 18.6644 11.5 18.2502V5.75021C11.5 5.336 11.1642 5.00021 10.75 5.00021C10.3358 5.00021 10 5.336 10 5.75021V11.0002H3.5V5.75021Z"
                        fill="#212121"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M2 6C2 5.44772 2.44772 5 3 5H18C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7H3C2.44772 7 2 6.55228 2 6ZM2 18C2 17.4477 2.44772 17 3 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H3C2.44772 19 2 18.5523 2 18ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H3Z"
                        fill="#212121"
                      />
                    </svg>
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17 10.75H7C6.80109 10.75 6.61032 10.671 6.46967 10.5303C6.32902 10.3897 6.25 10.1989 6.25 10C6.25 9.80109 6.32902 9.61032 6.46967 9.46967C6.61032 9.32902 6.80109 9.25 7 9.25H17C17.1989 9.25 17.3897 9.32902 17.5303 9.46967C17.671 9.61032 17.75 9.80109 17.75 10C17.75 10.1989 17.671 10.3897 17.5303 10.5303C17.3897 10.671 17.1989 10.75 17 10.75ZM20 6.75H4C3.80109 6.75 3.61032 6.67098 3.46967 6.53033C3.32902 6.38968 3.25 6.19891 3.25 6C3.25 5.80109 3.32902 5.61032 3.46967 5.46967C3.61032 5.32902 3.80109 5.25 4 5.25H20C20.1989 5.25 20.3897 5.32902 20.5303 5.46967C20.671 5.61032 20.75 5.80109 20.75 6C20.75 6.19891 20.671 6.38968 20.5303 6.53033C20.3897 6.67098 20.1989 6.75 20 6.75ZM20 14.75H4C3.80109 14.75 3.61032 14.671 3.46967 14.5303C3.32902 14.3897 3.25 14.1989 3.25 14C3.25 13.8011 3.32902 13.6103 3.46967 13.4697C3.61032 13.329 3.80109 13.25 4 13.25H20C20.1989 13.25 20.3897 13.329 20.5303 13.4697C20.671 13.6103 20.75 13.8011 20.75 14C20.75 14.1989 20.671 14.3897 20.5303 14.5303C20.3897 14.671 20.1989 14.75 20 14.75ZM17 18.75H7C6.80109 18.75 6.61032 18.671 6.46967 18.5303C6.32902 18.3897 6.25 18.1989 6.25 18C6.25 17.8011 6.32902 17.6103 6.46967 17.4697C6.61032 17.329 6.80109 17.25 7 17.25H17C17.1989 17.25 17.3897 17.329 17.5303 17.4697C17.671 17.6103 17.75 17.8011 17.75 18C17.75 18.1989 17.671 18.3897 17.5303 18.5303C17.3897 18.671 17.1989 18.75 17 18.75Z"
                        fill="black"
                      />
                    </svg>
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 6C5 5.44772 5.44772 5 6 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H6C5.44772 7 5 6.55228 5 6ZM9 18C9 17.4477 9.44772 17 10 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H10C9.44772 19 9 18.5523 9 18ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H3Z"
                        fill="#212121"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_695_2618)">
                        <path
                          d="M3.47396 7.44645C4.21034 7.44645 4.80729 6.8495 4.80729 6.11312C4.80729 5.37674 4.21034 4.77979 3.47396 4.77979C2.73758 4.77979 2.14062 5.37674 2.14062 6.11312C2.14062 6.8495 2.73758 7.44645 3.47396 7.44645Z"
                          fill="black"
                        />
                        <path
                          d="M3.47396 12.7799C4.21034 12.7799 4.80729 12.183 4.80729 11.4466C4.80729 10.7102 4.21034 10.1133 3.47396 10.1133C2.73758 10.1133 2.14062 10.7102 2.14062 11.4466C2.14062 12.183 2.73758 12.7799 3.47396 12.7799Z"
                          fill="black"
                        />
                        <path
                          d="M3.47396 18.1134C4.21034 18.1134 4.80729 17.5165 4.80729 16.7801C4.80729 16.0437 4.21034 15.4468 3.47396 15.4468C2.73758 15.4468 2.14062 16.0437 2.14062 16.7801C2.14062 17.5165 2.73758 18.1134 3.47396 18.1134Z"
                          fill="black"
                        />
                        <path
                          d="M21.6127 6.00016C21.6127 5.82335 21.5424 5.65378 21.4174 5.52876C21.2924 5.40373 21.1228 5.3335 20.946 5.3335H6.66602V6.66683H20.946C21.1228 6.66683 21.2924 6.59659 21.4174 6.47157C21.5424 6.34654 21.6127 6.17697 21.6127 6.00016Z"
                          fill="black"
                        />
                        <path
                          d="M20.946 10.6665H6.66602V11.9998H20.946C21.1228 11.9998 21.2924 11.9296 21.4174 11.8046C21.5424 11.6796 21.6127 11.51 21.6127 11.3332C21.6127 11.1564 21.5424 10.9868 21.4174 10.8618C21.2924 10.7367 21.1228 10.6665 20.946 10.6665Z"
                          fill="black"
                        />
                        <path
                          d="M20.946 16H6.66602V17.3333H20.946C21.1228 17.3333 21.2924 17.2631 21.4174 17.1381C21.5424 17.013 21.6127 16.8435 21.6127 16.6667C21.6127 16.4899 21.5424 16.3203 21.4174 16.1953C21.2924 16.0702 21.1228 16 20.946 16Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_695_2618">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_695_2626)">
                        <path
                          d="M3.63922 4.93987V7.70654H4.43255V4.0332H3.79922L2.69922 4.7732L3.01255 5.3332L3.63922 4.93987Z"
                          fill="black"
                        />
                        <path
                          d="M3.7125 9.87981C3.7812 9.87341 3.85048 9.88111 3.9161 9.90244C3.98172 9.92377 4.04229 9.95827 4.09409 10.0038C4.1459 10.0494 4.18786 10.1051 4.21739 10.1674C4.24692 10.2298 4.26341 10.2975 4.26583 10.3665C4.26583 10.6198 4.12583 10.8598 3.68583 11.2131L2.3525 12.2598V12.9265H5.1125V12.1865H3.5525L4.21917 11.6731C4.88583 11.2065 5.0725 10.8265 5.0725 10.3398C5.06687 10.1736 5.02729 10.0102 4.95621 9.85982C4.88513 9.70943 4.78404 9.57516 4.65917 9.46526C4.53429 9.35537 4.38826 9.27218 4.23004 9.22079C4.07183 9.16941 3.90478 9.15093 3.73917 9.16647C3.46133 9.16486 3.18708 9.2293 2.93904 9.35449C2.69099 9.47967 2.47624 9.66201 2.3125 9.88647L2.81917 10.3731C2.92096 10.2286 3.05427 10.1091 3.20903 10.0236C3.36379 9.93815 3.53595 9.88898 3.7125 9.87981Z"
                          fill="black"
                        />
                        <path
                          d="M4.37323 16.4267C4.56247 16.3794 4.73064 16.2706 4.85132 16.1174C4.97199 15.9641 5.03832 15.7751 5.0399 15.5801C5.0399 15.0001 4.5199 14.5734 3.70656 14.5734C3.43755 14.5687 3.17111 14.6265 2.92819 14.7421C2.68527 14.8578 2.47249 15.0283 2.30656 15.2401L2.76656 15.72C2.87303 15.5921 3.00521 15.488 3.15452 15.4145C3.30383 15.341 3.46693 15.2998 3.63323 15.2934C3.99323 15.2934 4.24656 15.4667 4.24656 15.7334C4.24656 16.0001 4.00656 16.1467 3.5799 16.1467H3.19323V16.8134H3.6199C4.11323 16.8134 4.33323 16.9534 4.33323 17.2334C4.33323 17.5134 4.0999 17.6867 3.66656 17.6867C3.48325 17.6853 3.3022 17.6461 3.13473 17.5715C2.96726 17.4969 2.81696 17.3886 2.69323 17.2534L2.22656 17.7734C2.41236 17.9776 2.64041 18.1388 2.89486 18.2459C3.1493 18.3529 3.42402 18.4033 3.6999 18.3934C4.5599 18.3934 5.1199 17.9334 5.1199 17.3001C5.11937 17.0895 5.04396 16.8861 4.90717 16.7261C4.77037 16.5661 4.5811 16.46 4.37323 16.4267Z"
                          fill="black"
                        />
                        <path
                          d="M21.6127 6.00016C21.6127 5.82335 21.5424 5.65378 21.4174 5.52876C21.2924 5.40373 21.1228 5.3335 20.946 5.3335H6.66602V6.66683H20.946C21.1228 6.66683 21.2924 6.59659 21.4174 6.47157C21.5424 6.34654 21.6127 6.17697 21.6127 6.00016Z"
                          fill="black"
                        />
                        <path
                          d="M20.946 10.6665H6.66602V11.9998H20.946C21.1228 11.9998 21.2924 11.9296 21.4174 11.8046C21.5424 11.6796 21.6127 11.51 21.6127 11.3332C21.6127 11.1564 21.5424 10.9868 21.4174 10.8618C21.2924 10.7367 21.1228 10.6665 20.946 10.6665Z"
                          fill="black"
                        />
                        <path
                          d="M20.946 16H6.66602V17.3333H20.946C21.1228 17.3333 21.2924 17.2631 21.4174 17.1381C21.5424 17.013 21.6127 16.8435 21.6127 16.6667C21.6127 16.4899 21.5424 16.3203 21.4174 16.1953C21.2924 16.0702 21.1228 16 20.946 16Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_695_2626">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7.404 18V17H14.658C15.6953 17 16.5787 16.6443 17.308 15.933C18.0387 15.2217 18.404 14.353 18.404 13.327C18.404 12.301 18.039 11.4357 17.309 10.731C16.5783 10.0257 15.6947 9.673 14.658 9.673H6.916L9.881 12.638L9.173 13.346L5 9.173L9.173 5L9.881 5.708L6.916 8.673H14.658C15.9667 8.673 17.085 9.12433 18.013 10.027C18.9397 10.9297 19.403 12.0297 19.403 13.327C19.403 14.6243 18.9397 15.7277 18.013 16.637C17.0863 17.5463 15.9677 18.0007 14.657 18H7.404Z"
                        fill="#818181"
                      />
                    </svg>
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.596 18V17H9.342C8.30467 17 7.42133 16.6443 6.692 15.933C5.96133 15.2217 5.596 14.353 5.596 13.327C5.596 12.301 5.961 11.4357 6.691 10.731C7.42167 10.0257 8.30533 9.673 9.342 9.673H17.084L14.119 12.638L14.827 13.346L19 9.173L14.827 5L14.119 5.708L17.084 8.673H9.342C8.03333 8.673 6.915 9.12433 5.987 10.027C5.06033 10.9297 4.597 12.0297 4.597 13.327C4.597 14.6243 5.06033 15.7277 5.987 16.637C6.91367 17.5463 8.03233 18.0007 9.343 18H16.596Z"
                        fill="#818181"
                      />
                    </svg>
                  </button>
                </div>
                <Textarea
                  rows={10}
                  placeholder="Write Something here...."
                  id="description"
                  className="border-t-0 rounded-t-none"
                />
              </div>

              <div className="md:col-span-2 grid w-full  items-center gap-1.5">
                <Label htmlFor="video">
                  Video <span className="text-figma-semilar">*</span>
                </Label>
                <Input type="text" id="video" />
              </div>

              <div className="md:col-span-2 grid w-full items-center gap-1.5">
                <Label htmlFor="gallery">
                  Gallery <span className="text-figma-semilar">*</span>
                </Label>
                <UploadField isGallery={true}>
                  <h4 className="text-sm font-semibold font-inter">
                    Upload Your Image
                  </h4>
                  <p className="text-xs text-figma-text font-inter">
                    (Only*jpeg, *webp, and *png images will be accepted)
                  </p>
                </UploadField>
              </div>

              <div className="md:col-span-2 grid w-full items-center gap-1.5">
                <Label htmlFor="attachment">
                  Attachment <span className="text-figma-semilar">*</span>
                </Label>
                <UploadField isAttachment={true}>
                  <h4 className="text-sm font-semibold font-inter">
                    <span className="text-figma-semilar">Choose a file</span>{" "}
                    and drag it here
                  </h4>
                </UploadField>
              </div>
            </form>
            <Button className="flex items-center gap-2 justify-end ml-auto">
              <PlusCircle className="size-4" /> Post your add
            </Button>
          </article>
        </div>
      </section>
    </>
  );
}
