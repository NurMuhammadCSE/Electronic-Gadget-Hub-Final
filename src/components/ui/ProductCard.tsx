/* eslint-disable @typescript-eslint/no-explicit-any */
import { addToCart } from "@/redux/feature/cartSlice";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, description, price, _id } = product;

  // const onAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.stopPropagation(); // Prevents click event from bubbling up to the Link

  //   dispatch(addToCart({ ...product, quantity: 1 }));
  //   toast.success(`${name} is added to cart Successfully`);
  // };

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    toast.success(`${name} is added to cart Successfully`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <Link href={`/product/${_id}`}>
        {/* <img src={imageUrl} alt={name} className="w-full h-40 object-cover" /> */}
        <Image
          width={500}
          height={500}
          src={imageUrl}
          alt={name}
          objectFit="contain"
          quality={100}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center justify-between mt-1">
          <span className="text-lg font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(product);
            }}
            className="px-4 py-2 bg-[#2A4460] text-white font-semibold rounded-lg hover:bg-[#5f76a5] focus:outline-none focus:ring-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
