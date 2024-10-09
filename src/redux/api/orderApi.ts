import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    creteOrder: builder.mutation({
      query: ({ order, token }) => {
        // console.log(order, token);
        return {
          method: "POST",
          url: `/order/create`,
          body: order,
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        };
      },
    }),
    getUserOrders: builder.query({
      query: (token) => ({
        method: "GET",
        url: "/order/user-orders",
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }),
    }),
    getAllOrders: builder.query({
      query: (token) => ({
        method: "GET",
        url: "/order/all-orders",
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }),
      providesTags: ["Orders"],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ status, token, orderId }) => {
        console.log(orderId, status, token); // Debug log to check values
        return {
          method: "PATCH",
          url: `/order/${orderId}`,
          body: { status }, // Send status as an object
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["Orders"], // Invalidate cache for Orders
    }),
    
  }),
});

export const {
  useCreteOrderMutation,
  useGetUserOrdersQuery,
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} = productApi;
