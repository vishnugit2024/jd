"use client";
import "./globals.css";
import Script from "next/script";
import Footer from "./Components/Footer/Footer";
import Enquiryform from "./Components/Enquiryform/Enquiryform";
import { usePathname } from "next/navigation";
import BusinessNavbar from "./Components/BusinessNavbar/BusinessNavbar";
import Header from "./Components/Navbar/Navbar";
import './Components/Heading/heading.css'
export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        {/* Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        ></link>
      </head>
      <body>
        {pathname === "/Pages/bussiness-listing" ? (
          <BusinessNavbar />
        ) : (
          <Header />
        )}

        <div className="childrens">
          {/* <Enquiryform /> */}

          {children}
        </div>

        <Footer />
        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
