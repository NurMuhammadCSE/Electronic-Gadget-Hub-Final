"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/app/loading";
import Image from "next/image";

const Banner: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensures the component only runs on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show loading state if it's rendering before hydration is complete
  if (!isClient) {
    return (
      <div className="h-96 bg-gray-200 animate-pulse">
        <LoadingPage />
      </div>
    );
  }

  return (
    <section
      id="head"
      className="pt-12 bg-gradient-to-r from-blue-80 to-blue-50"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              height={500}
              width={500}
              className="max-w-full rounded-sm"
              // src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Vegetables-PNG/Organic_Vegetables_PNG_Picture.png?m=1507172105"
              src="https://plus.unsplash.com/premium_photo-1682125902211-7e7c32844fa5?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="8K TV"
            />
          </div>
          {/* Right Text Section */}
          <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
            <h6 className="text-[#133E87] text-lg font-semibold mb-2">
              BEST QUALITY PRODUCTS
            </h6>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Discover the Future of Gadgets
            </h1>
            <p className="text-gray-600 mt-4 mb-8">
            Dive into a world of cutting-edge technology and unbeatable deals.
            Find the perfect gadget to enhance your life today.
            </p>
            <Link href="/shop">
              <button className="flex items-center justify-center bg-[#133E87] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#608BC1] transition duration-300 ease-in-out">
                <i className="fas fa-cart-arrow-down mr-2"></i> Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Dynamically import the Banner component with SSR disabled
export default dynamic(() => Promise.resolve(Banner), { ssr: false });
