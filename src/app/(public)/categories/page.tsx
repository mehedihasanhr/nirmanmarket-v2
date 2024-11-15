import ProductCard from "@/components/common/product-card";
import ProductCardLoader from "@/components/common/product-card-loader";
import {
  ProductAds,
  ProductCollectionContainer,
  ProductCollectionGrid,
  ProductCollectionHeading,
  ProductGrid,
} from "@/components/common/product-collection";
import FilterBar from "@/components/pages/categories/filterbar";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

import products from "@/constants/products.json";

export default async function Categories() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/"> Home</Link>
          <IconChevronRight size={16} />
          <span> Categories </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] gap-4">
          <FilterBar />

          <div>
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
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {products?.map((product: any) => (
                    <React.Suspense
                      key={product.id}
                      fallback={<ProductCardLoader />}
                    >
                      <ProductCard
                        product={{
                          image: "https://picsum.photos/seed/picsum/300/200",
                          title: product.title,
                          description: product.description,
                          location: "",
                          price: product.price,
                          rating: 2.5,
                          discount: 10,
                          discountType: "amount",
                        }}
                      />
                    </React.Suspense>
                  ))}
                </ProductGrid>
              </ProductCollectionGrid>
            </ProductCollectionContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
