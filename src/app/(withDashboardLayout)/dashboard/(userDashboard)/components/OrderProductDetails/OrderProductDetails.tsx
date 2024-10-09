/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingPage from "@/app/loading";
import { useGetSingleProductQuery } from "@/redux/api/productApi";

const OrderProductDetails: React.FC<{ product: any }> = ({ product }) => {
  const { data: productData, isLoading, error } = useGetSingleProductQuery(product.product);

  if (isLoading) return <LoadingPage />;
  if (error) return <p>Error loading product details</p>;

  const { name, price, imageUrl } = productData?.data || {};
  const { quantity } = product;

  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-100 to-white shadow-lg rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105 duration-300">
      {/* Product Image */}
      <div className="w-full md:w-1/3 h-40 md:h-48 overflow-hidden rounded-lg shadow-md">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-2/3 mt-4 md:mt-0 md:pl-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {name}
        </h2>

        {/* Quantity and Price */}
        <div className="flex justify-between text-lg font-medium text-gray-600 mb-4">
          <p>
            Quantity:{" "}
            <span className="text-gray-900 font-bold">{quantity}</span>
          </p>
          <p>
            Price:{" "}
            <span className="text-blue-600 font-bold">
              ${price?.toFixed(2)}
            </span>
          </p>
        </div>

        {/* Total Price (Quantity * Price) */}
        <div className="border-t border-gray-200 pt-2">
          <p className="text-lg font-bold text-gray-900">
            Total:{" "}
            <span className="text-green-600">
              ${(quantity * price).toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderProductDetails;
