"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

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
    name: "Bluetooth Speaker",
    category: "Speaker",
    price: 199.99,
    imageUrl: "https://tinyurl.com/5a8vf62a",
  },
  {
    id: 6,
    name: "Smart Watch",
    category: "Wearable",
    price: 249.99,
    imageUrl: "https://tinyurl.com/248ufehm",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Featured Products
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            1280: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 1, spaceBetween: 15 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="p-4 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition bg-gradient-to-r from-blue-50 to-blue-100 duration-300 transform hover:scale-105">
                <div className="relative">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                    height={300}
                    width={400}
                  />
                  {/* Overlay and Shop Now Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {product.name}
                    </h3>
                    <Link href="/product">
                      <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-600">{product.category}</p>
                  <p className="text-xl font-semibold text-gray-800 mt-2">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
