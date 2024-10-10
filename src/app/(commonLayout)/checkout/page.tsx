/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearCart } from "@/redux/feature/cartSlice";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
// import { createOrder } from "@/redux/feature/orderSlice";
import { useCreteOrderMutation } from "@/redux/api/orderApi";
import dynamic from "next/dynamic";

const CheckoutPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { products, totalPrice } = useAppSelector((state) => state.cart);
  const [createOrder, { isError, isLoading }] = useCreteOrderMutation();
  const { user, token } = useAppSelector((state) => state.user);
  const deliveryCharge = 15;
  const grandTotal = totalPrice + deliveryCharge;

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleProceedCheckout = async () => {
    const order = {
      user: user.userId,
      products: products.map((product: any) => ({
        product: product._id, // Make sure the product object has _id
        quantity: product.quantity,
        // name:product.name,
        // price:product.price
      })),
      totalAmount: grandTotal,
      status: "Pending",
      paymentMethod: "Cash On Delivery",
    };
    // console.log(order);
    // dispatch(createOrder(order));
    await createOrder({ order, token });
    toast.success("Order placed successfully!");
    handleClearCart();
    router.push("/dashboard/my-orders");
  };

  return (
    <div className="container mx-auto p-4 lg:p-8 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            {products.map((item: any) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-2 border-b"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-lg font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="text-lg font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
            <div className="flex items-center">
              <input
                type="radio"
                id="cod"
                name="payment"
                defaultChecked
                className="mr-2"
              />
              <label htmlFor="cod" className="text-lg">
                Cash On Delivery
              </label>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-2xl font-semibold mb-4">Total</h2>
            <div className="flex justify-between items-center">
              <p className="text-lg">Subtotal:</p>
              <p className="text-lg font-semibold">${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-lg">Delivery Charge:</p>
              <p className="text-lg font-semibold">
                ${deliveryCharge.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between items-center mt-4 border-t pt-4">
              <p className="text-xl font-bold">Grand Total:</p>
              <p className="text-xl font-bold">${grandTotal.toFixed(2)}</p>
            </div>
          </div>

          <button
            onClick={handleProceedCheckout}
            className="w-full bg-green-600 text-white text-lg font-semibold py-3 rounded-md mt-6"
          >
            Proceed Checkout
          </button>

          <button
            onClick={handleClearCart}
            className="w-full bg-red-500 text-white text-lg font-semibold py-3 rounded-md mt-3 flex items-center justify-center"
          >
            <Trash2 className="mr-2" />
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(CheckoutPage), { ssr: false });
