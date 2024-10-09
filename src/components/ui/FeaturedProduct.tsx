import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

// Example Product Data
const products = [
  {
    id: 1,
    name: "Smart TV 4K",
    category: "TV",
    price: 599.99,
    imageUrl: "https://tinyurl.com/46kpkwb2",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    category: "AC",
    price: 499.99,
    imageUrl: "https://tinyurl.com/5a8vf62a",
  },
  {
    id: 3,
    name: "Energy-efficient Fridge",
    category: "Fridge",
    price: 799.99,
    imageUrl: "https://tinyurl.com/muh778t4",
  },
  {
    id: 4,
    name: "OLED TV",
    category: "TV",
    price: 1099.99,
    imageUrl: "https://tinyurl.com/248ufehm",
  },
  {
    id: 5,
    name: "Energy-efficient Fridge",
    category: "Fridge",
    price: 799.99,
    imageUrl: "https://tinyurl.com/muh778t4",
  },
  {
    id: 6,
    name: "OLED TV",
    category: "TV",
    price: 1099.99,
    imageUrl: "https://tinyurl.com/248ufehm",
  },
];

export default function FeaturedProducts() {
  return (
    <div className="my-12 px-4 lg:px-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
        Featured Products
      </h2>
      <Swiper
        slidesPerView={1} // Default for mobile
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // Adjusted breakpoints for better responsiveness
          1280: { slidesPerView: 4, spaceBetween: 30 }, // Large Desktop
          1024: { slidesPerView: 3, spaceBetween: 25 }, // Desktop
          768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
          640: { slidesPerView: 2, spaceBetween: 15 }, // Small Tablet
          480: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative p-4 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 md:h-64 object-cover rounded-lg transition-transform duration-300"
                  height={500}
                  width={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A4460]/80 to-transparent flex items-center justify-center">
                  <h3 className="text-lg md:text-xl font-bold text-white text-center">
                    {product.name}
                  </h3>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-sm md:text-base text-gray-500">{product.category}</p>
                <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
