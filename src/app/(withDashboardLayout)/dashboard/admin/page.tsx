/* eslint-disable @typescript-eslint/no-explicit-any */
// // "use client";

// // import LoadingPage from "@/app/loading";
// // /* eslint-disable @typescript-eslint/no-explicit-any */
// // import { useGetAllOrdersQuery } from "@/redux/api/orderApi";
// // import { useGetProductsQuery } from "@/redux/api/productApi";
// // import { useAppSelector } from "@/redux/hooks";
// // import React from "react";
// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   Legend,
// //   ResponsiveContainer,
// // } from "recharts";

// // const AdminDashboard = () => {
// //   // Fetch products and orders using the API hooks
// //   const { token } = useAppSelector((state) => state.user);

// //   const { data: products = {}, isLoading: loadingProducts } =
// //     useGetProductsQuery(undefined);
// //   const { data: orders = {}, isLoading: loadingOrders } =
// //     useGetAllOrdersQuery(token);

// //   // Loading states
// //   if (loadingProducts || loadingOrders) {
// //     return (
// //       <div>
// //         <LoadingPage></LoadingPage>
// //       </div>
// //     );
// //   }

// //   // Prepare data for the charts
// //   const productData =
// //     products?.data?.map((product: any) => ({
// //       name: product.name,
// //       price: product.price,
// //     })) || [];

// //   console.log(orders?.data);

// //   const orderData =
// //     orders?.data?.map((order: any) => ({
// //       date: new Date(order.createdAt).toLocaleDateString(),
// //       total: order.totalAmount,
// //     })) || [];

// //   console.log(orderData);

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
// //         Admin Dashboard
// //       </h1>

// //       {/* Cards for Product and Order Counts */}
// //       <div className="flex justify-around mb-8">
// //         <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-6 m-2 text-center border border-gray-300 transition-transform transform hover:scale-105">
// //           <h2 className="text-xl font-semibold text-white">Total Products</h2>
// //           <p className="text-3xl font-bold text-white">
// //             {products?.data?.length || 0}
// //           </p>
// //         </div>
// //         <div className="bg-gradient-to-r from-green-400 to-blue-500 shadow-lg rounded-lg p-6 m-2 text-center border border-gray-300 transition-transform transform hover:scale-105">
// //           <h2 className="text-xl font-semibold text-white">Total Orders</h2>
// //           <p className="text-3xl font-bold text-white">
// //             {orders?.data?.length || 0}
// //           </p>
// //         </div>
// //       </div>

// //       {/* Products Overview Chart */}
// //       <div className="mb-8">
// //         <h2 className="text-2xl font-semibold mb-4">Products Overview</h2>
// //         <ResponsiveContainer width="100%" height={300}>
// //           <LineChart
// //             data={productData}
// //             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
// //           >
// //             <CartesianGrid strokeDasharray="3 3" />
// //             <XAxis dataKey="name" />
// //             <YAxis />
// //             <Tooltip />
// //             <Legend />
// //             <Line
// //               type="monotone"
// //               dataKey="price"
// //               stroke="#8884d8"
// //               strokeWidth={2}
// //             />
// //           </LineChart>
// //         </ResponsiveContainer>
// //       </div>

// //       {/* Orders Overview Chart */}
// //       <div>
// //         <h2 className="text-2xl font-semibold mb-4">Orders Overview</h2>
// //         <ResponsiveContainer width="100%" height={300}>
// //           <LineChart
// //             data={orderData}
// //             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
// //           >
// //             <CartesianGrid strokeDasharray="3 3" />
// //             <XAxis dataKey="date" />
// //             <YAxis />
// //             <Tooltip />
// //             <Legend />
// //             <Line
// //               type="monotone"
// //               dataKey="total"
// //               stroke="#82ca9d"
// //               strokeWidth={2}
// //             />
// //           </LineChart>
// //         </ResponsiveContainer>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;

// "use client";

// import LoadingPage from "@/app/loading";
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useGetAllOrdersQuery } from "@/redux/api/orderApi";
// import { useGetProductsQuery } from "@/redux/api/productApi";
// import { useAppSelector } from "@/redux/hooks";
// import React, { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   Cell,
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

//   const { data: products = { data: [] }, isLoading: loadingProducts } =
//     useGetProductsQuery(undefined);
//   const { data: orders = { data: [] }, isLoading: loadingOrders } =
//     useGetAllOrdersQuery(token);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Loading states
//   if (loadingProducts || loadingOrders) {
//     return (
//       <div>
//         <LoadingPage></LoadingPage>
//       </div>
//     );
//   }

//   // Prepare data for the charts
//   const productData = products.data.map((product: any) => ({
//     name: product.name,
//     price: product.price,
//   }));

//   const orderData = orders.data.map((order: any) => ({
//     name: new Date(order.createdAt).toLocaleDateString(),
//     total: order.totalAmount,
//   }));

//   // Handle click event to show active item in the bar chart
//   const handleClick = (data: any, index: any) => {
//     setActiveIndex(index);
//   };

//   // Prepare order totals grouped by date
//   const aggregatedOrders = orderData.reduce((acc: any, order: any) => {
//     // console.log(order);
//     const { name, total } = order;
//     if (!acc[name]) {
//       acc[name] = { name, total: 0 };
//     }
//     acc[name].total += total;
//     return acc;
//   }, {});

//   const finalOrderData = Object.values(aggregatedOrders);

//   return (
//     <div className="">
//       {/* <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
//         Admin Dashboard
//       </h1> */}

//       {/* Cards for Product and Order Counts */}
//       <div className="flex justify-around mb-8">
//         <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-6 m-2 text-center border border-gray-300 transition-transform transform hover:scale-105">
//           <h2 className="text-xl font-semibold text-white">Total Products</h2>
//           <p className="text-3xl font-bold text-white">
//             {products.data.length}
//           </p>
//         </div>
//         <div className="bg-gradient-to-r from-green-400 to-blue-500 shadow-lg rounded-lg p-6 m-2 text-center border border-gray-300 transition-transform transform hover:scale-105">
//           <h2 className="text-xl font-semibold text-white">Total Orders</h2>
//           <p className="text-3xl font-bold text-white">{orders.data.length}</p>
//         </div>
//       </div>

//       {/* Products Overview Chart */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Products Overview</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart width={150} height={40} data={productData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="price">
//               {productData.map((entry: any, index: any) => (
//                 <Cell cursor="pointer" fill="#8884d8" key={`cell-${index}`} />
//               ))}
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Orders Overview Bar Chart */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">Orders Overview</h2>
//         <p>Click each bar to see details</p>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart
//             data={finalOrderData}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="total" onClick={handleClick}>
//               {finalOrderData.map((entry, index) => (
//                 <Cell
//                   cursor="pointer"
//                   fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
//                   key={`cell-${index}`}
//                 />
//               ))}
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//         {/* <p className="content">{`Total Sales on "${finalOrderData[activeIndex]?.name}": ${finalOrderData[activeIndex]?.total}`}</p> */}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// ("use client");

// import LoadingPage from "@/app/loading";
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useGetAllOrdersQuery } from "@/redux/api/orderApi";
// import { useGetProductsQuery } from "@/redux/api/productApi";
// import { useAppSelector } from "@/redux/hooks";
// import React from "react";

// const AdminDashboard = () => {
//   // Fetch products and orders using the API hooks
//   const { token } = useAppSelector((state) => state.user);
//   const { data: products = { data: [] }, isLoading: loadingProducts } =
//     useGetProductsQuery(undefined);
//   const { data: orders = { data: [] }, isLoading: loadingOrders } =
//     useGetAllOrdersQuery(token);

//   // Loading states
//   if (loadingProducts || loadingOrders) {
//     return <LoadingPage />;
//   }

//   console.log(orders);

//   // Combine order and product data for recent sales
//   const recentSales = orders?.data?.map((order: any) => ({
//     orderId: order._id,
//     date: new Date(order.createdAt).toLocaleDateString(),
//     totalAmount: order.totalAmount,
//     products: order.products.map((product: any) => {
//       const productDetails = products.data.find(
//         (p: any) => p._id === product.product
//       );
//       console.log(productDetails);
//       return {
//         name: productDetails?.name || "Unknown",
//         quantity: product.quantity,
//         price: productDetails?.price || 0,
//       };
//     }),
//   }));

//   console.log(recentSales);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//         Admin Dashboard
//       </h1>

//       {/* Recent Product Sales Table */}
//       <div className="mb-10">
//         <h2 className="text-2xl font-semibold mb-4">Recent Product Sales</h2>
//         <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="px-4 py-2 text-left">Order ID</th>
//               <th className="px-4 py-2 text-left">Date</th>
//               <th className="px-4 py-2 text-left">Product Name</th>
//               <th className="px-4 py-2 text-left">Quantity</th>
//               <th className="px-4 py-2 text-left">Price</th>
//               <th className="px-4 py-2 text-left">Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {recentSales.map((sale: any, index: number) =>
//               sale.products.map((product: any, pIndex: number) => (
//                 <tr key={`${index}-${pIndex}`} className="border-t">
//                   {pIndex === 0 && (
//                     <>
//                       <td rowSpan={sale.products.length} className="px-4 py-2">
//                         {sale.orderId}
//                       </td>
//                       <td rowSpan={sale.products.length} className="px-4 py-2">
//                         {sale.date}
//                       </td>
//                     </>
//                   )}
//                   <td className="px-4 py-2">{product.name}</td>
//                   <td className="px-4 py-2">{product.quantity}</td>
//                   <td className="px-4 py-2">${product.price.toFixed(2)}</td>
//                   {pIndex === 0 && (
//                     <td rowSpan={sale.products.length} className="px-4 py-2">
//                       ${sale.totalAmount.toFixed(2)}
//                     </td>
//                   )}
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

//! 2nd Time Admin Dashboard
// "use client";
// import LoadingPage from "@/app/loading";
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useGetAllOrdersQuery } from "@/redux/api/orderApi";
// import { useGetProductsQuery } from "@/redux/api/productApi";
// import { useGetAllReviewsQuery } from "@/redux/api/reviewApi";
// import { useAppSelector } from "@/redux/hooks";
// import React, { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   Cell,
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

//   const { data: products = { data: [] }, isLoading: loadingProducts } =
//     useGetProductsQuery(undefined);
//   const { data: orders = { data: [] }, isLoading: loadingOrders } =
//     useGetAllOrdersQuery(token);
//     const { data: reviews } = useGetAllReviewsQuery(undefined);

//   const [activeIndex, setActiveIndex] = useState(0);

//   // Loading states
//   if (loadingProducts || loadingOrders) {
//     return (
//       <div>
//         <LoadingPage></LoadingPage>
//       </div>
//     );
//   }

//   // Prepare data for the charts
//   const productData = products.data.map((product: any) => ({
//     name: product.name,
//     price: product.price,
//   }));

//   const orderData = orders.data.map((order: any) => ({
//     name: new Date(order.createdAt).toLocaleDateString(),
//     total: order.totalAmount,
//     // product: order.product?.name || "Unknown Product", // Assuming orders contain a product field
//     products: order.products.map((product: any) => {
//       const productDetails = products.data.find(
//         (p: any) => p._id === product.product
//       );
//       // console.log(productDetails);
//       return {
//         name: productDetails?.name || "Unknown",
//         quantity: product.quantity,
//         price: productDetails?.price || 0,
//       };
//     }),
//     status: order.status || "Pending", // Assuming orders contain a status field
//   }));

//   // Handle click event to show active item in the bar chart
//   const handleClick = (data: any, index: any) => {
//     setActiveIndex(index);
//   };

//   // Prepare order totals grouped by date
//   const aggregatedOrders = orderData.reduce((acc: any, order: any) => {
//     const { name, total } = order;
//     if (!acc[name]) {
//       acc[name] = { name, total: 0 };
//     }
//     acc[name].total += total;
//     return acc;
//   }, {});

//   const finalOrderData = Object.values(aggregatedOrders);

//   // const recentSales = orders?.data?.map((order: any) => ({
//   //   orderId: order._id,
//   //   date: new Date(order.createdAt).toLocaleDateString(),
//   //   totalAmount: order.totalAmount,
//   //   products: order.products.map((product: any) => {
//   //     const productDetails = products.data.find(
//   //       (p: any) => p._id === product.product
//   //     );
//   //     // console.log(productDetails);
//   //     return {
//   //       name: productDetails?.name || "Unknown",
//   //       quantity: product.quantity,
//   //       price: productDetails?.price || 0,
//   //     };
//   //   }),
//   // }));

//   // const today = new Date().toLocaleDateString(); // Get today's date in the same format as the orders

//   // const recentSales = orders?.data
//   //   ?.filter(
//   //     (order: any) => new Date(order.createdAt).toLocaleDateString() === today
//   //   ) // Filter today's orders
//   //   ?.map((order: any) => ({
//   //     orderId: order._id,
//   //     date: new Date(order.createdAt).toLocaleDateString(),
//   //     totalAmount: order.totalAmount,
//   //     products: order.products.map((product: any) => {
//   //       const productDetails = products.data.find(
//   //         (p: any) => p._id === product.product
//   //       );
//   //       return {
//   //         name: productDetails?.name || "Unknown", // Fallback if product not found
//   //         quantity: product.quantity,
//   //         price: productDetails?.price || 0,
//   //       };
//   //     }),
//   //   }));

//   // Get today's date in the same format as the orders
//   const today = new Date().toLocaleDateString();
//   const yesterday = new Date();
//   yesterday.setDate(yesterday.getDate() - 1); // Set to yesterday
//   const previousDate = yesterday.toLocaleDateString(); // Format for comparison

//   // Check for today's sales
//   let recentSales = orders?.data
//     ?.filter(
//       (order: any) => new Date(order.createdAt).toLocaleDateString() === today
//     )
//     ?.map((order: any) => ({
//       orderId: order._id,
//       date: new Date(order.createdAt).toLocaleDateString(),
//       totalAmount: order.totalAmount,
//       products: order.products.map((product: any) => {
//         const productDetails = products.data.find(
//           (p: any) => p._id === product.product
//         );
//         return {
//           name: productDetails?.name || "Unknown",
//           quantity: product.quantity,
//           price: productDetails?.price || 0,
//         };
//       }),
//     }));

//   // If no sales today, check for yesterday's sales
//   if (!recentSales || recentSales.length === 0) {
//     recentSales = orders?.data
//       ?.filter(
//         (order: any) =>
//           new Date(order.createdAt).toLocaleDateString() === previousDate
//       )
//       ?.map((order: any) => ({
//         orderId: order._id,
//         date: new Date(order.createdAt).toLocaleDateString(),
//         totalAmount: order.totalAmount,
//         products: order.products.map((product: any) => {
//           const productDetails = products.data.find(
//             (p: any) => p._id === product.product
//           );
//           return {
//             name: productDetails?.name || "Unknown",
//             quantity: product.quantity,
//             price: productDetails?.price || 0,
//           };
//         }),
//       }));
//   }

//   return (
//     <div className="p-6">
//       {/* Cards for Product and Order Counts */}
//       <div className="flex justify-around mb-8">
//         <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-6 m-2 text-center border border-gray-300 transition-transform transform hover:scale-105">
//           <h2 className="text-xl font-semibold text-white">Total Products</h2>
//           <p className="text-3xl font-bold text-white">
//             {products.data.length}
//           </p>
//         </div>
//         <div className="bg-gradient-to-r from-green-400 to-blue-500 shadow-lg rounded-lg p-6 m-2 text-center border border-gray-300 transition-transform transform hover:scale-105">
//           <h2 className="text-xl font-semibold text-white">Total Orders</h2>
//           <p className="text-3xl font-bold text-white">{orders.data.length}</p>
//         </div>
//         <div className="bg-gradient-to-r from-green-400 to-blue-500 shadow-lg rounded-lg p-6 m-2 text-center border border-gray-300 transition-transform transform hover:scale-105">
//           <h2 className="text-xl font-semibold text-white">Total Reviews</h2>
//           <p className="text-3xl font-bold text-white">{reviews.data.length}</p>
//         </div>
//       </div>

//       {/* Products Overview Chart */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Products Overview</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart width={150} height={40} data={productData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="price">
//               {productData.map((entry: any, index: any) => (
//                 <Cell cursor="pointer" fill="#8884d8" key={`cell-${index}`} />
//               ))}
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Orders Overview Bar Chart */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Orders Overview</h2>
//         {/* <p>Click each bar to see details</p> */}
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart
//             data={finalOrderData}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="total" onClick={handleClick}>
//               {finalOrderData.map((entry, index) => (
//                 <Cell
//                   cursor="pointer"
//                   fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
//                   key={`cell-${index}`}
//                 />
//               ))}
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Recent Sales Table */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Recent Sales</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
//             {" "}
//             <thead className="bg-gray-200">
//               {" "}
//               <tr>
//                 {" "}
//                 <th className="px-4 py-2 text-left">Order ID</th>{" "}
//                 <th className="px-4 py-2 text-left">Date</th>{" "}
//                 <th className="px-4 py-2 text-left">Product Name</th>{" "}
//                 <th className="px-4 py-2 text-left">Quantity</th>{" "}
//                 <th className="px-4 py-2 text-left">Price</th>{" "}
//                 <th className="px-4 py-2 text-left">Total</th>{" "}
//               </tr>{" "}
//             </thead>
//             <tbody>
//               {" "}
//               {recentSales.map((sale: any, index: number) =>
//                 sale.products.map((product: any, pIndex: number) => (
//                   <tr key={`${index}-${pIndex}`} className="border-t">
//                     {pIndex === 0 && (
//                       <>
//                         <td
//                           rowSpan={sale.products.length}
//                           className="px-4 py-2"
//                         >
//                           {sale.orderId}
//                         </td>
//                         <td
//                           rowSpan={sale.products.length}
//                           className="px-4 py-2"
//                         >
//                           {sale.date}
//                         </td>
//                       </>
//                     )}
//                     <td className="px-4 py-2">{product.name}</td>
//                     <td className="px-4 py-2">{product.quantity}</td>
//                     <td className="px-4 py-2">${product.price.toFixed(2)}</td>
//                     {pIndex === 0 && (
//                       <td rowSpan={sale.products.length} className="px-4 py-2">
//                         ${sale.totalAmount.toFixed(2)}
//                       </td>
//                     )}
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


"use client";
import LoadingPage from "@/app/loading";
import { useGetAllOrdersQuery } from "@/redux/api/orderApi";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { useGetAllReviewsQuery } from "@/redux/api/reviewApi";
// import { useAppSelector } from "@/redux/hooks";
import { getFromLocalStorage } from "@/utils/local-storage";
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
  // const { token } = useAppSelector((state) => state.user);
  const token = getFromLocalStorage("accessToken");

  const { data: products = { data: [] }, isLoading: loadingProducts } = useGetProductsQuery(undefined);
  const { data: orders = { data: [] }, isLoading: loadingOrders } = useGetAllOrdersQuery(token);
  const { data: reviews } = useGetAllReviewsQuery(undefined);

  const [activeIndex, setActiveIndex] = useState(0);

  if (loadingProducts || loadingOrders) {
    return <LoadingPage />;
  }

  const productData = products.data.map((product: any) => ({
    name: product.name,
    price: product.price,
  }));

  const orderData = orders.data.map((order: any) => ({
    name: new Date(order.createdAt).toLocaleDateString(),
    total: order.totalAmount,
    products: order.products.map((product: any) => {
      const productDetails = products.data.find((p: any) => p._id === product.product);
      return {
        name: productDetails?.name || "Unknown",
        quantity: product.quantity,
        price: productDetails?.price || 0,
      };
    }),
    status: order.status || "Pending",
  }));

  const handleClick = (data: any, index: any) => {
    setActiveIndex(index);
  };

  const aggregatedOrders = orderData.reduce((acc: any, order: any) => {
    const { name, total } = order;
    if (!acc[name]) {
      acc[name] = { name, total: 0 };
    }
    acc[name].total += total;
    return acc;
  }, {});

  const finalOrderData = Object.values(aggregatedOrders);

  const today = new Date().toLocaleDateString();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const previousDate = yesterday.toLocaleDateString();

  let recentSales = orders?.data?.filter((order: any) => new Date(order.createdAt).toLocaleDateString() === today)
    ?.map((order: any) => ({
      orderId: order._id,
      date: new Date(order.createdAt).toLocaleDateString(),
      totalAmount: order.totalAmount,
      products: order.products.map((product: any) => {
        const productDetails = products.data.find((p: any) => p._id === product.product);
        return {
          name: productDetails?.name || "Unknown",
          quantity: product.quantity,
          price: productDetails?.price || 0,
        };
      }),
    }));

  if (!recentSales || recentSales.length === 0) {
    recentSales = orders?.data
      ?.filter((order: any) => new Date(order.createdAt).toLocaleDateString() === previousDate)
      ?.map((order: any) => ({
        orderId: order._id,
        date: new Date(order.createdAt).toLocaleDateString(),
        totalAmount: order.totalAmount,
        products: order.products.map((product: any) => {
          const productDetails = products.data.find((p: any) => p._id === product.product);
          return {
            name: productDetails?.name || "Unknown",
            quantity: product.quantity,
            price: productDetails?.price || 0,
          };
        }),
      }));
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Cards for Product, Order, Review Counts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md rounded-lg p-6">
          <h2 className="text-xl">Total Products</h2>
          <p className="text-3xl font-bold">{products.data.length}</p>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md rounded-lg p-6">
          <h2 className="text-xl">Total Orders</h2>
          <p className="text-3xl font-bold">{orders.data.length}</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-white shadow-md rounded-lg p-6">
          <h2 className="text-xl">Total Reviews</h2>
          <p className="text-3xl font-bold">{reviews.data.length}</p>
        </div>
      </div>

      {/* Products Overview Chart */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Products Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Orders Overview Chart */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Orders Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={finalOrderData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" onClick={handleClick}>
              {finalOrderData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === activeIndex ? "#82ca9d" : "#8884d8"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Sales Table */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Recent Sales</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {recentSales.map((sale: any, index: number) =>
                sale.products.map((product: any, pIndex: number) => (
                  <tr key={`${index}-${pIndex}`} className="border-t">
                    {pIndex === 0 && (
                      <>
                        <td rowSpan={sale.products.length} className="px-4 py-2">{sale.orderId}</td>
                        <td rowSpan={sale.products.length} className="px-4 py-2">{sale.date}</td>
                      </>
                    )}
                    <td className="px-4 py-2">{product.name}</td>
                    <td className="px-4 py-2">{product.quantity}</td>
                    <td className="px-4 py-2">${product.price.toFixed(2)}</td>
                    {pIndex === 0 && (
                      <td rowSpan={sale.products.length} className="px-4 py-2">${sale.totalAmount.toFixed(2)}</td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
