/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const RatingForm: React.FC<{ product: any }> = ({ product }) => {
  const [rating, setRating] = useState<number>(5);
  const [reviewText, setReviewText] = useState("");

  const handleRatingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle rating submission logic
    console.log({ productId: product._id, rating, reviewText });
  };

  return (
    <form onSubmit={handleRatingSubmit} className="bg-gray-100 p-4 rounded-md">
      <h4 className="text-sm font-semibold mb-2">{product.name}</h4>
      <textarea
        className="w-full p-2 border rounded mb-2"
        placeholder="Leave a review"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <div className="flex items-center mb-2">
        <label className="mr-2">Rating:</label>
        <select
          className="border p-1 rounded"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[5, 4, 3, 2, 1].map((value) => (
            <option key={value} value={value}>
              {value} Stars
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Submit Review
      </button>
    </form>
  );
};

export default RatingForm;
