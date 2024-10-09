/* eslint-disable react/no-unescaped-entities */
// components/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        <strong>Effective Date:</strong> October 4, 2024
      </p>
      <p className="text-gray-700 mb-4">
        At Gadget Hub ("we", "us", or "our"), we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and share your information when you visit our website [Your Website URL] and use our services.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">1. Information We Collect</h2>
      <ul className="list-disc pl-5 mb-4 text-gray-700">
        <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address, and payment information.</li>
        <li><strong>Non-Personal Information:</strong> Browser type, IP address, pages visited, and timestamps.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">2. How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use the information we collect for various purposes, including:
      </p>
      <ul className="list-disc pl-5 mb-4 text-gray-700">
        <li>To provide and maintain our services.</li>
        <li>To process your transactions and manage your orders.</li>
        <li>To communicate with you, including sending order confirmations, updates, and promotional materials.</li>
        <li>To improve our website and services based on user feedback and preferences.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">3. Sharing Your Information</h2>
      <p className="text-gray-700 mb-4">
        We may share your information with third parties in the following situations:
      </p>
      <ul className="list-disc pl-5 mb-4 text-gray-700">
        <li>With service providers who help us operate our website and conduct our business.</li>
        <li>If required by law or to comply with legal obligations.</li>
        <li>In connection with a merger, acquisition, or sale of all or a portion of our business.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">4. Data Security</h2>
      <p className="text-gray-700 mb-4">
        We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">5. Your Rights</h2>
      <p className="text-gray-700 mb-4">
        You have certain rights regarding your personal information, including:
      </p>
      <ul className="list-disc pl-5 mb-4 text-gray-700">
        <li>The right to access, correct, or delete your personal information.</li>
        <li>The right to withdraw consent for processing your information.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">6. Changes to This Privacy Policy</h2>
      <p className="text-gray-700 mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">7. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <p className="text-gray-700 mb-4">
        Email: [Your Email Address] <br />
        Phone: [Your Phone Number]
      </p>
    </div>
  );
};

export default PrivacyPolicy;
