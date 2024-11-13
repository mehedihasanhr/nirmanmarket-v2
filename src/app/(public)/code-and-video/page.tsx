import BookCard from "@/components/common/book-card";
import { ProductAds, ProductCollectionContainer, ProductCollectionGrid, ProductCollectionHeading, ProductGrid } from "@/components/common/product-collection";
import { Slider } from "@/components/pages/code-and-video/slider";
import { Button } from "@/components/ui/button";
import { SliderItem } from "@/types";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import React from "react";



const sliderData: SliderItem[] = [
    {
        id: 1,
        title: 'Electrical Book',
        images: [
            {title: 'Power system', imgUrl: '/book.png'},
            {title: 'Power system', imgUrl: '/book.png'},
            {title: 'Power system', imgUrl: '/book.png'},
            {title: 'Power system', imgUrl: '/book.png'},
        ]
    },
    {
        id: 2,
        title: 'Plumbing Book',
        images: [
            {title: 'Plumbing', imgUrl: '/book.png'},
            {title: 'Plumbing', imgUrl: '/book.png'},
            {title: 'Plumbing', imgUrl: '/book.png'},
            {title: 'Plumbing', imgUrl: '/book.png'},
        ]
    },
    {
        id: 3,
        title: 'Civil Engineering Book',
        images: [
            {title: 'Civil Engineering', imgUrl: '/book.png'},
            {title: 'Civil Engineering', imgUrl: '/book.png'},
            {title: 'Civil Engineering', imgUrl: '/book.png'},
            {title: 'Civil Engineering', imgUrl: '/book.png'},
        ]
    },
    {
        id: 4,
        title: 'Architecture Book',
        images: [
            {title: 'Architecture', imgUrl: '/book.png'},
            {title: 'Architecture', imgUrl: '/book.png'},
            {title: 'Architecture', imgUrl: '/book.png'},
            {title: 'Architecture', imgUrl: '/book.png'},
        ]
    },
    {
        id: 5,
        title: 'HVAC Book',
        images: [
            {title: 'HVAC', imgUrl: '/book.png'},
            {title: 'HVAC', imgUrl: '/book.png'},
            {title: 'HVAC', imgUrl: '/book.png'},
            {title: 'HVAC', imgUrl: '/book.png'},
        ]
    },
    {
        id: 6,
        title: 'Fire Safety Book',
        images: [
            {title: 'Fire Safety', imgUrl: '/book.png'},
            {title: 'Fire Safety', imgUrl: '/book.png'},
            {title: 'Fire Safety', imgUrl: '/book.png'},
            {title: 'Fire Safety', imgUrl: '/book.png'},
        ]
    },
    {
        id: 7,
        title: 'Building Codes Book',
        images: [
            {title: 'Building Codes', imgUrl: '/book.png'},
            {title: 'Building Codes', imgUrl: '/book.png'},
            {title: 'Building Codes', imgUrl: '/book.png'},
            {title: 'Building Codes', imgUrl: '/book.png'},
        ]
    },
    {
        id: 8,
        title: 'Construction Safety Book',
        images: [
            {title: 'Construction Safety', imgUrl: '/book.png'},
            {title: 'Construction Safety', imgUrl: '/book.png'},
            {title: 'Construction Safety', imgUrl: '/book.png'},
            {title: 'Construction Safety', imgUrl: '/book.png'},
        ]
    },
]

export default function CodeAndVideo() {
  return (
    <div>
        <section>
        <Image
                   
                   src='/slider/slider3.png'
                   alt=""
                   width={750}
                   height={450}
                   loading="lazy"
                   quality={70}
                   placeholder="blur"
                   blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8VA8AAmkBc7YFeIIAAAAASUVORK5CYII="
                   className="w-full h-[375px]"
                />
        </section>
       <section className="container bg-white px-16 rounded-xl mt-20">
       <Slider sliderData={sliderData}/>
       </section>

       
      {/* Books */}
      {Array.from({ length: 2 }).map((_, idx: number) => (
        <React.Fragment key={idx}>
          <section className="mt-20">
            <ProductCollectionContainer>
              <ProductCollectionHeading heading="Most Popular Books" />
              <ProductCollectionGrid isHasAds>
                <ProductAds
                  ads={[
                    "https://picsum.photos/seed/picsum/300/200",
                    "https://picsum.photos/seed/picsum/300/200",
                  ]}
                />

                <ProductGrid>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <BookCard
                      key={index}
                      book={{
                        image: "https://picsum.photos/seed/picsum/300/200",
                        title: faker.commerce.productName(),
                        writer: faker.person.fullName()
                      }}
                    />
                  ))}
                </ProductGrid>
              </ProductCollectionGrid>

                {/* load more button  */}
                <div className="mt-10 flex gap-8 items-center justify-center">
                    <Button>Load More</Button>
                    <Button variant='outline'>See All</Button>
                </div>
            </ProductCollectionContainer>

            
          </section>

          {/* Ads  */}
          <div className="grid grid-cols-2 gap-4 container py-10">
            <div>
              <Image
                src="https://placehold.co/600x300/fafafa/a6a6a6/png?text=Ads"
                alt=""
                width={600}
                height={300}
                loading="lazy"
                className="rounded-lg"
              />
            </div>

            <div>
              <Image
                src="https://placehold.co/600x300/fafafa/a6a6a6/png?text=Ads"
                alt=""
                width={600}
                height={300}
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>

          
        </React.Fragment>
      ))}


      <section className="container px-0 md:px-4">
        <div className="px-2 md:px-6 py-8 md:rounded-lg bg-background">
            <h2 className="mb-5 block"> See Video </h2>
                <div className="grid grid-cols-11 gap-4">
                    <Image
                        src='https://picsum.photos/seed/picsum/300/200'
                        alt=""
                        width={308}
                        height={168}
                        sizes="340px"
                        loading="lazy"
                        quality={70}
                        style={{ width: "100%", height: "100%" }}
                        className="w-full h-full rounded-lg col-span-3 row-span-2"
                    />
                    <Image
                        src='https://picsum.photos/seed/picsum/300/200'
                        alt=""
                        width={308}
                        height={168}
                        sizes="340px"
                        loading="lazy"
                        quality={70}
                        style={{ width: "100%", height: "100%" }}
                        className="w-full h-full rounded-lg col-span-4"
                    />
                    <Image
                        src='https://picsum.photos/seed/picsum/300/200'
                        alt=""
                        width={308}
                        height={168}
                        sizes="340px"
                        loading="lazy"
                        quality={70}
                        style={{ width: "100%", height: "100%" }}
                        className="w-full h-full rounded-lg col-span-4"
                    />
                    <Image
                        src='https://picsum.photos/seed/picsum/300/200'
                        alt=""
                        width={308}
                        height={168}
                        sizes="340px"
                        loading="lazy"
                        quality={70}
                        style={{ width: "100%", height: "100%" }}
                        className="w-full h-full rounded-lg col-span-4"
                    />
                    <Image
                        src='https://picsum.photos/seed/picsum/300/200'
                        alt=""
                        width={308}
                        height={168}
                        sizes="340px"
                        loading="lazy"
                        quality={70}
                        style={{ width: "100%", height: "100%" }}
                        className="w-full h-full rounded-lg col-span-4"
                    />
                     <Image
                        src='https://picsum.photos/seed/picsum/300/200'
                        alt=""
                        width={308}
                        height={168}
                        sizes="340px"
                        loading="lazy"
                        quality={70}
                        style={{ width: "100%", height: "100%" }}
                        className="w-full h-full rounded-lg col-span-4"
                    />
                    <Image
                        src='https://picsum.photos/seed/picsum/300/200'
                        alt=""
                        width={308}
                        height={168}
                        sizes="340px"
                        loading="lazy"
                        quality={70}
                        style={{ width: "100%", height: "100%" }}
                        className="w-full h-full rounded-lg col-span-4"
                    />
                    <Image
                        src='https://picsum.photos/seed/picsum/300/200'
                        alt=""
                        width={308}
                        height={168}
                        sizes="340px"
                        loading="lazy"
                        quality={70}
                        style={{ width: "100%", height: "100%" }}
                        className="w-full h-full rounded-lg col-span-3 row-span-2"
                    />
                    <Image
                        src='https://picsum.photos/seed/picsum/300/200'
                        alt=""
                        width={308}
                        height={168}
                        sizes="340px"
                        loading="lazy"
                        quality={70}
                        style={{ width: "100%", height: "100%" }}
                        className="w-full h-full rounded-lg col-span-4"
                    />
                    <Image
                        src='https://picsum.photos/seed/picsum/300/200'
                        alt=""
                        width={308}
                        height={168}
                        sizes="340px"
                        loading="lazy"
                        quality={70}
                        style={{ width: "100%", height: "100%" }}
                        className="w-full h-full rounded-lg col-span-4"
                    />
                </div>
                {/* load more button  */}
                <div className="mt-10 flex gap-8 items-center justify-center">
                    <Button>Load More</Button>
                    <Button variant='outline'>See All</Button>
                </div>
        </div>
      </section>
    </div>
  )
}
