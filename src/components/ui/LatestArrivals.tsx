import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

const LatestArrivals: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Samsung Neo QLED 8K",
      image: "https://tinyurl.com/5b3k7u8n",
      description:
        "Experience crystal-clear visuals with this cutting-edge 4K TV.",
      price: "$999",
    },
    {
      id: 2,
      name: "Eco-friendly Fridge",
      image: "https://tinyurl.com/muh778t4",
      description:
        "Energy-saving and environmentally friendly fridge for modern kitchens.",
      price: "$799",
    },
    {
      id: 3,
      name: "Wireless Noise-Cancelling Headphones",
      image: "https://tinyurl.com/33txmwcm",
      description:
        "Immerse yourself in your music with industry-leading noise-cancellation.",
      price: "$299",
    },
    {
      id: 4,
      name: "Smart Watch",
      image: "https://tinyurl.com/yc7ujzsv",
      description: "Track your health metrics and stay connected on the go.",
      price: "$199",
    },
  ];

  return (
    <section className="my-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Latest Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 relative"
          >
            {/* Label */}
            <span className="absolute top-2 left-2 bg-[#133E87] text-white text-xs font-bold py-1 px-3 rounded-full">
              New Arrival
            </span>

            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
              height={500}
              width={500}
            />

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>

              {/* Price */}
              <p className="text-lg font-bold text-gray-800">{product.price}</p>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-[#2A4460] bg-opacity-0 hover:bg-opacity-60 transition duration-300 flex justify-center items-center opacity-0 hover:opacity-100">
              <Link
                href="/product"
                className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArrivals;
