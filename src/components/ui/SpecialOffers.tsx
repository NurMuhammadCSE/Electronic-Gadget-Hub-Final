/* eslint-disable react-hooks/exhaustive-deps */
// components/SpecialOffers.tsx
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Offer {
  id: number;
  product: string;
  discount: string;
  imageUrl: string;
  expiresIn: number; // Time in seconds until the offer expires
}

const SpecialOffers: React.FC = () => {
  // Example offers data
  const offers: Offer[] = [
    {
      id: 1,
      product: "Smart TV 4K",
      discount: "20% Off",
      imageUrl: "https://tinyurl.com/248ufehm",
      expiresIn: 7200, // 2 hours in seconds
    },
    {
      id: 2,
      product: "Wireless Earbuds",
      discount: "15% Off",
      imageUrl: "https://tinyurl.com/5a8vf62a",
      expiresIn: 10800, // 3 hours in seconds
    },
    {
      id: 3,
      product: "Energy-efficient Fridge",
      discount: "25% Off",
      imageUrl: "https://tinyurl.com/muh778t4",
      expiresIn: 5400, // 1.5 hours in seconds
    },
  ];

  // Initialize timeLeft for each offer at the time of state declaration
  const [timeLeft, setTimeLeft] = useState<{ [key: number]: number }>(() => {
    return offers.reduce((acc, offer) => {
      acc[offer.id] = offer.expiresIn;
      return acc;
    }, {} as { [key: number]: number });
  });

  // Countdown Timer Hook
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimes) => {
        const updatedTimes = { ...prevTimes };
        offers.forEach((offer) => {
          if (updatedTimes[offer.id] > 0) {
            updatedTimes[offer.id] -= 1;
          }
        });
        return updatedTimes;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert seconds to HH:MM:SS format
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section className="my-12">
      <h2 className="text-4xl font-bold text-center mb-10">
        Special Offers & Discounts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="p-6 bg-white-100 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-lg relative"
          >
            <Image
              src={offer.imageUrl}
              alt={offer.product}
              className="w-full h-48 object-cover mb-4 rounded-lg"
              height={500}
              width={500}
            />
            <div className="text-center">
              <h3 className="text-2xl font-bold">{offer.product}</h3>
              <p className="text-xl text-red-600 font-semibold mt-2">
                {offer.discount}
              </p>
            </div>
            <div className="flex flex-col items-center mt-6">
              <p className="text-gray-700 mb-2">Hurry! Offer ends in:</p>
              <div className="text-2xl font-bold text-white bg-red-600 px-4 py-2 rounded-md">
                {formatTime(timeLeft[offer.id])}
              </div>
              <Link
                href="/product"
                className="bg-[#133E87] mt-4 text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#608BC1] transition duration-300 shadow-lg text-xl md:text-2xl"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
