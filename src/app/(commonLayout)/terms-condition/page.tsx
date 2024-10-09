// components/TermsAndConditions.tsx
import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Terms and Conditions</h1>
      <p className="text-gray-700 mb-4">
        <strong>Effective Date:</strong> October 4, 2024
      </p>
      <p className="text-gray-700 mb-4">
        Welcome to Gadget Hub! These Terms and Conditions outline the rules and regulations for the use of our website [Your Website URL] and the services we provide.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">1. Acceptance of Terms</h2>
      <p className="text-gray-700 mb-4">
        By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, you should not use our website.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">2. Changes to Terms</h2>
      <p className="text-gray-700 mb-4">
        We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of the site after changes signifies your acceptance of the new terms.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">3. Account Registration</h2>
      <p className="text-gray-700 mb-4">
        To access certain features of our site, you may be required to create an account. You agree to:
      </p>
      <ul className="list-disc pl-5 mb-4 text-gray-700">
        <li>Provide accurate, current, and complete information during the registration process.</li>
        <li>Maintain the security of your password and account.</li>
        <li>Notify us immediately of any unauthorized use of your account.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">4. Product Information</h2>
      <p className="text-gray-700 mb-4">
        We strive to ensure that product descriptions and pricing on our website are accurate. However, we do not warrant that the information is error-free or complete. In the event of a pricing error, we reserve the right to cancel or refuse any orders placed.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">5. Payment Terms</h2>
      <p className="text-gray-700 mb-4">
        All payments must be made in full at the time of purchase. We accept various payment methods, and you agree to provide valid payment information when making a purchase.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">6. Shipping and Returns</h2>
      <p className="text-gray-700 mb-4">
        Please refer to our Shipping and Returns Policy for information on delivery times and return procedures.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">7. Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        To the fullest extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">8. Governing Law</h2>
      <p className="text-gray-700 mb-4">
        These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Country/State].
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">9. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions about these Terms and Conditions, please contact us at:
      </p>
      <p className="text-gray-700 mb-4">
        Email: gadgetshub@gmail.com <br />
        Phone: +8801712345678
      </p>
    </div>
  );
};

export default TermsAndConditions;
