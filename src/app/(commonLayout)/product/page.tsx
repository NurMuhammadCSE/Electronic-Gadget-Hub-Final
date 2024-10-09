"use client";
import LoadingPage from "@/app/loading";
import ProductCard from "@/components/ui/ProductCard";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { Product } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ProductPage = () => {
  const [isClient, setIsClient] = useState(false);

  const { data, isError, isLoading } = useGetProductsQuery("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render nothing while the client-side hydration is happening
  if (!isClient) return null;

  if (isLoading)
    return (
      <p className="text-center text-gray-500">
        <LoadingPage></LoadingPage>
      </p>
    );
  if (isError)
    return <p className="text-center text-red-500">Error loading products</p>;

  // Filter products by category
  const electronicsProducts = data?.data
    ?.filter((product: Product) => product.category === "Electronics")
    .slice(0, 3); // Show only 3 products

  const mobileProducts = data?.data
    ?.filter((product: Product) => product.category === "Mobile")
    .slice(0, 3); // Show only 3 products

  const TVProducts = data?.data
    ?.filter((product: Product) => product.category === "TV")
    .slice(0, 3); // Show only 3 products

  const fridgesProducts = data?.data
    ?.filter((product: Product) => product.category === "Fridge")
    .slice(0, 3); // Show only 3 products

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">
        Explore our Products
      </h2>

      {[
        {
          title: "Electronics",
          products: electronicsProducts,
          category: "Electronics",
        },
        { title: "Mobiles", products: mobileProducts, category: "Mobile" },
        { title: "Fridges", products: fridgesProducts, category: "Fridge" },
        { title: "TVs", products: TVProducts, category: "TV" },
      ].map(({ title, products, category }) => (
        <div key={category} className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">{`Explore Our ${title}`}</h1>
            {/* <a
              href={`/products/${category}`}
              className="text-blue-500 hover:underline"
            >
              See More
            </a> */}
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {products?.map((product: Product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            {products?.length > 1 && (
              <div className="relative mt-5 inset-0 flex items-center justify-center">
                <Link
                  href={`/products/${category}`}
                  className="bg-[#2A4460] text-white py-2 px-4 rounded-lg hover:bg-[#5f76a5]"
                >
                  See More
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProductPage), { ssr: false });

// "use client";
// import ProductCard from "@/components/ui/ProductCard";
// import { useGetProductsQuery } from "@/redux/api/productApi";
// import { Product } from "@/types";
// import React from "react";

// const ProductPage = () => {
//   const { data, isError, isLoading } = useGetProductsQuery("");

//   // const electronics =  data?.data?.filter(item => item.category === "Electronics")
//   // console.log(electronics)

//   if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
//   if (isError)
//     return <p className="text-center text-red-500">Error loading products</p>;
//   // console.log(data?.data);

//   // const res = await fetch("https://electronic-gadgets-shop-backend.vercel.app/api/product/products", {
//   //   next: {
//   //     revalidate: 30,
//   //   },
//   // });
//   // const products = await res.json();
//   // console.log(products);

//   // Filter products to show only electronics
//   const electronicsProducts = data?.data?.filter(
//     (product: Product) => product.category === "Electronics"
//   );

//   const mobileProducts = data?.data?.filter(
//     (product: Product) => product.category === "Mobile"
//   );

//   const TVProducts = data?.data?.filter(
//     (product: Product) => product.category === "TV"
//   );
//   const fridgesProducts = data?.data?.filter(
//     (product: Product) => product.category === "Fridge"
//   );

//   return (
//     <div className="p-6 max-w-screen-xl mx-auto">
//       <div>
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Explore Our Electronics
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {electronicsProducts?.map((product: Product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       </div>
//       <div>
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Explore Our Mobiles
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {mobileProducts?.map((product: Product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       </div>
//       <div>
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Explore Our Fridges
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {fridgesProducts?.map((product: Product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       </div>
//       <div>
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Explore Our TV
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {TVProducts?.map((product: Product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
