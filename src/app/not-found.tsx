/* eslint-disable react/no-unescaped-entities */
// pages/404.tsx
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <div className="text-6xl font-bold text-gray-800 mb-4">404</div>
      <div className="text-3xl font-semibold text-gray-700 mb-4">
        Oops! Page Not Found
      </div>
      <p className="text-gray-600 mb-8">
        It looks like the page you're looking for doesn't exist.
        <br />
        Maybe you've mistyped the URL or the page has been moved.
      </p>
      <Image
        src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=740&t=st=1725913371~exp=1725913971~hmac=e6fbe2cbf0237ad550bd7ab916b6ba965c40c597b44843560d3b582cbdb7b5c3"
        alt="404 Illustration"
        width={500}
        height={500}
        // layout="fill"
        objectFit="contain"
        quality={100}
      />
      <Link href="/">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Go Back to Homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
