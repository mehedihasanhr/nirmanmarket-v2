import { TopBar, Header } from "@/components/layout";
import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="bg-[#F2F3F8] min-h-screen">
      <TopBar />
      <Header />
      <div className="container">
        <div className="grid grid-cols-12 gap-y-7 gap-x-4 pt-20 md:pt-[187px] pb-20 items-center">
          <div className="hidden md:block col-span-12 md:col-span-6">
            <div className="w-full max-w-[500px]">
              <Image
                src="/placeholders/placeholder-1.svg"
                alt=""
                width={500}
                height={500}
                priority
                sizes="500px"
                style={{ width: "auto", height: "auto" }}
                className="w-full h-full object-fill"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">{children}</div>
        </div>
      </div>
    </main>
  );
}
