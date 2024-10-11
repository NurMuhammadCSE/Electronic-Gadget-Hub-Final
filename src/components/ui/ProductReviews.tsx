/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@smastrom/react-rating/style.css";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useGetAllReviewsQuery } from "@/redux/api/reviewApi";
import LoadingPage from "@/app/loading";
import dynamic from "next/dynamic";

const ProductReviews: React.FC = () => {
  // Fetch all reviews
  const { data: reviews, isError, isLoading } = useGetAllReviewsQuery(undefined);

  if (isLoading)
    return (
      <p className="text-center text-gray-500">
        <LoadingPage />
      </p>
    );
  if (isError)
    return <p className="text-center text-red-500">Error Loading Reviews</p>;

  return (
    <section className="py-12 bg-gradient-to-r from-indigo-50 to-blue-50">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Top Product Reviews & Ratings
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full"
      >
        {reviews?.data?.map((testimonial: any, index: any) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 h-full transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
              <Image
                height={120}
                width={120}
                src={"https://avatar.iran.liara.run/public"}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-indigo-300 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <Rating
                value={testimonial.rating}
                readOnly
                style={{ maxWidth: 100 }}
                className="mt-2"
              />
              <span className="text-gray-700 mt-2">
                {testimonial.rating.toFixed(1)}/5
              </span>
              <p className="mt-4 text-lg text-gray-600 max-w-lg leading-relaxed flex-grow">
                {testimonial.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default dynamic(() => Promise.resolve(ProductReviews), { ssr: false });
