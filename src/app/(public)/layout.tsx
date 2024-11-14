import * as React from "react";

import { TopBar, Header, Navbar } from "@/components/layout";
import { Footer } from "@/components/layout/footer";

export default function PublicPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="bg-[#F2F3F8] min-h-screen">
      <TopBar />
      <Header />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
