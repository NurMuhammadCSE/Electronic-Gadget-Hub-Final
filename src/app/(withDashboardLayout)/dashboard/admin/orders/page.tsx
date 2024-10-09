"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { toast } from "sonner";
import {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} from "@/redux/api/orderApi";
import { useAppSelector } from "@/redux/hooks";
import dynamic from "next/dynamic";
import LoadingPage from "@/app/loading";

const statusColors: { [key: string]: string } = {
  Pending: "bg-yellow-300 text-black",
  Delivered: "bg-green-300 text-black",
  Cancelled: "bg-red-300 text-white",
};

const OrdersManagement = () => {
  const { token } = useAppSelector((state) => state.user);
  const { data: ordersData, isLoading, error } = useGetAllOrdersQuery(token);
  const [updateOrder] = useUpdateOrderStatusMutation();

  // Order statuses
  const allStatus = ["Pending", "Delivered", "Cancelled"];

  const handleStatusUpdate = async (orderId: string, status: string) => {
    try {
      await updateOrder({ orderId, status, token }).unwrap();
      toast.success("Status Updated Successfully");
    } catch (error) {
      console.error("Failed to update status", error);
      toast.error("Failed to update status");
    }
  };

  if (isLoading) return <p>
    <LoadingPage></LoadingPage>
  </p>;
  if (error) return <p>Error loading orders</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Orders Management</h1>

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">
              Order ID
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Customer Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Order Date
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Total Amount
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {ordersData?.data?.map((order: any) => (
            <tr key={order._id}>
              <td className="border border-gray-300 px-4 py-2">{order._id}</td>
              <td className="border border-gray-300 px-4 py-2">
                {order.user.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${order.totalAmount.toFixed(2)}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <select
                  defaultValue={order.status}
                  onChange={(e) =>
                    handleStatusUpdate(order._id, e.target.value)
                  }
                  className={`w-full p-1 border border-gray-300 rounded ${
                    statusColors[order.status]
                  }`}
                >
                  {allStatus.map((status) => (
                    <option
                      key={status}
                      value={status}
                      className={statusColors[status]}
                    >
                      {status}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default dynamic(() => Promise.resolve(OrdersManagement), { ssr: false });
