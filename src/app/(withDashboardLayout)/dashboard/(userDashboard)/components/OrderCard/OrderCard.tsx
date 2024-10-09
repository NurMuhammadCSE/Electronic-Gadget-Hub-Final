// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import RatingForm from "../RatingForm/RatingForm";
// import OrderProductDetails from "../OrderProductDetails/OrderProductDetails";

// const OrderCard: React.FC<{ order: any }> = ({ order }) => {
//   const { status, products, createdAt } = order;
//   console.log(products);

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4">
//       <h2 className="text-lg font-semibold mb-2">Order #{order._id}</h2>
//       <p className="text-sm text-gray-500 mb-4">
//         Placed on: {new Date(createdAt).toLocaleDateString()}
//       </p>

//       <div className="grid grid-cols-3 md:grid-cols-2 mb-4">
//         <h3 className="text-sm font-semibold mb-2">Products:</h3>
//           {products.map((product: any, idx: number) => (
//             // <li key={idx}>
//             //   {product.product} - ${product.quantity}
//             // </li>
//             <OrderProductDetails key={idx} product={product} />
//           ))}
//       </div>

//       {status === "delivered" && (
//         <div className="mt-4">
//           <h3 className="text-sm font-semibold mb-2">
//             Rate Delivered Products
//           </h3>
//           {products.map((product: any, idx: number) => (
//             <RatingForm key={idx} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderCard;


// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import RatingForm from "../RatingForm/RatingForm";
// import OrderProductDetails from "../OrderProductDetails/OrderProductDetails";

// const OrderCard: React.FC<{ order: any }> = ({ order }) => {
//   const { status, products, createdAt } = order;

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//       <h2 className="text-lg font-semibold mb-4">Order #{order._id}</h2>
//       <p className="text-sm text-gray-500 mb-6">
//         Placed on: {new Date(createdAt).toLocaleDateString()}
//       </p>

//       {/* Product Grid */}
//       <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-4">
//         {products.map((product: any, idx: number) => (
//           <OrderProductDetails key={idx} product={product} />
//         ))}
//       </div>

//       {/* Rating Section (Visible if order is delivered) */}
//       {status === "delivered" && (
//         <div className="mt-6">
//           <h3 className="text-md font-semibold mb-4">
//             Rate Delivered Products
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {products.map((product: any, idx: number) => (
//               <RatingForm key={idx} product={product} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderCard;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import RatingForm from "../RatingForm/RatingForm";
import OrderProductDetails from "../OrderProductDetails/OrderProductDetails";

const OrderCard: React.FC<{ order: any }> = ({ order }) => {
  const { status, products, createdAt } = order;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Order #{order._id}</h2>
      <p className="text-sm text-gray-500 mb-6">
        Placed on: {new Date(createdAt).toLocaleDateString()}
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: any, idx: number) => (
          <OrderProductDetails key={idx} product={product} />
        ))}
      </div>

      {/* Rating Section (Visible if order is delivered) */}
      {status === "delivered" && (
        <div className="mt-6">
          <h3 className="text-md font-semibold mb-4">Rate Delivered Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product: any, idx: number) => (
              <RatingForm key={idx} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
