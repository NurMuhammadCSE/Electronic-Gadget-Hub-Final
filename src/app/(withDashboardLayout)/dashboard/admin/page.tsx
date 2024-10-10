// "use client";

// import LoadingPage from "@/app/loading";
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useGetAllOrdersQuery } from "@/redux/api/orderApi";
// import { useGetProductsQuery } from "@/redux/api/productApi";
// import { useAppSelector } from "@/redux/hooks";
// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const AdminDashboard = () => {
//   // Fetch products and orders using the API hooks
//   const { token } = useAppSelector((state) => state.user);

//   const { data: products = {}, isLoading: loadingProducts } =
//     useGetProductsQuery(undefined);
//   const { data: orders = {}, isLoading: loadingOrders } =
//     useGetAllOrdersQuery(token);

//   // Loading states
//   if (loadingProducts || loadingOrders) {
//     return (
//       <div>
//         <LoadingPage></LoadingPage>
//       </div>
//     );
//   }

//   // Prepare data for the charts
//   const productData =
//     products?.data?.map((product: any) => ({
//       name: product.name,
//       price: product.price,
//     })) || [];

//   console.log(orders?.data);

//   const orderData =
//     orders?.data?.map((order: any) => ({
//       date: new Date(order.createdAt).toLocaleDateString(),
//       total: order.totalAmount,
//     })) || [];

//   console.log(orderData);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
//         Admin Dashboard
//       </h1>

//       {/* Cards for Product and Order Counts */}
//       <div className="flex justify-around mb-8">
//         <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-6 m-2 text-center border border-gray-300 transition-transform transform hover:scale-105">
//           <h2 className="text-xl font-semibold text-white">Total Products</h2>
//           <p className="text-3xl font-bold text-white">
//             {products?.data?.length || 0}
//           </p>
//         </div>
//         <div className="bg-gradient-to-r from-green-400 to-blue-500 shadow-lg rounded-lg p-6 m-2 text-center border border-gray-300 transition-transform transform hover:scale-105">
//           <h2 className="text-xl font-semibold text-white">Total Orders</h2>
//           <p className="text-3xl font-bold text-white">
//             {orders?.data?.length || 0}
//           </p>
//         </div>
//       </div>

//       {/* Products Overview Chart */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Products Overview</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart
//             data={productData}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line
//               type="monotone"
//               dataKey="price"
//               stroke="#8884d8"
//               strokeWidth={2}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Orders Overview Chart */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">Orders Overview</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart
//             data={orderData}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line
//               type="monotone"
//               dataKey="total"
//               stroke="#82ca9d"
//               strokeWidth={2}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

"use client";

import LoadingPage from "@/app/loading";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllOrdersQuery } from "@/redux/api/orderApi";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminDashboard = () => {
  // Fetch products and orders using the API hooks
  const { token } = useAppSelector((state) => state.user);

  const { data: products = { data: [] }, isLoading: loadingProducts } =
    useGetProductsQuery(undefined);
  const { data: orders = { data: [] }, isLoading: loadingOrders } =
    useGetAllOrdersQuery(token);
  const [activeIndex, setActiveIndex] = useState(0);

  // Loading states
  if (loadingProducts || loadingOrders) {
    return <div><LoadingPage></LoadingPage></div>;
  }

  // Prepare data for the charts
  const productData = products.data.map((product: any) => ({
    name: product.name,
    price: product.price,
  }));

  const orderData = orders.data.map((order: any) => ({
    name: new Date(order.createdAt).toLocaleDateString(),
    total: order.totalAmount,
  }));

  // Handle click event to show active item in the bar chart
  const handleClick = (data: any, index: any) => {
    setActiveIndex(index);
  };

  // Prepare order totals grouped by date
  const aggregatedOrders = orderData.reduce((acc: any, order: any) => {
    // console.log(order);
    const { name, total } = order;
    if (!acc[name]) {
      acc[name] = { name, total: 0 };
    }
    acc[name].total += total;
    return acc;
  }, {});

  const finalOrderData = Object.values(aggregatedOrders);

  return (
    <div className="">
      {/* <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
        Admin Dashboard
      </h1> */}

      {/* Cards for Product and Order Counts */}
      <div className="flex justify-around mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-6 m-2 text-center border border-gray-300 transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-white">Total Products</h2>
          <p className="text-3xl font-bold text-white">
            {products.data.length}
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 shadow-lg rounded-lg p-6 m-2 text-center border border-gray-300 transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-white">Total Orders</h2>
          <p className="text-3xl font-bold text-white">{orders.data.length}</p>
        </div>
      </div>

      {/* Products Overview Chart */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Products Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart width={150} height={40} data={productData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price">
              {productData.map((entry: any, index: any) => (
                <Cell cursor="pointer" fill="#8884d8" key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Orders Overview Bar Chart */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Orders Overview</h2>
        <p>Click each bar to see details</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={finalOrderData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" onClick={handleClick}>
              {finalOrderData.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        {/* <p className="content">{`Total Sales on "${finalOrderData[activeIndex]?.name}": ${finalOrderData[activeIndex]?.total}`}</p> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
