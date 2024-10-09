import React from "react";
import { CreditCard, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearCart } from "@/redux/feature/cartSlice";
import Link from "next/link";

const OrderSummary = () => {
  const { selectedItems, totalPrice, taxRate, tax, grandTotal } =
    useAppSelector((store) => store.cart);

  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="lg:w-80 w-full h-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 space-y-8">
        <h1 className="text-3xl font-extrabold text-gray-800">Order Summary</h1>

        <div className="text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Selected Items:</span>
            <span>{selectedItems}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Tax ({taxRate * 100}%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 flex justify-between mt-4">
          <span>Grand Total:</span>
          <span>${grandTotal.toFixed(2)}</span>
        </h3>
      </div>

      <div className="px-6 pb-6">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClearCart();
          }}
          className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
        >
          <span>Clear Cart</span>
          <Trash2 className="inline" width={15} height={15} />
        </button>

        <Link href={'/checkout'}>
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <span>Proceed to Checkout</span>
          <CreditCard className="inline" width={15} height={15} />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
