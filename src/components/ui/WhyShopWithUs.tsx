import React from 'react';
import { FaShippingFast, FaRedo, FaHeadset, FaShieldAlt } from 'react-icons/fa';

interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: <FaShippingFast className="text-4xl text-blue-500" />,
    title: 'Free Delivery',
    description: 'Enjoy free shipping on all orders, no minimum purchase required.',
  },
  {
    id: 2,
    icon: <FaRedo className="text-4xl text-green-500" />,
    title: 'Easy Returns',
    description: 'Hassle-free returns within 30 days of purchase for a worry-free experience.',
  },
  {
    id: 3,
    icon: <FaHeadset className="text-4xl text-orange-500" />,
    title: '24/7 Customer Support',
    description: 'Our dedicated team is here to help you anytime, day or night.',
  },
  {
    id: 4,
    icon: <FaShieldAlt className="text-4xl text-red-500" />,
    title: 'Warranty Options',
    description: 'Choose from various warranty plans to ensure your purchase is protected.',
  },
];

const WhyShopWithUs: React.FC = () => {
  return (
    <section className="my-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Why Shop With Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300"
          >
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 text-center">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyShopWithUs;
