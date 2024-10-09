import { baseApi } from "./baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: ({ orderData, productId }) => ({
        method: "POST",
        url: `/product/${productId}/review`,
        body: orderData,
      }),
      invalidatesTags: ["Reviews"],
    }),
    getReviewsByProductId: builder.query({
      query: (productId) => ({
        method: "GET",
        url: `/product/${productId}/review`,
      }),
      providesTags: ["Reviews"],
    }),
    getAllReviews: builder.query({
      query: () => ({
        method: "GET",
        url: `/product/reviews`, // Endpoint to get all reviews
      }),
      providesTags: ["Reviews"],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetReviewsByProductIdQuery,
  useGetAllReviewsQuery,
} = reviewApi;
