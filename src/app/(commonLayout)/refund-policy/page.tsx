// components/RefundPolicy.tsx
import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Refund Policy</h1>
      <p className="text-gray-700 mb-4">
        <strong>Effective Date:</strong> October 4, 2024
      </p>
      <p className="text-gray-700 mb-4">
        At Gadget Hub, we want you to be completely satisfied with your purchase. If, for any reason, you are not satisfied with your purchase, we are here to help.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Refund Eligibility</h2>
      <p className="text-gray-700 mb-4">
        To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging. Certain types of goods are exempt from being returned, such as perishable items, gift cards, and downloadable software products.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
      <p className="text-gray-700 mb-4">
        Once we receive your returned item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.
      </p>

      <p className="text-gray-700 mb-4">
        If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer&apos;s policies.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Late or Missing Refunds</h2>
      <p className="text-gray-700 mb-4">
        If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, as it may take some time before your refund is officially posted. If you’ve done all of this and you still have not received your refund, please contact us at gadgethub@gmail.com.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions on how to return your item or about our refund process, contact us at gadgethub@gmail.com.
      </p>
    </div>
  );
};

export default RefundPolicy;
