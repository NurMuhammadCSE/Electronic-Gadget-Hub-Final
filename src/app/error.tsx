/* eslint-disable react/no-unescaped-entities */
"use client";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Error Message Container */}
      <div className="bg-red-500 text-white p-8 rounded-2xl shadow-xl w-full sm:w-3/4 lg:w-1/2 text-center">
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong!</h1>
        <p className="text-lg md:text-xl mb-2">
          We encountered an unexpected error. Don't worry, it's being fixed.
        </p>
        {/* Dynamic Error Message */}
        <p className="text-lg bg-red-600 rounded-md p-4 mt-4">
          {error.message}
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 bg-white text-red-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300 shadow-md"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
