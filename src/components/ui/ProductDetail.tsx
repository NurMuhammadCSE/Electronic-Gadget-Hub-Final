/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { Product } from "@/types";
import { addToCart } from "@/redux/feature/cartSlice";
import ReviewForm from "./ReviewForm";
import { useGetReviewsByProductIdQuery } from "@/redux/api/reviewApi";
import Image from "next/image";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const dispatch = useDispatch();

  const { data: reviews } = useGetReviewsByProductIdQuery(product._id);
  // console.log(reviews?.data);
  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          {/* <img
            src={product?.imageUrl}
            alt={product?.name}
            className="w-full md:w-1/2 h-auto object-cover"
          /> */}
          <div>
            <Image
              width={500}
              height={500}
              src={product?.imageUrl}
              alt={product?.name}
              objectFit="contain"
              quality={100}
              className="w-full md:w-1/2 h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product?.name}
            </h1>
            <p className="text-gray-600 text-lg mb-4">{product?.description}</p>
            <p className="text-xl font-semibold text-blue-600 mb-4">
              ${product?.price.toFixed(2)}
            </p>
            <div className="text-sm text-gray-700 mb-4">
              <p>
                <span className="font-bold">Category:</span> {product?.category}
              </p>
              <p>
                <span className="font-bold">Brand:</span> {product?.brand}
              </p>
              <p>
                <span className="font-bold">Stock:</span>{" "}
                {product?.stock > 0 ? (
                  <span className="text-green-500">
                    In Stock ({product?.stock} units available)
                  </span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </p>
            </div>
            <button
              onClick={onAddToCart}
              className="px-4 py-2 bg-[#2A4460] text-white font-semibold rounded-lg hover:bg-[#5f76a5] focus:outline-none focus:ring-2"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Review Section */}
        <div className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Product Reviews</h2>
          <div className="space-y-4">
            {reviews?.data?.length > 0 ? (
              reviews?.data?.map((review: any, index: any) => (
                <div key={index} className="bg-gray-100 p-4 rounded">
                  <p className="text-lg">{review.review}</p>
                  <p className="text-sm text-gray-600">
                    Rating: {review.rating} Stars
                  </p>
                </div>
              ))
            ) : (
              <p>No reviews yet for this product.</p>
            )}
          </div>
          <ReviewForm productId={product._id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
