import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; // Adjust this to your store location
import { useCreateReviewMutation } from "@/redux/api/reviewApi";
import { toast } from "sonner";

interface ReviewFormProps {
  productId: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ productId }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState<number>(5); // Default rating
  const { user } = useSelector((state: RootState) => state.user);

  // useCreateReviewMutation hook to submit the review
  const [createReview, { isLoading }] = useCreateReviewMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in to submit a review.");
      return;
    }

    try {
      const orderData = {
        review: reviewText,
        rating,
        // userId: user.userId, // Assuming `user` has an `_id` field
        productId,
      };

      // Call the createReview mutation
      await createReview({ orderData, productId }).unwrap();
      toast.success("Review submitted successfully!");

      // Reset form fields after submission
      setReviewText("");
      setRating(5);
    } catch (error) {
      console.error("Failed to submit review:", error);
      toast.error("Failed to submit review.");
    }
  };

  return (
    <div className="my-6">
      <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Write your review here"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <div className="mb-4">
          <label className="block mb-2">Rating:</label>
          <select
            className="border p-2"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>
                {star} Stars
              </option>
            ))}
          </select>
        </div>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          type="submit"
          disabled={isLoading} // Disable button while submitting
        >
          {isLoading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
