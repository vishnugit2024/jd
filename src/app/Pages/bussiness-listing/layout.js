"use client"; // Only if using Next.js App Router

import BusinessNavbar from "@/app/Components/BusinessNavbar/BusinessNavbar";
import { usePathname } from "next/navigation";
import Navbar from "@/app/Components/Navbar/Navbar";

export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <>
      {/* Show BusinessNavbar only on the business listing page */}
      {pathname === "/Pages/bussiness-listing" ? <BusinessNavbar /> : <Navbar />}
      <main>{children}</main>
    </>
  );
}
