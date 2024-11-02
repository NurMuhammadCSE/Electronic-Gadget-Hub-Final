// "use client"
// import React, { useEffect, useState } from "react";
// import Banner from "./components/page/Banner";
// import ProductPage from "./product/page";

// const CommonPage = () => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Render nothing while the client-side hydration is happening
//   if (!isClient) return null;

//   return (
//     <div>
//       <Banner />
//       <ProductPage />
//     </div>
//   );
// };

// export default CommonPage;


"use client";
// import HeroSectionContainer from "@/components/ui/HeroSection";
// import WhyShopWithUs from "@/components/ui/WhyShopWithUs";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import components
const Banner = dynamic(() => import("./components/page/Banner"), { ssr: false });
const ProductPage = dynamic(() => import("./product/page"), { ssr: false });
const FeaturedProduct = dynamic(() => import("@/components/ui/FeaturedProduct"), { ssr: false });
const SpecialOffers = dynamic(() => import("@/components/ui/SpecialOffers"), { ssr: false });
const ProductReviews = dynamic(() => import("@/components/ui/ProductReviews"), { ssr: false });
const LatestArrivals = dynamic(() => import("@/components/ui/LatestArrivals"), { ssr: false });
const WhyShopWithUs = dynamic(() => import("@/components/ui/WhyShopWithUs"), { ssr: false });
// const HeroSectionContainer = dynamic(() => import("@/components/ui/HeroSection"), { ssr: false });
const ProductArea = dynamic(() => import("@/components/ui/ProductArea"), { ssr: false });

const CommonPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // window.location.reload();
    setIsClient(true);
  }, []);

  // Render nothing while the client-side hydration is happening
  if (!isClient) return null;

  return (
    <div>
      {/* <HeroSectionContainer /> */}
      <Banner />
      <FeaturedProduct />
      <ProductPage />
      <LatestArrivals />
      <SpecialOffers />
      <ProductReviews />
      <WhyShopWithUs />
      <ProductArea></ProductArea>
    </div>
  );
};

export default CommonPage;
