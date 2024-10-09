"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import LoadingPage from "@/app/loading";

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
        <LoadingPage></LoadingPage>
      </div>
    );
  }

  return (
    <section className="relative text-white overflow-hidden rounded-md">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://tinyurl.com/9eh7z7dy')`,
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-gray-800/60"></div>
      {/* Content Wrapper */}
      <div className="relative container mx-auto px-4 py-24 lg:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Discover the Future of Gadgets at Gadget Hub
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Dive into a world of cutting-edge technology and unbeatable deals.
          Find the perfect gadget to enhance your life today.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/product"
            className="bg-[#30415A] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#1a2538] transition duration-300 shadow-lg text-xl md:text-2xl"
          >
            Shop Now
          </Link>
          {/* <Link
            href="/about"
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-4 rounded-lg hover:bg-white hover:text-[#30415A] transition duration-300 shadow-lg text-xl md:text-2xl"
          >
            Learn More
          </Link> */}
        </div>
      </div>
    </section>
  );
};

// Dynamically import the Banner component with SSR disabled
export default dynamic(() => Promise.resolve(Banner), { ssr: false });
