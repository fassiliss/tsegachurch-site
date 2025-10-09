import { ReactNode } from "react";
import Header from "@/src/layouts/header/Header"; // your simplified header (with MobileMenu inside)
import Footer from "@/src/layouts/Footer"; // your simplified footer

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
