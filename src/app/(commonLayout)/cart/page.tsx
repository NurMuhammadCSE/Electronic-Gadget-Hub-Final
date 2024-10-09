// "use client";
// import CartDetails from "@/components/ui/CartDetails";
// // import CheckoutPage from "@/components/ui/CheckoutPage";
// import OrderSummary from "@/components/ui/OrderSummary";
// import { useAppSelector } from "@/redux/hooks";
// import { Product } from "@/types";
// import dynamic from "next/dynamic";
// import React from "react";

// function Cart() {
//   const { products } = useAppSelector((store) => store.cart);
//   // console.log(products);
//   return (
//     <div className="container mt-10 mx-auto">
//       <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
//         <div className="space-y-5 lg:mt-0 mt-5">
//           {products.length ? (
//             products.map((product: Product) => (
//               <CartDetails key={product._id} product={product} />
//             ))
//           ) : (
//             <p className="text-2xl text-red-500">No products found</p>
//           )}
//         </div>
//         <OrderSummary />
//         {/* <CheckoutPage></CheckoutPage> */}
//       </div>
//     </div>
//   );
// }

// export default dynamic(() => Promise.resolve(Cart), { ssr: false });

"use client";

import LoadingPage from "@/app/loading";
import CartDetails from "@/components/ui/CartDetails";
import OrderSummary from "@/components/ui/OrderSummary";
import { useAppSelector } from "@/redux/hooks";
import { Product } from "@/types";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

function Cart() {
  const { products } = useAppSelector((store) => store.cart);
  const [isClient, setIsClient] = useState(false);

  // Ensure this is rendered only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div>
        <LoadingPage></LoadingPage>
      </div>
    ); // Loading state while waiting for hydration
  }

  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40">
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            products.map((product: Product) => (
              <CartDetails key={product._id} product={product} />
            ))
          ) : (
            <p className="text-2xl text-red-500">No Products Found</p>
          )}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
