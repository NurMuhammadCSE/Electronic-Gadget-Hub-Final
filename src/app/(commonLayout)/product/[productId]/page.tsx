// /* eslint-disable @typescript-eslint/no-explicit-any */
// import ProductDetail from "@/components/ui/ProductDetail";
// import { Product } from "@/types";

// // Interface for product ID params
// interface ProductId {
//   params: {
//     productId: string;
//   };
// }

// // Generate static parameters for SSG (if needed, otherwise remove)
// export const generateStaticParams = async () => {
//   const res = await fetch("https://electronic-gadgets-shop-backend.vercel.app/api/product/products");
//   const products = await res.json();
//     // console.log(products?.data);
//   return products?.data?.map((product: Product) => ({
//     productId: product._id,
//   }));
// };

// // Product detail page component
// const ProductDetailPage = async ({ params }: ProductId) => {
//   // console.log(params)
//   const res = await fetch(
//     `https://electronic-gadgets-shop-backend.vercel.app/api/product/product/${params.productId}`,
//     {
//       cache: "no-store",
//     }
//   );

//   const product = await res.json();
//   // console.log(product)

//   return (
//     <div className="my-10">
//       <ProductDetail product={product.data} />
//     </div>
//   );
// };

// export default ProductDetailPage;

//! Yo

/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductDetail from "@/components/ui/ProductDetail";
import { Product } from "@/types";
import dynamic from "next/dynamic";

// Interface for product ID params
interface ProductId {
  params: {
    productId: string;
  };
}

// Generate static parameters for SSG
export const generateStaticParams = async () => {
  try {
    const res = await fetch(
      "https://electronic-gadgets-shop-backend.vercel.app/api/product/products",
    );
    const products = await res.json();

    // Ensure data exists and is an array
    if (Array.isArray(products?.data)) {
      return products.data.map((product: Product) => ({
        productId: product._id,
      }));
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch product IDs:", error);
    return [];
  }
};

// Product detail page component
const ProductDetailPage = async ({ params }: ProductId) => {
  try {
    const res = await fetch(
      `https://electronic-gadgets-shop-backend.vercel.app/api/product/product/${params.productId}`,
      {
        cache: "no-store",
      }
    );

    const product = await res.json();

    // Ensure product data is valid
    if (!product || !product.data) {
      return <div>Error: Product not found</div>;
    }

    return (
      <div className="my-10">
        <ProductDetail product={product.data} />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    return <div>Error: Failed to load product details</div>;
  }
};

// export default ProductDetailPage;
export default dynamic(() => Promise.resolve(ProductDetailPage), {
  ssr: false,
});

// //! Onak Koshto
// import ProductDetail from "@/components/ui/ProductDetail";
// import React from "react";

// const ProductId = async ({ params }) => {
//   console.log(params);
//   const res = await fetch(
//     `https://electronic-gadgets-shop-backend.vercel.app/api/product/product/${params.productId}`,
//     {
//       cache: "no-store",
//     }
//   );
//   const product = await res.json();
//   console.log(product.data);
//   return (
//     <div>
//       <div className="my-10">
//       <ProductDetail product={product.data} />
//      </div>
//     </div>
//   );
// };

// export default ProductId;
