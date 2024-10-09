import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/product/products",
      }),
      providesTags: ["Products"],
    }),
    getSingleProduct: builder.query({
      query: (productId) => ({
        method: "GET",
        url: `/product/product/${productId}`,
      }),
    }),
    deleteProduct: builder.mutation({
      query: ({ productId, token }) => ({
        method: "DELETE",
        url: `/product/${productId}`,
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: ({ productId, token, updatedProduct }) => {
        // console.log(updatedProduct)
        return {
          method: "PATCH",
          url: `/product/${productId}`,
          body: updatedProduct,
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        };
      },
      invalidatesTags: ["Products"],
    }),
    // createProduct: builder.mutation({
    //   query: ({ token , productData}) => ({
    //     method: "PATCH",
    //     url: `/product/create`,
    //     body: productData,
    //     headers: {
    //       Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    //     },
    //   }),
    //   invalidatesTags: ["Products"],
    // }),

    createProduct: builder.mutation({
      query: ({ token, productData }) => {
        // Log the token and productData
        console.log("Token:", token);
        console.log("Product Data:", productData);

        return {
          method: "POST", // Use POST for creating a new product
          url: "/product/create",
          body: productData,
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        };
      },
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useCreateProductMutation,
} = productApi;
