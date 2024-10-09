"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "@/components/ui/ProductCard";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { Product } from "@/types";
import React from "react";

const Category = ({ params }: any) => {
  console.log(params.category);
  const { data, isError, isLoading } = useGetProductsQuery("");

  // Filter products by category
  const electronicsProducts = data?.data?.filter(
    (product: Product) => product.category === params.category
  );

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (isError)
    return <p className="text-center text-red-500">Error loading products</p>;

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Explore Our Electronics
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {electronicsProducts?.map((product: Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default Category;
