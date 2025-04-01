import { useRouter } from "next/router";
import "@/styles/globals.css"; // Import global styles if needed
import BusinessNavbar from "../Components/BusinessNavbar/BusinessNavbar";
import Header from "../Components/Navbar/Navbar";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {/* Conditionally render Navbar */}
      {router.pathname === "/Pages/bussiness-listing" ? 
        <BusinessNavbar />
       : 
        <Header />
      }
      <Component {...pageProps} />
    </>
  );
}
