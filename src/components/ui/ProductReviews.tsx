// components/ProductReviews.tsx
import React from "react";
import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css";
import "swiper/css/pagination";
import "@smastrom/react-rating/style.css";
import { Pagination } from 'swiper/modules';
import Image from "next/image";

interface Review {
  id: number;
  product: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number; // Out of 5
  reviewText: string;
}

const ProductReviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      product: "Smart TV 4K",
      user: {
        name: "John Doe",
        avatar: "https://tinyurl.com/5etkpyf3",
      },
      rating: 4.5,
      reviewText:
        "Amazing quality and vivid display. Highly recommend for movie lovers!",
    },
    {
      id: 2,
      product: "Wireless Earbuds",
      user: {
        name: "Jane Smith",
        avatar: "https://tinyurl.com/4zch6dcw",
      },
      rating: 4.8,
      reviewText:
        "Great sound, comfortable to wear, and battery life is top-notch.",
    },
    {
      id: 3,
      product: "Energy-efficient Fridge",
      user: {
        name: "Sam Wilson",
        avatar: "https://tinyurl.com/ye28v7rd",
      },
      rating: 4.7,
      reviewText:
        "Keeps food fresh for days. Energy saving feature is a bonus!",
    },
    {
      id: 4,
      product: "Energy-efficient Fridge",
      user: {
        name: "Sam Wilson",
        avatar: "https://tinyurl.com/ye28v7rd",
      },
      rating: 4.7,
      reviewText:
        "Keeps food fresh for days. Energy saving feature is a bonus!",
    },
  ];

  return (
    <section className="my-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">
        Top Product Reviews & Ratings
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div
              key={review.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={"https://avatar.iran.liara.run/public"}
                  alt={review.user.name}
                  className="w-12 h-12 rounded-full mr-4"
                  height={500}
                  width={500}
                />
                <div>
                  <h3 className="text-xl font-semibold">{review.user.name}</h3>
                  <p className="text-gray-500">{review.product}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <Rating
                  value={review.rating}
                  readOnly
                  style={{ maxWidth: 100 }}
                  className="mr-2"
                />
                <span className="text-gray-700">
                  {review.rating.toFixed(1)}/5
                </span>
              </div>
              <p className="text-gray-600">{review.reviewText}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductReviews;
